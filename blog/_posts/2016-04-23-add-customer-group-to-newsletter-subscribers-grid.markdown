---
layout: post
title:  "Magento. Add to newsletter subscribers grid customer group column with sort and filter."
date:   2016-04-23
categories: [magento, adminhtml, newsletter, grid]
---

If you need add to newsletter subscribers grid the customer group (`NOT LOGGEED`, `General`, `Wholesale`, `Retail` etc) and want use this comlumn for sort, filter I have one solution to how to do it.
The main point why I rewrote the model, block and did not use the Observer is used for unregistered subscribers `NOT_LOGGED` group and the ability to filter and sort by it, now describe in more detail. 

As we know we can get from main tabel with _JOIN LEFT_ from `customer_entity` table customer group and values wiil be for standart `General = 1`, `Wholesale = 2` and `Retail = 3` but for unregistered user it will `NULL` and we can't user sort and filter by this column. For solve this I rewrote method `showCustomerInfo()` of `Mage_Newsletter_Model_Resource_Subscriber_Collection` class to add:

{% highlight php %}
  ->joinLeft(
      array('ce'=>new Zend_Db_Expr('( SELECT COALESCE(customer_id, 0) AS entity_id, COALESCE(ce.group_id, 0) AS group_id FROM newsletter_subscriber AS ns LEFT JOIN customer_entity AS ce ON ns.customer_id = ce.entity_id )')),
      'ce.entity_id=main_table.customer_id',
      array('customer_group_id'=>'group_id')
  )
{% endhighlight %}

Pay attention to this point 

{% highlight php %}
   new Zend_Db_Expr('( SELECT COALESCE(customer_id, 0) AS entity_id, COALESCE(ce.group_id, 0) AS group_id FROM newsletter_subscriber AS ns LEFT JOIN customer_entity AS ce ON ns.customer_id = ce.entity_id )
{% endhighlight %}

I'm replace `NULL` value for customer group id and customer id to `0` for use it in my custom filter method. 

Full method code:
{% highlight php %}

    public function showCustomerInfo()
    {
        $adapter = $this->getConnection();
        $customer = Mage::getModel('customer/customer');
        $firstname  = $customer->getAttribute('firstname');
        $lastname   = $customer->getAttribute('lastname');

        $this->getSelect()
            ->joinLeft(
                array('customer_lastname_table'=>$lastname->getBackend()->getTable()),
                $adapter->quoteInto('customer_lastname_table.entity_id=main_table.customer_id
                 AND customer_lastname_table.attribute_id = ?', (int)$lastname->getAttributeId()),
                array('customer_lastname'=>'value')
            )
            ->joinLeft(
                array('customer_firstname_table'=>$firstname->getBackend()->getTable()),
                $adapter->quoteInto('customer_firstname_table.entity_id=main_table.customer_id
                 AND customer_firstname_table.attribute_id = ?', (int)$firstname->getAttributeId()),
                array('customer_firstname'=>'value')
            )
            ->joinLeft(
                array('ce'=>new Zend_Db_Expr('( SELECT COALESCE(customer_id, 0) AS entity_id, COALESCE(ce.group_id, 0) AS group_id FROM newsletter_subscriber AS ns LEFT JOIN customer_entity AS ce ON ns.customer_id = ce.entity_id )')),
                'ce.entity_id=main_table.customer_id',
                array('customer_group_id'=>'group_id')
            )
            ->group('subscriber_id');

        return $this;
    }
    
{% endhighlight %}

Than I rewrote method `_prepareColumns()` of class `Mage_Adminhtml_Block_Newsletter_Subscriber_Grid` for add new colunm:

{% highlight php %}
  $groups = Mage::getResourceModel('customer/group_collection')->load()->toOptionHash();
    $this->addColumn('customer_group_id', array(
        'header'    => Mage::helper('newsletter')->__('Group'),
        'index'     => 'customer_group_id',
        'type'      => 'options',
        'default'   => 0,
        'options'   => $groups,
        'filter_condition_callback' => array($this, '_customerGroupFilter')
  ));
{% endhighlight %}

and add custom filter method namely `_customerGroupFilter()`

{% highlight php %}
  protected function _customerGroupFilter($collection, $column) 
  {
    $value = $column->getFilter()->getValue();
       
    $this->getCollection()->getSelect()->where("ce.group_id =?", $value);
       
   return ;
  }
{% endhighlight %}

And thats all.


Read about the [SQL COALESCE][sql-coalesce] for more info.

[sql-coalesce]: http://dev.mysql.com/doc/refman/5.7/en/comparison-operators.html#function_coalesce

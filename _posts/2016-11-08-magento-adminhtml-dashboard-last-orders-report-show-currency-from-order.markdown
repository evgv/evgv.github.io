---
layout: post
title:  "Magento. Adminhtml dashboard last order reports show currency from order."
date:   2016-11-06
categories: [magento, adminhtml, dashboard, reports, currency]
---

By defaut in admin panel on dashboard listed last 5 orders but currency code in this reports retrieved from base currency setup for store instead current order

{% highlight php %}
    $baseCurrencyCode = Mage::app()->getStore((int)$this->getParam('store'))->getBaseCurrencyCode();
{% endhighlight %}

If you need show the right currency code follow next steps:

###Copy file 

`../app/code/core/Mage/Adminhtml/Block/Dashboard/Orders/Grid.php` 

to 

`../app/code/local/Mage/Adminhtml/Block/Dashboard/Orders/Grid.php`

###Paste 

{% highlight php %}
        $this->addColumn('total', array(
            'header'   => $this->__('Grand Total'),
            'align'    => 'right',
            'sortable' => false,
            'index'    => 'revenue',
            'type'     => 'currency',
            'currency' => 'order_currency_code'
        ));
{% endhighlight %}

instead

{% highlight php %}
        $baseCurrencyCode = Mage::app()->getStore((int)$this->getParam('store'))->getBaseCurrencyCode();

        $this->addColumn('total', array(
            'header'    => $this->__('Grand Total'),
            'align'     => 'right',
            'sortable'  => false,
            'type'      => 'currency',
            'currency_code'  => $baseCurrencyCode,
            'index'     => 'revenue'
        ));
{% endhighlight %}

difference in line `'currency' => 'order_currency_code'` instead `'currency_code'  => $baseCurrencyCode`.



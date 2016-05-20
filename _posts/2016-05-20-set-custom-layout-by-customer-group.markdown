---
layout: post
title:  "Magento. Change layout on fly in depends from current customer group."
date:   2016-04-07
categories: [magento, layout]
---
If you need find a products what not applied to website you can execute this query and it return a list of all product ids whta not applied to any website.
Can also improve this query for retrieve any need fileds besides `entity_id` like a `sku` etc, or can set specific website id for check it.

Code:

`../etc/congif.xml`

Initialize event in front section

{% highlight xml %}

    <frontend>
      
    ...

    <events>
        <controller_action_layout_load_before>
            <observers>
                <VENDOR_EXTENSION_NAME_model_observer>
                    <type>singleton</type>
                    <class>EXTENSION_NAME/observer</class>
                    <method>setTemplate</method>
                </VENDOR_EXTENSION_NAME_model_observer>
            </observers>
        </controller_action_layout_load_before>
    </events>	

    ...
      
    </frontend>
    
{% endhighlight %}

`../Model/Observer.php`

Add observer for catch event

<script src="https://gist.github.com/evgv/bdd418fd826d8bf07bff0fdb059d0bdd.js"></script>

`../layout/EXTENSION_NAME.xml`

Setup in our layout blocks with custom markdown for csutomer gropus. We can use this for any conditions.

{% highlight xml %}
  <layout version="1.0.0">
      
      ...
      
  <CUSTOMER_GROUP_NOT_LOGGED_IN>
            <reference name="REFERENCE_BLOCK_NAME">
                <block type="BLOCK_TYPE" name="CURRENT_BLOCK_NAME" as="CURRENT_BLOCK_ALIAS" before="-" template="CURRENT_BLOCK_TEMPLATE"/>
            </reference>
        </CUSTOMER_GROUP_NOT_LOGGED_IN>
            
        <CUSTOMER_GROUP_Genearl>
            <reference name="REFERENCE_BLOCK_NAME">
                <block type="BLOCK_TYPE" name="CURRENT_BLOCK_NAME" as="CURRENT_BLOCK_ALIAS" before="-" template="CURRENT_BLOCK_TEMPLATE"/>
            </reference>
        </CUSTOMER_GROUP_Genearl>
            
        <CUSTOMER_GROUP_Wholesale>
            <reference name="REFERENCE_BLOCK_NAME">
                <block type="BLOCK_TYPE" name="CURRENT_BLOCK_NAME" as="CURRENT_BLOCK_ALIAS" before="-" template="CURRENT_BLOCK_TEMPLATE"/>
            </reference>
        </CUSTOMER_GROUP_Wholesale>
            
        <CUSTOMER_GROUP_Retail>
            <reference name="REFERENCE_BLOCK_NAME">
                <block type="BLOCK_TYPE" name="CURRENT_BLOCK_NAME" as="CURRENT_BLOCK_ALIAS" before="-" template="CURRENT_BLOCK_TEMPLATE"/>
            </reference>
        </CUSTOMER_GROUP_Retail>
      
      ...
      
	</layout>
{% endhighlight %}

Read about the [SQL JOIN][sql-join] for more info.

[sql-join]: http://www.w3schools.com/sql/sql_join.asp

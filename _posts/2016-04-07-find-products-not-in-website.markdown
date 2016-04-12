---
layout: post
title:  "Magento. Sql query for find all products what not  applied to website."
date:   2016-04-07
categories: magento sql
---
If you need find a products what not applied to website you can execute this query and it return a list of all product ids whta not applied to any website.
Can also improve this query for retrieve any need fileds besides `entity_id` like a `sku` etc, or can set specific website id for check it.

Query:

{% highlight sql %}
  SELECT entity_id 
  FROM catalog_product_entity AS cpe 
  LEFT JOIN catalog_product_website AS cpw 
  ON cpw.product_id = cpe.entity_id 
  WHERE cpw.product_id IS NULL
{% endhighlight %}

Read about the [SQL JOIN][sql-join] for more info.

[sql-join]: http://www.w3schools.com/sql/sql_join.asp

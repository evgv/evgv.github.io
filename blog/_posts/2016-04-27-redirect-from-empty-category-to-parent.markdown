---
layout: post
title:  "Magento. Redirect from category with no products to parent category."
date:   2016-04-27
categories: [magento, redirect, categories, observer]
---

A simple example of a redirect to a parent category from category without products. Use observer and watching the event `core_block_abstract_to_html_before`.

Everything that's needed:

Declare observer in `config.xml`

{% highlight xml %}
    <frontend>
        
        ...
        
        <events>
            <core_block_abstract_to_html_before>
                <observers>
                    <system_block_abstract_to_html_before>
                        <type>singleton</type>
                        <class>YOU EXTENSION NAME/observer</class>
                        <method>redirectToParentCategory</method>
                    </system_block_abstract_to_html_before>
                </observers>
            </core_block_abstract_to_html_before>
        </events>
        
        ...
        
    </frontend>
{% endhighlight %}


And add tis methods to `../Models/Observer.php`

<script src="https://gist.github.com/evgv/fabc7494db9520d8357822fb18a97791.js"></script>

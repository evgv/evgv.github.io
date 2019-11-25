---
layout: post
title:  "Magento. Redirect from disabled product to last product category."
date:   2016-04-27
categories: [magento, redirect, categories, product, observer]
---

A simple example of a redirect to a last product category if product has status `Disabled`. Use observer and watching the event `controller_action_predispatch_catalog_product_view`.

Everything that's needed:

Declare observer in `config.xml`

{% highlight xml %}
    <frontend>
        
        ...
        
        <events>
            <controller_action_predispatch_catalog_product_view>
                <observers>
                    <system_controller_action_postdispatch_catalog_product_view>
                        <type>singleton</type>
                        <class>YOU EXTENSION NAME/observer</class>
                        <method>catalogProductViewPredispatch</method>
                    </system_controller_action_postdispatch_catalog_product_view>
                </observers>
            </controller_action_predispatch_catalog_product_view>
        </events>
        
        ...
        
    </frontend>
{% endhighlight %}


And add tis methods to `../Models/Observer.php`

<script src="https://gist.github.com/evgv/c9294a699394bdd3282caf3b3c50267b.js"></script>

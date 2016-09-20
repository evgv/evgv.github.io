---
layout: post
title:  "Magento. Get custom attribute on cart page."
date:   2016-09-20
categories: [magento, attribute, product, cart]
---

How to get an attribute value on cart page?   
It's so easy, just need to make mini extension for add our parameter to the `config.xml` file or use or use early made extension.

**Two steps**

1. Add to `config.xml` section `global`

{% highlight xml %}
    <global>
        <sales>
            <quote>
                <item>
                    <product_attributes>
                        <brand />
                    </product_attributes>
                </item>
            </quote>
        </sales>
    </global>
{% endhighlight %}

where `<brand />` namely **brand** is attribute's code which we need to add, one or more then by this template like a:

{% highlight xml %}
    <global>
        <sales>
            <quote>
                <item>
                    <product_attributes>
                        <custom_atribute_code_1 />
                        ...
                        <custom_atribute_code_N />
                    </product_attributes>
                </item>
            </quote>
        </sales>
    </global>
{% endhighlight %}

2. Get added attribute in cart

{% highlight php %}
	  <td class="product-cart-info">
        <?php $_product = $_item->getProduct(); ?>
        <div class="product-brand-name">
            <?php echo $_product->getBrand(); // for text and etc attributes ?>
            <?php echo $_product->getAttributeText('brand'); // for select/multiselect attribues retiurn an option value  ?>
        </div>
    </td>
{% endhighlight %}

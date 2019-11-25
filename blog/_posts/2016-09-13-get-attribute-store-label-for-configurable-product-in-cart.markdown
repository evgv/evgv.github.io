---
layout: post
title:  "Magento. Get attribute store label for configurable product in cart."
date:   2016-09-13
categories: [magento, attribute, label, configurable, cart]
---
# Get attribute store label for configurable product in cart

I rewrote the method `getSelectedAttributesInfo()` in class `Mage_Catalog_Model_Product_Type_Configurable` by copy `..app/code/core/Mage/Catalog/Model/Product/Type/Configurable.php` to `../app/code/local/Mage/Catalog/Model/Product/Type/Configurable.php`. That added into configurable options array attribute `store_label` on cart page. Because by default exist onle `label` for main(default) store view.

Rewrited method:

{% highlight php %} 

    /**
     * !Rewrited!
     * 
     * Retrieve Selected Attributes info
     * Added store label for attribute
     * 
     * @author <https://github.com/evgv>
     * @param  Mage_Catalog_Model_Product $product
     * @return array
     */
    public function getSelectedAttributesInfo($product = null)
    {
        $attributes = array();
        Varien_Profiler::start('CONFIGURABLE:'.__METHOD__);
        if ($attributesOption = $this->getProduct($product)->getCustomOption('attributes')) {
            $data = unserialize($attributesOption->getValue());
            $this->getUsedProductAttributeIds($product);
            $usedAttributes = $this->getProduct($product)->getData($this->_usedAttributes);
            foreach ($data as $attributeId => $attributeValue) {
                if (isset($usedAttributes[$attributeId])) {
                    $attribute = $usedAttributes[$attributeId];
                    $label = $attribute->getLabel();
                    $value = $attribute->getProductAttribute();
                    
                    
                    if ($value->getSourceModel()) {
                        $attribute_data = $value->getData();
                        $store_label    = $attribute_data['store_label'];
                        
                        $value = $value->getSource()->getOptionText($attributeValue);
                    }
                    else {
                        $value       = '';
                        $store_label = $label;
                    }
                    $attributes[] = array('label'=>$label, 'store_label'=>$store_label, 'value'=>$value);
                }
            }
        }
        Varien_Profiler::stop('CONFIGURABLE:'.__METHOD__);
        return $attributes;
    }

{% endhighlight %}

then call it in template `../app/design/frontend/default/default/template/checkout/cart/item/default.phtml`

{% highlight html %}
    <dt><?php echo $this->escapeHtml($_option['store_label']) ?></dt>
{% endhighlight %}

instead

{% highlight html %}
    <dt><?php echo $this->escapeHtml($_option['label']) ?></dt>
{% endhighlight %}


Link to [repository][repository] for more info.

[repository]: https://github.com/evgv/Mage_Catalog_Model_Product_Type_Configurable

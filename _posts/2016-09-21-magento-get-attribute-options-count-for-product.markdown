---
layout: post
title:  "Magento. Get attribute options count for product."
date:   2016-09-21
categories: [magento, attribute, product, options]
---

**Two steps**

1. Create little extension with helper class or add code to existed extension.

{% highlight php %}

<?php 

class Vendor_ExtensionName_Helper_Data extends Mage_Core_Helper_Abstract 
{
    protected $_attributes;
    protected $_options_count;
    
    /**
     * Retrieve product attribute options count
     * 
     * @param Mage_Catalog_Model_Product $_product
     * @param string $_attribute_code
     * 
     * @return string | boolean
     */
    public function getAttributeOptionsCount($_product, $_attribute_code)
    {
        if ($_product->getData('type_id') == "configurable") {
            if(!isset($this->_attributes[$_product->getId()])) {
                $config = $_product->getTypeInstance(true);
                $this->_attributes[$_product->getId()] = $config->getConfigurableAttributesAsArray($_product);
            }

            if(
                isset($this->_attributes[$_product->getId()]) &&
                !isset($this->_options_count[$_product->getId()][$_attribute_code][0])
            ) {
                foreach($this->_attributes[$_product->getId()] as $attribute) {
                    if($attribute['attribute_code'] == $_attribute_code) {
                        $this->_options_count[$_product->getId()][$_attribute_code][0] = count($attribute["values"]);
                    }
                }
            }

            return isset($this->_options_count[$_product->getId()][$_attribute_code][0]) ?
                   $this->_options_count[$_product->getId()][$_attribute_code][0] :
                   false;
        } 
        
        return false;
    }
}
{% endhighlight %}

2. Get options count, for example in catalog product list get product colors count.

{% highlight php %}
   <div class="product-item-colors-count">
      <?php $count = Mage::helper('extensionname')->getAttributeOptionsCount($_product, 'color') ?>
      <?php if($count): ?>
         <?php echo $this->__('%s colors', $count); ?>
      <?php endif; ?>
    </div>
{% endhighlight %}

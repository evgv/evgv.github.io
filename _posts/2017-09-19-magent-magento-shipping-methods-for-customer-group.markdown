---
layout: post
title:  "Magento. Extension allow/disallow shipping methods for specified customer groups."
date:   2017-09-19
categories: [magento, shipping-methods, shipping, extension, customer, customer-groups]
---

# [ShippingMethodsForCustomerGroup](https://github.com/evgv/magento-shipping-methods-for-customer-group)

### Features

 - Added to `flatrate`, `freeshipping` and `tablerate` additional settings for `allow`/`disallow` shipping methods for specified customer groups.   
   
   
### Rewrites
 - `Mage_Shipping_Model_Shipping::collectCarrierRates` model with `NoName_ShippingMethodsForCustomerGroup_Model_Shipping::collectCarrierRates`
 

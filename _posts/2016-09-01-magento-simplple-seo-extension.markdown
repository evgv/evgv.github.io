---
layout: post
title:  "Magento. Simple Search Engine Optimization Extension."
date:   2016-09-01
categories: [magento, extension, seo]
---
# Simple Search Engine Optimization Extension

Plug and Play Magento Extension for generate own SEO templates for custom pages.

[Features](#features)  
[Magento Compatibility](#magento-compatibility)  
[How to use](#how-to-use)   

## Features
- Simple in use
- Lightweight
- User friendly

## Magento Compatibility
The following version have passed all tests:
- CE 1.7.x
- CE 1.9.x

## How to use

#### Customize product pages
 - Page title
 - Meta description
 - Meta keys
 - H1 tag

Variables for SEO text, they are will replace with values:
`{product.name}`         - product name  
`{product.price}`        - product price  
`{product.manufacturer}` - product price  

Retrieve H1 for product page
```php
    /* @var $_helperSPS NoName_SimpleSeo_Helper_Product */
    $_helperSPS = Mage::helper('simpleseo/product');
    echo $_helperSPS->getH1();
```

#### Customize category pages
- Page title
- Meta description
- Meta keys
- H1 tag

`{category.name}`              - category name  
`{category.short_description}` - category short description  
`{category.description}`       - category description  

Retrieve H1 for category page
```php
    /* @var $_helperSCS NoName_SimpleSeo_Helper_Category */
    $_helperSCS = Mage::helper('simpleseo/category');
    echo $_helperSCS->getH1();
```

#### Customize category pages with attribute
The same as for a category page, added only attribute `manufacturer` value get from request if exist.  
`{manufacturer.name}` - manufacturer name

#### Customize CMS pages
- Breadcrumb (beta, rewrite breadcrumbs template)
- Page title
- Meta description
- Meta keys
- H1 tag

`{page.title}` - cms(or other) page title  


[More info][more-info]
[more-info]:https://github.com/evgv/NoName_SimpleSeo

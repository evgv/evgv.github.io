---
layout: post
title:  "Magento. Bug with collect discount into grandtotal in PHP 7"
date:   2017-06-28
categories: [magento, grandtotal, discount, php7]
---

If you have `php7` installed on your server and the discount is not included in the grandtotals, then most likely this is due to the different [usort()](http://php.net/manual/en/function.usort.php) function algorithm in `php5` and `php7` because now the grandtotal is not the last one to calculate.

You can fix this by install the module below.
        
      
My [extension](https://github.com/evgv/magento-php7-totals-fix) on github where that bug is fixed.

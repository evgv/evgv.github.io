---
layout: post
title:  "Apache. Load fonts on subdomains."
date:   2016-09-08
categories: [apache, htaccess, fonts, cross-domain]
---
# Apache. Load fonts on sub/different domains.

I encountered this problem when install `Intenco` theme to one of the shops that works on `Magento`. 
Which had 5 sites with individual domains, and storeviews for `US`, `GB`, `DE`, `FR` and `IT`.

All styles and scripts subdomian (let it be store-domain.com) gets from the primary domain(let it be main-domain.com) but this theme use their own fonts, 
including iconic that plugs into `* .css` files and that's what showed Chrome browser console when the page loads:

```
Font from origin 'http://main-domain.com' has been blocked from loading by Cross-Origin 
Resource Sharing policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. 
Origin 'http://store-domain.com' is therefore not allowed access.
```

A little googling and I learned that this problem is solved by simply adding to the apache configuration lines, my solution in gist:

<script src="https://gist.github.com/evgv/2946ea510a83a8474d04b8322fea3501.js"></script>

That's all, the problem is solved)

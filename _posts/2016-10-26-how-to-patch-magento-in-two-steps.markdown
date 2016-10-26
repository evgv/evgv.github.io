---
layout: post
title:  "Patch Magento."
date:   2016-10-26
categories: [magento, patch, version]
---

# How to patch the Magento in two steps
### Example on 1.9.2.4 version

### Be careful
_Before patching you need create a database dump and site files dump._

1. Go to [Magento commerce site][magentocommerce] in downloads, select `Release Archive` and find `Magento Community Edition Patches - 1.x` section where find needed patch in my case is the [SUPEE-8788][supee-8788] and chose your version like `SUPEE-8788 for CE 1.9.2.4 (0.72 MB)` then click to `Download` log in if not and you get `PATCH_SUPEE-8788_CE_1.9.2.4_v2-2016-10-14-09-42-47.sh` file that is all step one ended.

2. Copy retrieved files to site root folder like `../public_html/` set privilegues to file `chmod +x <patch-file-name>.sh` or `chmod 776 <patch-file-name>.sh` the run this file `./<patch-file-name>.sh` if all right you will see the message in console `Patch was applied/reverted successfully.`. If you need revert the patch run `./<patch-file-name>.sh -R`\

### Error
If you have an errors check permissions on site folders must be 755 and for files into 644 for you customer and group.

[More][more] inforamtion

[magentocommerce]: https://www.magentocommerce.com/download
[supee-8788]: https://www.magentocommerce.com/download#download1934
[more]: http://devdocs.magento.com/guides/m1x/other/ht_install-patches.html

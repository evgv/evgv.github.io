---
layout: post
title:  "Netbeans. Automatic CSS minify."
date:   2016-10-31
categories: [netbeans, css, sass, minify]
---

For generate compressed CSS output when compiling SCSS(of cource you must before do this [install]({% post_url 2016-10-31-netbeans-add-sass-preprocessor-to-project %})  and setup Sass compile in netbeans) files in Netbeans need add into: 

`File > Project Properties > CSS Preprocessors > Sass tab > Compiler options`

this options

`--style compressed`

And that's all, enjoy compressed CSS files))

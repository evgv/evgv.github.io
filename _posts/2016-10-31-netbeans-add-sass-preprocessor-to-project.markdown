---
layout: post
title:  "Netbeans. Add Sass preprocessor to your project."
date:   2016-10-31
categories: [netbeans, css, sass]
---

Open the Netbeans (my version is 8.1),

go to `File > Project Properties > CSS Preprocessors > Sass tab` 


![see]({{ site.url }}/assets/e7312adfd3.jpg) 


and press `Configure Executables` then into 


![window]({{ site.url }}/assets/f1e34296b5.jpg) 


click to `Search` opposite `SASS` field if you already installed it or `Install Sass` then you will be automaticly open [install-sass][install-sass] in your default web browser.

Then follow the instructions for install SASS on your machine(windows or unix). 

Thereafter click `Search` and field with path to SASS filled automaticly or put it with your hands. Then back to window with preprocessors setting and setup `input` _/sass_(or full path from project root folder) and `output` _/css_ (or full path from project root folder).


After this, your SASS that files stored in `input` after save will be compiled to CSS that, in turn will be stored in `output`, also you can disable auto compile after save and do it manually.

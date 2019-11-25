---
layout: post
title:  "Display loader until page fully loaded. Use pure Js and Css animation."
date:   2016-11-13
categories: [js, css, loader]
---

I relocated my CSS and JS files(you can see this in source code of this page, press `ctrl` + `U` in web browser) in the end of `<body>` tag following the recommendations of Google Page Speed for improve page load speed. But thereafter I get new problem, when site is loading first all visitors see naked and ugly HTML markup on one second(depend from internet connection speed) thereafter applied styles from CSS files and then JS.

So I decided add loader until page fully loaded. I used pure javascript because this code must execute before page rendering start and if you use(I don't) jQuery or any similar libs for manage DOM objects which are included after page fully load or `async`.

We are need a `noscroll` class which added to body before render page to prevent page scroll, after page fully loaded we are removed that class from body. Styles for overlay, spinner and animation fro spinner see below. Animation for spinner I found [here][linkt-to-animations] (many thanks to this man)


### CSS ###
{% highlight css %}

<style>

    .noscroll {
        position: fixed;
        overflow: hidden;
    }

    #overlay {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: #ffffff;
    }

    #spinner {
        display: none;
        position: fixed;
        width: 40px;
        height: 40px;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -20px;
        z-index: 101;
        background-color: #3498db;

        -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
        animation: sk-rotateplane 1.2s infinite ease-in-out;
    }

    @-webkit-keyframes sk-rotateplane {
        0% { -webkit-transform: perspective(120px) }
        50% { -webkit-transform: perspective(120px) rotateY(180deg) }
        100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }

    @keyframes sk-rotateplane {
        0% {
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
        } 50% {
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
        } 100% {
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
    }

</style>

{% endhighlight %}

Two div elements with id attribute `overlay` and `spinner`.

### HTML ###
{% highlight html %}

<div id="overlay"></div>
<div id="spinner"></div>

{% endhighlight %}


Some JS code that is add a few logic.

Right after page start rendering body, added class `noscroll` to body tag for prevent scroll and set styles properties `display: block` to overlay and spinner.

Thereafter page is fully loaded we do all operations in reverse order. Set styles properties `display: none` to spinner and overlay then unset from body tag class `noscroll`.

### JS ###
{% highlight js %}

<script>

    document.body.setAttribute("class", "noscroll");

    document.getElementById("overlay").style.display = "block";
    document.getElementById("spinner").style.display = "block";


    window.onload = function() {
      document.getElementById("spinner").style.display = "none";
      document.getElementById("overlay").style.display = "none";

      document.body.className = document.body.className.replace(/\bnoscroll\b/,'');
    }

</script>

{% endhighlight %}


I wrote all this code in separate HTML file(in same order as in post) and then include it right after body tag opened.

This is all, example of work you should have seen when this page have been loaded)))

P.S.
*Maybe later I will be create a small plugin for display loader until page fully loaded.*



[here]: http://tobiasahlin.com/spinkit/

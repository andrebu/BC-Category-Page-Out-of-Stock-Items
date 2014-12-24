BigCommerce-Out-of-Stock-Category-Items
=======================================

BigCommerce Out of Stock Category Items -- this JS will find Out of Stock or Sold Out items on category pages and Add a customizable ribbon to the listing to make it easy to see

##On DankStop

Currently it is installed at the bottom of Footer.html.  It needs to be moved to a more specific Category-listing-page only panel to avoid it loading at unnecessary times and wasting precious network resources, as marginal or even negligible as the waste may be.

```HTML
<!-- Out of Stock selector -->
<script type="text/javascript">
$(".ProductList li .ProductActionAdd a:contains('Sold out')").each(function( index ) {
   $(this).parents('li').addClass('SoldOut'); 
   $(this).parents('li').find('.ProductImage').append('<div class="sold-out-overlay-container" style="display:%%GLOBAL_HideActionAdd%%;"> \
            <div class="sold-out-overlay"> \
                <span> \
                    Out of Stock \
                </span> \
            </div> \
        </div>');
});
</script>
```

## Installation

    Will provide later.

## Using

To get this to work, you just need to require the module once per run-time, like so.

    Just install and it'l do the work for you!


## Other BigCommerce modules

* [BigCommerce Product Page Demo Videos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos)
* [BigCommerce Product Page Brand Descriptions](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Descriptions)
* [BigCommerce Product Page Brand Logos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Logos)
* [BigCommerce Category Page Color Swatch](https://github.com/iamandrebulatov/BigCommerce-Color-Swatch-On-Category)
* [BigCommerce Category Page 2nd Alternate Thumbnail](https://github.com/iamandrebulatov/BigCommerce-Category-Pages-2nd-Alternate-Thumbnail)
* [BigCommerce Category Page Videos](https://github.com/iamandrebulatov/BigCommerce-Category-Page-Demo-Videos)
* [BigCommerce Category Page Out of Stock Ribbons](https://github.com/iamandrebulatov/BigCommerce-Out-of-Stock-Category-Items)


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [Gittip](http://gittip.com) or [ChangeTip](http://changetip.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![Gittip](http://img.shields.io/gittip/alexgorbatchev.png)](https://www.gittip.com/andrebulatov/)
<div id="changetip_tipme_button" data-bid="uamLZQArprKRkS95Eb2tke" data-uid="EM6EKFgZ8MrqjBShL59Fin"></div><script>(function(document,script,id){var js,r=document.getElementsByTagName(script)[0],protocol=/^http:/.test(document.location)?'http':'https';if(!document.getElementById(id)){js=document.createElement(script);js.id=id;js.src=protocol+'://widgets.changetip.com/public/js/widgets.js';r.parentNode.insertBefore(js,r)}}(document,'script','changetip_w_0'));</script>
[![PayPayl donate button](http://img.shields.io/paypal/donate.png?color=yellow)](https://wwal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PSDPM9268P8RW "Donate once-off to this project using Paypal")


## License

The MIT License (MIT)

Copyright (c) 2014 Andre Bulatov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

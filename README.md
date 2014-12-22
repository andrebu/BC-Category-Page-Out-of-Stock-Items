BigCommerce-Out-of-Stock-Category-Items
=======================================

BigCommerce Out of Stock Category Items -- this JS will find Out of Stock or Sold Out items on category pages and Add a customizable ribbon to the listing to make it easy to see

On DankStop
-----------
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

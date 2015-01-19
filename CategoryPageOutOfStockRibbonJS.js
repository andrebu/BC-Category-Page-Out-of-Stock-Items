// Out of Stock selector -->
$(document).ready(function(){
  var soldOutOverlay = ('<div class="sold-out-overlay-container" style="display:%%GLOBAL_HideActionAdd%%;">' +
				            '<div class="sold-out-overlay">' + 
				                '<span>' +
				                    'Out of Stock' +
				                '</span>' +
				            '</div>' +
				        '</div>');
  $(".ProductList li .ProductActionAdd a:contains('Sold out')").each(function( index ) {
     $(this).parents('li').addClass('SoldOut'); 
     $(this).parents('li').find('.ProductImage').append(soldOutOverlay);
  });
});
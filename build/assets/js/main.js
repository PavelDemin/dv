$(document).ready(function(){

    let searchText = function() {
        $('#search-text').focus(function () {
            $(this).attr("rel", $(this).attr("placeholder"));
            $(this).removeAttr("placeholder");
        });
        $('#search-text').blur(function () {
            $(this).attr("placeholder", $(this).attr("rel"));
            $(this).removeAttr("rel");
        });
    };

    let openMenuMobile = function() {
        $('.menu-mobile__icon').click(function() {
            $('.menu__list-mobile').addClass('menu__list-mobile-open');
            $('.menu__close').addClass('menu__close-open');
        });

    };

    let closeMenuMobile = function() {
        $('.menu__close').click(function() {
            $('.menu__list').removeClass('menu__list-mobile-open');
            $(this).removeClass('menu__close-open');
        });
    };

    let openMenuTablet = function() {
      $('.menu__item-tablet').click(function(){
          $('.menu__item').removeClass('menu__item-mobile-hide');
      });
    };

 
    searchText();
    openMenuMobile();
    closeMenuMobile();
    //openMenuTablet();


});
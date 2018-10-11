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
            $('.menu__list-mobile').toggle('fast');
        });
    };

 
    searchText();
    openMenuMobile();


});

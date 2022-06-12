function hideLoader() {
    $('.preloader').hide();
    $('html').css('overflow-y', 'visible');
}

$('html').css('overflow-y', 'hidden');
// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 4 * 1000);

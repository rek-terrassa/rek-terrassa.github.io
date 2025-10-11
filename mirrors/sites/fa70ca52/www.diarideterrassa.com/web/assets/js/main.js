$(document).ready(function(){
    $('article.opinion').each(function() {
        $(this).find('.wrap-both').prepend($(this).find('.firma-hibrida'));
    });
    // if($('article').hasClass('directo')){
    //     $('.en-directo').css('display', 'block');

    // };
    // if($('article').hasClass('exclusiva')){
    //     $('.en-exclusiva').css('display', 'block');

    // }
});
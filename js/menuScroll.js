$('.nav-item a').click(function(){ 
    $('.offcanvas').offcanvas('hide'); 
});

$(function(){
    $('.nav-item a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })
})
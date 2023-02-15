const found = function found() {    
    $(document).ready(function() {
        $('img').click(function(event){
            //$(this).css('visibility', 'hidden');
            $(this).animate({opacity:0});
        }); 
    });
}

found();
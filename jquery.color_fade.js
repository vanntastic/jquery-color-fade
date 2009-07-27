(function($) {
    /*
    
     Jquery Color Fade Plugin
     ------------------------
     
     REQUIREMENTS:
    
     - Jquery 1.3.2 or higher
     - Jquery UI 1.7.2 or higher
    
     Creates a color fade technique made popular by 37signals' Yellow Fade Technique
    
     USAGE:
    
     color_fade({from:"yellow",to"white",speed:500})
      - from : color that element will fade from
      - to : color that element will fade to
      - speed : the speed of the animation
    
    */
    
    $.fn.color_fade = function(opts) {
      
      opts = $.extend({from:"yellow",to:"white",speed:500}, opts || {}); 
      
      $(this).css('background-color', opts['from']);            
      $(this).animate(
          { backgroundColor:opts['from'] }, 
          { duration: opts['speed'], 
            complete: function(){
              $(this).animate({backgroundColor: opts['to']}, opts['speed'])
            } });
        
    }
    
   

})(jQuery);
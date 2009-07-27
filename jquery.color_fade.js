(function($) {

    $.fn.color_fade = function(opts) {
      
      opts = $.extend({from:"yellow",to:"white",speed:500}, opts || {}); 
                 
      $(this).animate({backgroundColor:opts['from']}, opts['speed']);
      $(this).animate({backgroundColor:opts['to']}, opts['speed']);
    }

})(jQuery);
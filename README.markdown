Jquery Color Fade Plugin
------------------------

REQUIREMENTS:

- Jquery 1.3.2 or higher
- Jquery UI 1.7.2 or higher

Creates a color fade technique made popular by 37signals' Yellow Fade Technique

USAGE:

      color_fade({from:"yellow",to"white",speed:500})

      - from : color that element will fade from, can use hex or color code
      - to : color that element will fade to, can use hex or color code
      - speed : the speed of the animation

EXAMPLES:

The default color fade technique uses a yellow to white fade. 

      // Fade from yellow to white
      $('p').color_fade();
      
      // Fade from blue to white
      $('p').color_fade({from:'blue',to:'white'});
      
      // Fade from black to white, real fast
      $('p').color_fade({from'black',to:'white',speed:100});
/*! SVG Pie Timer 0.9.1 | Anders Grimsrud, grint.no | MIT License */
;(function(w) {

    'use strict';

    // Date.now fix by Ari Fuchs, afuchs.tumblr.com/post/23550124774/date-now-in-ie8

    Date.now = Date.now || function() { return +new Date };

    // Draw SVG path
  
    function draw(element, rate) {
        var count = element.length,
            angle = 360 * rate;

        angle %= 360;

        var rad = (angle * Math.PI / 180), 
            x = Math.sin(rad) * 125, 
            y = Math.cos(rad) * - 125, 
            mid = (angle > 180) ? 1 : 0, 
            shape = 'M 0 0 v -125 A 125 125 1 ' 
                   + mid + ' 1 ' 
                   +  x  + ' ' 
                   +  y  + ' z';

        // If array of elements, draw each one
      
        if(element instanceof Array)
            while(count--)
                element[count].setAttribute('d', shape)
        else
            element.setAttribute('d', shape)
    }

    // Prepare timer
    // Define in global scope
  
    w.svgPieTimer = function(props) {

        var element = props.element,
            duration = props.duration || 1000,
            n = props.loops;

        // Optional warning
        
        if(!element) throw "SVG Pie Timer: Error - element required"

        // This part might be confusing:
        // If n==0, do infinite loops
        // In other cases where n is set, do n loops
        // If n is not set, do 1 loop
        // Do it this way to prevent mixing n==0 and !n
        
        n = (n==0) ? 0 : n ? n : 1;

        var end = Date.now() + duration * n,
            totaldur = duration * n;

        // Animate frame by frame
      
        (function frame() {
            var current = Date.now(),
                remaining = end - current,

                // Now set rotation rate
                // E.g. 50% of first loop returns 1.5
                // E.g. 75% of sixth loop returns 6.75
                // Has to return >0 for SVG to be drawn correctly
                // If you need the current loop, use Math.floor(rate)

                rate = n + 1 - remaining / duration;

            // As requestAnimationFrame will draw whenever capable, 
            // the animation might end before it reaches 100%.
            // Let's simulate completeness on the last visual
            // frame of the loop, regardless of actual progress
          
            if(remaining < 60) {
                
                // 1.0 might break, set to slightly lower than 1
                // Update: Set to slightly lower than n instead
              
                draw(element, n - 0.0001);
              
              
                // Stop animating when we reach n loops (if n is set)
             
                if(remaining < totaldur && n) return
            }
   
            // Draw

            draw(element, rate);
          
            // Request next frame
          
           requestAnimationFrame(frame);
        }());
    }

})(window, undefined);

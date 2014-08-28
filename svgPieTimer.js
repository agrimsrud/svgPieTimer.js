/*! SVG Pie Timer | 0.9.1 | Anders Grimsrud | grint.no | MIT License */
;(function(w) {

    'use strict';

    Date.now = Date.now || function() { return +new Date };

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
      
        if(element instanceof Array)
            while(count--)
                element[count].setAttribute('d', shape)
        else
            element.setAttribute('d', shape)
    }
  
    w.svgPieTimer = function(props) {

        var element = props.element,
            duration = props.duration || 1000,
            n = props.loops;

        n = (n==0) ? 0 : n ? n : 1;

        var end = Date.now() + duration * n,
            totaldur = duration * n;
      
        (function frame() {
            var current = Date.now(),
                remaining = end - current,
                rate = n + 1 - remaining / duration;

            if(remaining < 60) {
                              
                draw(element, n - 0.0001);
              
                if(remaining < totaldur && n) return
            }
   
            draw(element, rate);
          
           requestAnimationFrame(frame);
        }());
    }

})(window, undefined);

svgPieTimer.js
================

Animating an SVG Pie Timer in javascript

Current version: 0.9.1 released 28.08.2014


Recommended use
---------------

```html
<script src="http://cdn.rawgit.com/darius/requestAnimationFrame/master/requestAnimationFrame.min.js"></script>
<script src="svgPieTimer.min.js"></script>
<script>
svgPieTimer({
    element: SVGPathElement,
    duration: 1000,
    loops: 2
});
</script>
```


Demo
---------------
For a demonstration see [this CodePen](http://codepen.io/agrimsrud/pen/Dhbfy).


Properties
---------------

As seen above, you can call svgPieTimer() with the following properties:

`element` (required) SVG Path element to animate. Will accept array.

`duration` (optional) Set duration in milliseconds.

`loops` (optional) Set amount of spins. Leave blank for 1 spin. Set to 0 for infinite spins.


requestAnimationFrame
---------------
To optimize for performance, I've decided to use requestAnimationFrame. Browser support is good, but could have been better. I recommend using a polyfill for older browsers like IE9. Personally I prefer [this one](https://github.com/darius/requestAnimationFrame) by Darius Bacon, based on the polyfill by Erik Möller.


Authors and credits
---------------
Created by [Anders Grimsrud](grint.no). This release is a refined version of the initial [SVG Pie Timer](http://codepen.io/agrimsrud/pen/EmCoa) experiment.

Inspired by the [Color Wheel](http://itpastorn.github.io/webbteknik/future-stuff/svg/color-wheel.html) by [Lars Gunther](https://github.com/itpastorn).


License
---------------
Released under the [MIT License](http://opensource.org/licenses/mit-license.php).

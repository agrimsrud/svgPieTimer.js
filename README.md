SVG Pie Timer
================

An animated SVG pie timer using requestAnimationFrame

Current version: 0.9.1 released 28.08.2014 under MIT



Simple use
---------------

Call svgPieTimer() with the following options:

`element` asdasd

```javascript
svgPieTimer({
    element: SVGPathElement,
    duration: 1000,
    loops: 2
});
```

Recommended use
---------------
I strongly recommend using a polyfill for requestAnimationFrame. Personally I prefer [this one](https://github.com/darius/requestAnimationFrame) by Darius Bacon, based on the polyfill by Erik Möller. Either download a copy or use ```https://cdn.rawgit.com/darius/requestAnimationFrame/master/requestAnimationFrame.min.js```.

```html
<script src="requestAnimationFrame.js"></script>
<script src="svg-pie-timer.js"></script>
<script>
svgPieTimer({
    element: SVGPathElement,
    duration: 1000,
    loops: 2
});
</script>
```
# shapeGenerator.js

## description
A javscript library for generating nice minimal shapes in the background of your page. 

![An example of the library working](/images/placeholder.png)


## How to use
1. Download the library (shapes.js and shapegenerator.js)
2. add the following to your html file
```
        <script src="shapes.js"></script>
        <script src="shapegenerator.js"></script>
        <script>
            generateShapes(element, colorList, numberOfShapes, mode, rotation);
        </script>
```
3. run the page and enjoy!

## Parameters
1. element: the element you want to add the shapes to (element object)
2. colorList: a list of colors you want the shapes to be (an array of colors as strings)
3. numberOfShapes: the number of shapes you want to be generated in the page (integer number)
4. mode: the mode you want the shapes to be generated in (1 or 2)
5. rotation: whether or not you want the shapes to be rotated (true or false)

## Modes
1. mode 1: the shapes are generated in black color but have a colored rectangle shape with them on the corner
2. mode 2: the shapes are generated and colored from the colorList without any rectangles

## Example
```
        <script src="shapes.js"></script>
        <script src="shapegenerator.js"></script>
        <script>
            let element = document.body;
            let colorList = [
                "#a29bfe","#ffeaa7","#ff7675","#fd79a8","#ff7675","#55efc4","#636e72"
            ];
            let numberOfShapes = 5;
            let mode = 2;
            let rotation = true;
            generateShapes(element, colorList, numberOfShapes, mode, rotation);
        </script>
```

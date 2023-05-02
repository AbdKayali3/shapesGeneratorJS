# shapeGenerator.js

## description
A javscript library for generating nice and minimal shapes in the background of your page. 

![An example of the library working](/images/placeholder.png)

### Version: 1.0.1
#
&nbsp;
## How to use
1. Install the library:
- through NPM (recommended) ``` npm install shapes-generator``` then ```const generateShapes = require('shapes-generator'); ```
- Or Download the library (shapes.js and shapegenerator.js) then
```
    <script src="shapes.js"></script>
    <script src="shapegenerator.js"></script>
```
2. add the following to your html file
``` 
        <script>
            generateShapes();
        </script>
```
3. run the page and enjoy!

Note: It is recommended to give your element z-index: -1; so the shapes will be underneath everything. THe library add that otumatically but it doesn't work on all the  browsers for now.

&nbsp;
## Parameters
An object containing the following parameters (all optional):
1. element: the element you want to add the shapes into (element object). Note: if not specified the shapes will be added to the body of the page
2. options: an object containing the options you want to tweek(object). Like the colors of the shapes or how many shapes you want to add. Check the table below for all options availabe.

&nbsp;
## Options
| Option | Description | Default |
| --- | --- | --- |
| colorList | a list of colors you want the shapes to be (an array of colors as strings) | Some flat colors |
| numberOfShapes | the number of shapes you want to be generated in the page (integer number) | 5 |
| mode | the mode you want the shapes to be generated in (1 or 2) | 1 |
| rotation | whether or not you want the shapes to be rotated (true or false) | true |

&nbsp;
## Modes
1. mode 1: the shapes are generated and colored from the colorList without any rectangles (default)
2. mode 2: the shapes are generated in black color but have a colored rectangle shape with them on the corner

&nbsp;
## Example
```
        <script src="shapes.js"></script>
        <script src="shapegenerator.js"></script>
        <script>
            generateShapes({
                    element: document.body,
                    options: {
                        colorList: ["#a29bfe","#ff7675","#55efc4","#636e72"],
                        numberOfShapes: 20,
                        mode: 1,
                        rotation: true
                    }
                });        
        </script>
```

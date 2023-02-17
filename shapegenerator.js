// a function that takes an html element and a list of colors
// the function should make a new elemnt that takes the whole width and hight of the element and have a z-index of -1
// then the function should place a random object from the list of objects with random color from that list in a random place iside the element
// the script should place numberOfShapes objects in the element
// the object created will be from the shapesList and they are svg elements
// Auther: Abd Kayali

let shapesList = shapes;

function generateShapes(element = document.body, colorList = ["#a29bfe","#ffeaa7","#ff7675"], numberOfShapes = 5, shapesMode = 2, rotation = false) {
    let newElement = document.createElement("div");

    let rotationList = ["rotate(0deg)", "rotate(45deg)", "rotate(90deg)", "rotate(125deg)", "rotate(180deg)", "rotate(270deg)"];

    newElement.style.width = element.clientWidth + "px";
    newElement.style.height = element.clientHeight + "px";
    newElement.style.position = "absolute";
    newElement.style.zIndex = -1;
    newElement.style.top = 0;
    newElement.style.left = 0;
    element.appendChild(newElement);
    for (let i = 0; i < numberOfShapes; i++) {
        let shape = shapesList[Math.floor(Math.random() * shapesList.length)];
        let color = colorList[Math.floor(Math.random() * colorList.length)];
        let top = Math.floor(Math.random() * element.clientHeight);
        let left = Math.floor(Math.random() * element.clientWidth);
        let width = Math.floor(Math.random() * 100);
        let height = Math.floor(Math.random() * 100);
        let shapeElement = document.createElement("div");
        shapeElement.id = "shape"+i;
        shapeElement.style.position = "absolute";
        shapeElement.style.top = top + "px";
        shapeElement.style.left =left + "px";


        if (shapesMode == 1) {
            shapeElement.style.width = width + "px";
            shapeElement.style.height = height + "px";
            shapeElement.style.backgroundColor = color;
            shapeElement.style.clipPath = shape;
        }
        shapeElement.innerHTML = shape;
        if (rotation) {
            shapeElement.style.transform = rotationList[Math.floor(Math.random() * rotationList.length)];
        }
        newElement.appendChild(shapeElement);


        // console.log(shapesMode);
        if (shapesMode == 2) {
            let svgElementsList =    [" line", " circle", " path", " rect"];
            for (let k = 0; k < svgElementsList.length; k++) {
                let svgElement = svgElementsList[k];
                let ElementsList = document.querySelectorAll("#shape"+i+" svg"+svgElement);
                // console.log("the query is for: #shape"+i+" svg"+svgElement);
                // console.log(ElementsList);
                // console.log("-----------------");
                for (let j = 0; j < ElementsList.length; j++) {
                    let element = ElementsList[j];
                    // check if the element is has a fill or stroke attribute
                    // if it has a fill or stroke attribute then change it to the color

                    if (element.hasAttribute("fill")) {
                        element.setAttribute("fill", color);
                    }
                    if (element.hasAttribute("stroke")) {
                        element.setAttribute("stroke", color);
                    }


                    // element.setAttribute("fill", color);
                    // element.setAttribute("stroke", color);
                }
                
            }
        }
        // let s = document.querySelectorAll("#shape"+i+" svg");
        // let l = document.querySelectorAll("#shape"+i+" svg line");
        // let c = document.querySelectorAll("#shape"+i+" svg circle");
        // let p = document.querySelectorAll("#shape"+i+" svg path");
        // console.log(s);
        // if (s) {
        //     for (let i = 0; i < s.length; i++) {
        //         let st = s[i];
        //         st.setAttribute("fill", color);
        //         st.setAttribute("stroke", color);
        //     }
            
        // }
        // if (l) {
        //     for (let i = 0; i < l.length; i++) {
        //         let lt = l[i];
        //         lt.setAttribute("fill", color);
        //         lt.setAttribute("stroke", color);
        //     }
        // }
        // if (c) {
        //     for (let i = 0; i < c.length; i++) {
        //         let ct = c[i];
        //         ct.setAttribute("fill", color);
        //         ct.setAttribute("stroke", color);
        //     }
        // }
        // if (p) {
        //     for (let i = 0; i < p.length; i++) {
        //         let pt = p[i];
        //         pt.setAttribute("fill", color);
        //         pt.setAttribute("stroke", color);
        //     }
        // }

        // s.style.fill = color;
        // s.setAttribute("fill", color);
        // s.setAttribute("stroke", color);
        // l.setAttribute("fill", color);
        // l.setAttribute("stroke", color);

    }


    // console.log("mode: " + shapesMode);
}



// let newElement = document.createElement("div")
// newElement.style.width = element.clientWidth + "px"
// newElement.style.height = element.clientHeight + "px"
// newElement.style.position = "absolute"
// newElement.style.zIndex = -1
// newElement.style.top = 0
// newElement.style.left = 0
// element.appendChild(newElement)
// for (let i = 0; i < numberOfShapes; i++) {
//     let shape = shapesList[Math.floor(Math.random() * shapesList.length)]
//     let color = colorList[Math.floor(Math.random() * colorList.length)]
//     let shapeElement = document.createElement("div")
//     shapeElement.style.position = "absolute"
//     shapeElement.style.top = Math.floor(Math.random() * element.clientHeight) + "px"
//     shapeElement.style.left = Math.floor(Math.random() * element.clientWidth) + "px"
//     shapeElement.style.width = Math.floor(Math.random() * 100) + "px"
//     shapeElement.style.height = Math.floor(Math.random() * 100) + "px"
//     shapeElement.style.backgroundColor = color
//     shapeElement.style.clipPath = shape
//     newElement.appendChild(shapeElement)
// }


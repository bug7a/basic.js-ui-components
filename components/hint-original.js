/* Bismillah */

/*

Hint - v24.06

UI COMPONENT TEMPLATE
- You can customize, this template code as you need:


Started Date: February 2024
Developer: Bugra Ozden
Email: bugra.ozden@gmail.com
Site: https://bug7a.github.io/javascript-mobile-app-template/


EXAMPLE: {javascript-mobile-app-template}/comp-name.htm


*/

"use strict";
const Hint = function(params = {}) {

    // Default values
    const defaults = {
        
    };

    // BOX: Component container
    const box = startObject();

    box.props(defaults, params);

    // *** Private variables:
    let privateVar = "";

    // *** Public variables:
    box.publicVar = "";

    // *** Private functions:
    const privateFunc = () => {};
    const infoStyle = function(lbl) {
        lbl.fontSize = 12;
        lbl.spaceX = 8;
        lbl.spaceY = 3;
        lbl.color = "rgba(255, 255, 255, 0.90)";
        lbl.textColor = "rgba(0, 0, 0, 0.85)";
        lbl.round = 3;
        lbl.border = 1;
        lbl.borderColor = "rgba(0, 0, 0, 0.9)";
    }

    const infoPosition = function(posi) {

        const e = window.event;
        const posX = e.clientX;
        const posY = e.clientY;

        box.mouseX = withPageZoom(posX); // posX; //
        box.mouseY = withPageZoom(posY); // posY; //

        if (posi == "top") {
            window.lblHint.top = box.mouseY - window.lblHint.height - 12;
            window.lblHint.left = box.mouseX - (window.lblHint.width / 2);

        } else if (posi == "bottom") {
            window.lblHint.top = box.mouseY + window.lblHint.height + 8;
            window.lblHint.left = box.mouseX - (window.lblHint.width / 2);

        } else if (posi == "right") {
            window.lblHint.top = box.mouseY - (window.lblHint.height / 2);
            window.lblHint.left = box.mouseX - window.lblHint.width - 25;
             
        } else if (posi == "left") {
            window.lblHint.top = box.mouseY - (window.lblHint.height / 2);
            window.lblHint.left = box.mouseX + 25;

        }

    };

    // *** Public functions:
    box.publicFunc = () => {};
    box.show = function(obj, hintText, posi = "top") {

        obj.clickable = 1;
        obj.elem.style.cursor = "pointer";

        obj.elem.addEventListener("mouseover", function(ev) {
            if (!window.lblHint) {
                window.lblHint = Label();
                page.add(that);
                that.text = hintText;
                infoStyle(that);
            }
        });

        obj.elem.addEventListener("mousemove", function(ev) {
            if (window.lblHint) {
                infoPosition(posi);
            }
        });

        obj.elem.addEventListener("mouseout", function(ev) {
            if (window.lblHint) {
                window.lblHint.remove();
                window.lblHint = null;
            }
        });

    };

    // Set a param after created.
    box.setColor = function(color) {
        box.color = color;
    };
    // USAGE: get: componentName.color, set: componentName.setColor("red")

        // *** OBJECT TEMPLATE:
        box.color = "transparent";

    //endBox();

    // *** OBJECT INIT CODE:

    // Load all hint
    
    //window.hint = hint; // It is unique object. You can create just one.
    return endObject(box);

};
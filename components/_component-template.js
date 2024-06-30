/* Bismillah */

/*

Component Template - v24.06

UI COMPONENT TEMPLATE
- You can customize, this template code as you need:


Started Date: June 2024
Developer: Bugra Ozden
Email: bugra.ozden@gmail.com
Web: https://bug7a.github.io/basic.js-ui-components/

*/

"use strict";
const CompName = function(params = {}) {

    // Default values
    const defaults = {
        border: 1, // Standard box features are added automatically.
        width: 90,
        height: 50,
        round: 4,
        box_backgroundColor: "white", // I didn't use color because I didn't want to add it automatically.
        box_backgroundOverColor: "#8FC7B9",
        icon_file: "assets/close.svg",
        icon_backgroundColor: "transparent",
        icon_border: 0,
        badget_text: "",
    };

    if (params == "get") return defaults; // CompName("get").border

    // BOX: Component container
    const box = startObject();

    // After box created; you can take values from containerBox
    //defaults.round = box.containerBox.round;
    //defaults.color = box.containerBox.color;

    // Values are ready to use
    box.props(defaults, params);

    // *** PRIVATE VARIABLES:
    //let privateVar = "";
    const badgetColors = [
        { min: 0, max: 3, color: "whitesmoke" },
        { min: 4, max: 10, color: "gold" },
        { min: 11, max: 100, color: "#D96450" },
    ];
    let badget_backgroundColor = null;

    // *** PUBLIC VARIABLES:
    //box.publicVar = "";

    // NOTE: Default values are also public variables.

    // *** PRIVATE FUNCTIONS:
    //const privateFunc = function() {};

    // *** PUBLIC FUNCTIONS:
    // If you need to change a param after it is created. You can write a setter function for it.
    //box.publicFunc = function() {};

    box.setIcon_file = function(iconFile) {
        box.iconFile = iconFile;
        box.icoLogo.load(iconFile);
    }
    // USAGE: get: componentName.icon_file, set: componentName.setIcon_file("8")

    box.setBadget_text = function(text) {

        box.badget_text = text;
        box.lblBadget.text = text;

        const _num = parseInt(text);

        badgetColors.forEach(function(data, index) {
            if (_num >= data.min && _num <= data.max) {
                box.lblBadget.color = data.color;
                badget_backgroundColor = data.color;
            }
        });

    };
    // USAGE: get: componentName.badget_text, set: componentName.setBadget_text("8")

    box.setBox_backgroundColor = function(color) {
        box.box_backgroundColor = color;
        box.color = color;
    };

    box.setBox_backgroundOverColor = function(color) {
        box.box_backgroundOverColor = color;
    };

    // *** OBJECT VIEW:
    box.elem.style.cursor = "pointer";
    box.clickable = 1;
    // Show outside of the box.
    box.elem.style.overflow = "visible";
    box.color = box.box_backgroundColor;
    //box.borderColor = "indianred";
    box.setMotion("background-color 0.3s");
    
        // BOX: Cover.
        box.coverBox = Box(0, 0, "100%", "100%", {
            opacity: 0.2,
        });
        that.elem.style.background = "linear-gradient(to bottom, white, black)";

        // ICON: Logo image.
        box.icoLogo = Icon({
            width: 32,
            height: 32,
            space: 10,
            opacity: 0.7,
            border: box.icon_border,
            color: box.icon_backgroundColor,
        });
        that.load(box.icon_file);
        that.center();

        // LABEL: Badget
        box.lblBadget = Label({
            text: "", // If you have complex functions just use box.setBadget_text(box.badget_text); after OBJECT INIT CODE.
            textColor: "rgba(0, 0, 0, 0.8)",
            border: 1,
            borderColor: "rgba(0, 0, 0, 0.6)",
            spaceX: 8,
            spaceY: 2,
            round: 8,
            fontSize: 12,
        });
        that.right = -6;
        that.top = -6;
        that.elem.style.whiteSpace = "nowrap";
        that.elem.style.fontFamily = "opensans-bold";
        that.setMotion("background-color 0.3s");

    // *** OBJECT INIT CODE:
    box.elem.addEventListener("mouseover", function() {
        box.color = box.box_backgroundOverColor;
        box.lblBadget.color = "white";
    });
    box.elem.addEventListener("mouseout", function() {
        box.color = box.box_backgroundColor;
        box.lblBadget.color = badget_backgroundColor;
    });
    box.setBadget_text(box.badget_text);
    
    return endObject(box);

};
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
        border: 0,
        color: "transparent",
        width: null, // or "100%"
        height: null,
        coverBackgroundColor: "red",
    };

    if (params == "get") return defaults; // CompName("get").border

    // BOX: Component container
    const box = startObject();

    // after box created
    defaults.width = box.containerBox.width;
    defaults.height = box.containerBox.height;

    // Values ready to use
    box.props(defaults, params);

    // *** Private variables:
    //let privateVar = "";

    // *** Public variables:
    //box.publicVar = "";

    // *** Private functions:
    //const privateFunc = function() {};

    // *** Public functions:
    //box.publicFunc = function() {};

    // Set a param after created.
    //box.setColor = function(color) {
    //    box.color = color;
    //};
    // USAGE: get: componentName.color, set: componentName.setColor("red")

    // OBJECT VIEW:
    box.setMotion("opacity 0.2s");
    
    // BOX: Cover.
    box.coverBox = Box(0, 0, "100%", "100%", {
        color: box.coverBackgroundColor,
    });

    // ICON: Logo image.
    box.icoLogo = Icon({
        width: 50,
        height: 50,
        opacity: 1,
    });
    //that.load(box.waitingIconFile);
    that.center();

    // OBJECT INIT CODE:
    box.on("click", function() {
        console.log("clicked")
    });
    
    return endObject(box);

};
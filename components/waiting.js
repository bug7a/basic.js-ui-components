/* Bismillah */

/*

Waiting - v24.06

UI COMPONENT TEMPLATE
- You can customize, this template code as you need:


Started Date: 7 July 2022
Developer: Bugra Ozden
Email: bugra.ozden@gmail.com
Site: https://bug7a.github.io/javascript-mobile-app-template/


EXAMPLE: {javascript-mobile-app-template}/waiting.htm


*/

"use strict";
const Waiting = function(params = {}) {

    const box = startObject();

    const defaults = {
        border: 0,
        color: "transparent",
        opacity: 0,
        visible: 0,
        width: box.containerBox.width,
        height: box.containerBox.height,
        waitingIcon: "components/ui-waiting-view/clock.png",
        coverBackgroundColor: "rgba(0, 0, 0, 0.4)",
    };

    box.props(defaults, params);

    box.show = function() {

        box.visible = 1;
        box.withMotion(function(self) {
            box.opacity = 1;
        });
        
    }
    
    box.hide = function() {
    
        box.withMotion(function(self) {
            box.opacity = 0;
        });
        setTimeout(function() {
            box.visible = 0;
        }, 250);
    
    }

    // *** OBJECT VIEW:
    box.setMotion("opacity 0.2s");
    
    // BOX: Cover.
    box.coverBox = startFlexBox({
        color: box.coverBackgroundColor,
        clickable: 1,
    });
    box.add(that);

        // ICON: Logo icon.
        box.icon = Icon({
            width: 50,
            height: 50,
            opacity: 1,
        });
        that.load(box.waitingIcon);

    endFlexBox();

    // Show at:
    box.left = 0;
    box.top = 0;

    return endObject(box);

};
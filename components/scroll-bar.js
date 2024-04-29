/* Bismillah */

/*

Scroll Bar - v24.04

UI COMPONENT TEMPLATE
- You can customize, this template code as you need:


Started Date: April 2024
Developer: Bugra Ozden
Email: bugra.ozden@gmail.com
Site: https://bug7a.github.io/javascript-mobile-app-template/


EXAMPLE: {javascript-mobile-app-template}/comp-name.htm


*/

"use strict";
const ScrollBar = function(params = {}) {

    // BOX: Component container
    const box = startBox();

    // Default values
    const defaults = {
        scrollableBox: null,
        bar_border: 0,
        bar_round: 3,
        bar_borderColor: "rgba(0, 0, 0, 1)",
        bar_width: 4,
        bar_mouseOverWidth: 8,
        bar_mouseOverColor: "#141414",
        bar_opacity: 0.6,
        bar_mouseOverOpacity: 0.6,
        bar_padding: 2,
        bar_color: "#141414",
    };

    box.props(defaults, params);

    // *** Private variables:
    let privateVar = "";

    // *** Public variables:
    box.publicVar = "";

    // *** Private functions:
    const privateFunc = () => {};

    const closeAuto = function() {
        if (box.setTimeoutVar) clearTimeout(box.setTimeoutVar);
        box.setTimeoutVar = setTimeout(function() {
            if (box.mouseMoving == 1) {
                closeAuto();
            } else {
                box.boxScrollBarTop.opacity = 0;
            }
        }, 4000);
    }

    const refreshScroll = function() {

        box.width = box.scrollableBox.width;
        box.height = box.scrollableBox.height;
        box.aline(box.scrollableBox);

        // Yatay scroll değeri
        let horizontalScroll = box.scrollableBox.elem.scrollLeft;

        console.log(horizontalScroll)
    
        // Dikey scroll değeri
        let verticalScroll = box.scrollableBox.elem.scrollTop;

        // Maksimum yatay scroll değeri
        let maxHorizontalScroll = box.scrollableBox.elem.scrollWidth - box.scrollableBox.elem.clientWidth;

        // WYH: box.bar_width değeri, scrollbar ın üst ve alttan bir miktan boşluk bırakmak içindir.
        box.boxScrollBarLeft.left = horizontalScroll + (box.bar_width * 2);
        console.log(box.boxScrollBarLeft.left)
        box.boxScrollBarLeft.width = box.scrollableBox.elem.clientWidth - maxHorizontalScroll - (box.bar_width * 4);

        // Eğer scroll a gerek yok ise scroll bar ı gizle.
        if (box.scrollableBox.elem.scrollWidth == box.scrollableBox.elem.clientWidth || box.scrollableBox.scrollX == 0) {
            box.boxScrollBarLeft.visible = 0;
        } else if (box.scrollableBox.scrollX == 1) {
            box.boxScrollBarLeft.visible = 1;
        }

        // Maksimum dikey scroll değeri
        let maxVerticalScroll = box.scrollableBox.elem.scrollHeight - box.scrollableBox.elem.clientHeight;

        box.boxScrollBarTop.top = verticalScroll + (box.bar_width * 2);
        box.boxScrollBarTop.height = box.scrollableBox.elem.clientHeight - maxVerticalScroll - (box.bar_width * 4);

        // Eğer scroll a gerek yok ise scroll bar ı gizle.
        if (box.scrollableBox.elem.scrollHeight == box.scrollableBox.elem.clientHeight || box.scrollableBox.scrollY == 0) {
            box.boxScrollBarTop.visible = 0;
        } else if (box.scrollableBox.scrollY == 1) {
            box.boxScrollBarTop.visible = 1;
        }

        //console.log('Maksimum Yatay Scroll: ' + maxHorizontalScroll);
        //console.log('Maksimum Dikey Scroll: ' + maxVerticalScroll);
        //console.log('Yatay Scroll: ' + horizontalScroll);
        //console.log('Dikey Scroll: ' + verticalScroll);
        //console.log('width Scroll: ' + box.scrollableBox.width);
        //console.log('height Scroll: ' + box.scrollableBox.height);

        closeAuto();

    };

    const mouseMoved = function(event) {

        box.mouseMoving = 1;

        if (box.mouseX != 0) {
            const fark = event.clientX - box.mouseX;
            box.scrollableBox.elem.scrollLeft += fark;
        }

        if (box.mouseY != 0) {
            const fark = event.clientY - box.mouseY;
            box.scrollableBox.elem.scrollTop += fark;
        }

        box.mouseX = event.clientX; // Fare konumu yatay eksende
        box.mouseY = event.clientY; // Fare konumu dikey eksende
    
        //console.log('Fare konumu: X=' + box.mouseX + ', Y=' + box.mouseY);
        //event.stopPropagation();
        closeAuto();

    };

    // *** Public functions:
    box.publicFunc = () => {};

    // Set a param after created.
    box.setColor = (color) => {
        box.color = color;
    };
    // USAGE: get: componentName.color, set: componentName.setColor("red")

        // *** OBJECT TEMPLATE:
        box.color = "transparent";
        box.setMotion("opacity 0.2s");
        box.elem.style.position = "fixed";
        
        // BOX: Cover.
        //box.boxCover = Box(0, 0, 20, 20);
        //that.color = "transparent";

        // BOX: Dikey scroll bar.
        box.boxScrollBarTop = Box({
            right: box.bar_padding,
            border: box.bar_border,
            borderColor: box.bar_borderColor,
            round: box.bar_round,
            width: box.bar_width,
            color: box.bar_color,
            opacity: box.bar_opacity,
        });
        box.boxScrollBarTop.setMotion("width 0.2s, opacity 0.5s");

        // BOX: Yatay scroll bar.
        box.boxScrollBarLeft = Box({
            bottom: box.bar_padding,
            border: box.bar_border,
            borderColor: box.bar_borderColor,
            round: box.bar_round,
            height: box.bar_width,
            color: box.bar_color,
            opacity: box.bar_opacity,
        });
        box.boxScrollBarLeft.setMotion("height 0.2s, opacity 0.5s");

    endBox();

    // *** OBJECT INIT CODE:
    //box.left = 0;
    //box.top = 0;
    refreshScroll();
    box.scrollableBox.onResize(refreshScroll);
    box.scrollableBox.elem.addEventListener('scroll', refreshScroll);

    // Scroll barlar basarak kaydırılabilsin.
    box.boxScrollBarTop.clickable = 1;
    box.boxScrollBarLeft.clickable = 1;

    // Mouse scroll bar butonu üzerine gelindiğinde;
    box.boxScrollBarTop.elem.addEventListener("mouseover", function(event) {
        box.boxScrollBarTop.width = box.bar_mouseOverWidth;
        box.boxScrollBarTop.color = box.bar_mouseOverColor;
        box.boxScrollBarTop.opacity = box.bar_mouseOverOpacity;
        //event.stopPropagation();
    });

    // Mouse scroll bar butonu üzerindeyken bırakılır ise;
    box.boxScrollBarTop.elem.addEventListener("mouseout", function(event) {
        box.boxScrollBarTop.width = box.bar_width;
        box.boxScrollBarTop.color = box.bar_color;
        box.boxScrollBarTop.opacity = box.bar_opacity;
        closeAuto();
        //event.stopPropagation();
    });

    // Mouse scroll bar butonu üzerine gelindiğinde;
    box.boxScrollBarLeft.elem.addEventListener("mouseover", function(event) {
        box.boxScrollBarLeft.height = box.bar_mouseOverWidth;
        box.boxScrollBarLeft.color = box.bar_mouseOverColor;
        box.boxScrollBarLeft.opacity = box.bar_mouseOverOpacity;
        //event.stopPropagation();
    });

    // Mouse scroll bar butonu üzerindeyken bırakılır ise;
    box.boxScrollBarLeft.elem.addEventListener("mouseout", function(event) {
        box.boxScrollBarLeft.height = box.bar_width;
        box.boxScrollBarLeft.color = box.bar_color;
        box.boxScrollBarLeft.opacity = box.bar_opacity;
        closeAuto();
        //event.stopPropagation();
    });

    // Mouse, scroll edilecek alana girer ise;
    box.scrollableBox.elem.addEventListener("mouseover", function(event) {
        box.boxScrollBarTop.opacity = box.bar_opacity;
        box.boxScrollBarLeft.opacity = box.bar_opacity;
        closeAuto();
        //event.stopPropagation();
    });

    // Mouse scroll edilen alandan dışarı çıkar ise;
    box.scrollableBox.elem.addEventListener("mouseleave", function(event) {
        //box.boxScrollBarTop.opacity = 0;
        //event.stopPropagation();
        closeAuto();
    });

    // Sağdaki scroll bar butonuna basılırsa;
    box.boxScrollBarTop.elem.addEventListener("mousedown", function(event) { // mousedown
        box.mouseX = 0;
        box.mouseY = 0;
        box.clickable = 1;
        box.elem.addEventListener('mousemove', mouseMoved);
        //event.stopPropagation();
    });

    // Alttaki scroll bar butonuna basılırsa;
    box.boxScrollBarLeft.elem.addEventListener("mousedown", function(event) { // mousedown
        box.mouseX = 0;
        box.mouseY = 0;
        box.clickable = 1;
        box.elem.addEventListener('mousemove', mouseMoved);
        //event.stopPropagation();
    });

    // Mouse nesne alanının içinde bırakılır ise;
    box.elem.addEventListener("mouseup", function(event) {
        box.mouseMoving = 0;
        box.elem.removeEventListener('mousemove', mouseMoved);
        
        box.clickable = 0;
        closeAuto();
    });

    // Mouse nesne alanının dışına çıkar ise;
    box.elem.addEventListener("mouseleave", function(event) {
        box.mouseMoving = 0;
        box.elem.removeEventListener('mousemove', mouseMoved);
        
        box.clickable = 0;
        closeAuto();
    });
    
    makeBasicObject(box);
    return box;

};
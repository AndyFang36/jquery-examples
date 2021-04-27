jQuery(document).ready(function () {
    /* 获取元素 */
    const speech = jQuery(".speech");
    const switcher = jQuery("#switcher");
    const switcherLabel = jQuery("#switcher > .label");
    const switchers = jQuery("#switcher > button");
    const fontSize = speech.css("font-size");
    const p2 = jQuery("#p2");
    const p3 = jQuery("#p3");
    const p4 = jQuery("#p4");
    const readMore = jQuery("a.more");
    let fontSizeValue = parseFloat(fontSize);
    /* 处理事件 */
    switcherLabel.click(function () {
        let pWidth = speech.outerWidth();
        let sWidth = switcher.outerWidth();
        switcher
            .fadeTo("fast", 0.5)
            .animate(
                {"border-width": "0.5em", "left": pWidth - sWidth, "height": "+=1.5em"},
                {duration: "slow", complete: function () {alert("The animation is finished!")}, queue: false}
            )
            .fadeTo("slow", 1.0)
            .slideUp("slow", function () {
                switcher.css("background-color", "red");
            })
            /*.queue(function (next) {
                switcher.css("background-color", "red");
                next();
            })*/
            .slideDown("slow");
    });
    switchers.click(function () {
        switch (this.id) {
            case "switcher-small":
                fontSizeValue /= 1.4;
                if (fontSizeValue <= 6) { fontSizeValue *= 1.4; }
                break;
            case "switcher-large":
                fontSizeValue *= 1.4;
                if (fontSizeValue >= 96) { fontSizeValue /= 1.4; }
                break;
            default:
                fontSizeValue = parseFloat(fontSize);
                break;
        }
        speech.animate({"font-size": fontSizeValue + "px"}, "fast");
    });
    /* 实现隐藏和显现 */
    readMore.click(function (event) {
        event.preventDefault();
        p2.animate({height: "toggle", opacity: "toggle"}, "slow");  // p2.slideToggle("slow");
        if (readMore.text() === "Read More") {
            readMore.text("Read Less");
        } else {
            readMore.text("Read More");
        }
        // jQuery(this).hide("fast");
        // jQuery(this).fadeOut("fast");
        // p2.show("slow");
        // p2.fadeIn("slow");
        // p2.slideDown("slow");
    });
    p3.click(function () {
        p3.slideToggle("fast");
        p4.slideToggle("fast");
    });
    p4.click(function () {
        p4.slideToggle("fast");
        p3.slideToggle("fast");
    });
    /*  */
    jQuery(document).keyup(function (event) {
        let cWidth = jQuery("#container").innerWidth();
        let cHeight = jQuery("#container").innerHeight();
        let sWidth = switcher.outerWidth();
        let sHeight = switcher.outerHeight();
        switch (event.keyCode) {
            case 37:
                if (parseFloat(switcher.css("left")) - 50 >= 0) {
                    switcher.animate({left: "-=50px"}, {duration: "fast"});
                }
                break;
            case 39:
                if (parseFloat(switcher.css("left")) + 50 <= (cWidth-sWidth)) {
                    switcher.animate({left: "+=50px"}, {duration: "fast"});
                    break;
                }
                break;
            case 38:
                if (parseFloat(switcher.css("top")) - 30 >= 0) {
                    switcher.animate({top: "-=30px"}, {duration: "fast"});
                }
                break;
            case 40:
                if (parseFloat(switcher.css("top")) + 30 <= (cHeight-sHeight)) {
                    switcher.animate({top: "+=30px"}, {duration: "fast"});
                }
                break;
        }
    });
});
jQuery(document).ready(function () {
    /* 获取元素 */
    const body = jQuery("body");
    const switcher = jQuery("#Switcher")
    const switcherButtons = jQuery("#Switcher > button");
    const switcherDefault = jQuery("#switcher-default");
    const switcherNarrow = jQuery("#switcher-narrow");
    const switcherLarge = jQuery("#switcher-large");
    /* 监听事件 */
    switcher.click(function () {
        switcherButtons.toggleClass("hidden");
    });
    switcher.hover(
        function () { jQuery(this).addClass("hover") },
        function () { jQuery(this).removeClass("hover") }
    );
    switcherButtons.click(function (event) {
        body.removeClass();
        jQuery("#Switcher > button").removeClass("selected");
        jQuery(this).addClass("selected");
        event.stopPropagation();
    });
    switcherNarrow.click(function (event) {
        body.addClass('narrow');
        event.stopPropagation();
    });
    switcherLarge.click(function (event) {
        body.addClass('large');
        event.stopPropagation();
    });

    /* Test 1 */
    jQuery("#container").mousemove(function (event) {
        /* 相对于网页 */
        console.log('page: ' + event.pageX + ',' + event.pageY);
        /* 相对浏览器窗口 */
        console.log('client: ' + event.clientX + ',' + event.clientX);
        /* 相对于鼠标事件的目标元素 */
        console.log('offset: ' + event.offsetX + ',' + event.offsetY);
        /* 相对于屏幕 */
        console.log('screen: ' + event.screenX + ',' + event.screenY);
    });

    /* Test 2 */
    jQuery(document).keydown(function (event) {
        // console.log(event.keyCode);
        let keyCode = event.keyCode;
        switch (keyCode) {
            case 68:
                switcherDefault.click();
                break;
            case 78:
                switcherNarrow.click();
                break;
            case 76:
                switcherLarge.click();
                break;
        }
    });
});
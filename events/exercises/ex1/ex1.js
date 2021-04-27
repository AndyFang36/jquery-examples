
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
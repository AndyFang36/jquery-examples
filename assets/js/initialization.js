/* 禁用右键菜单 */
function disableContextMenu() {
    jQuery("html").oncontextmenu = function () { return false; };
}

/* 禁用选择文本 */
function disableSelection() {
    jQuery("html").onselect = function () { return false; };
}

jQuery(document).ready(function () {
    disableContextMenu();
    disableSelection();
});
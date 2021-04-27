jQuery(document).ready(function () {
    jQuery("#selected-plays > li").addClass("horizontal");
    jQuery("#selected-plays li:not(.horizontal)").addClass("sub_list");
})
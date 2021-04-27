jQuery(document).ready(function () {
    const footnotesList = jQuery("<ol id='footnotes'></ol>").insertBefore("#footer");
    /* Test 1 */
    jQuery("a[href*=\"wikipedia\"]").attr({
        rel: "external",
        title: function () { return "Learn more about " + jQuery(this).text() + " at Wikipedia!" },
        id: function (index, oldValue) { return "wiki-link-" + index; }
    });
    /* Test 2 */
    jQuery("<a id='top'></a>").prependTo("body");
    jQuery("<a href=\"#top\">back to top</a>").insertAfter("p");
    /* Test 3 */
    jQuery(".footnote").each(function (index) {
        // jQuery("<sup>" + (index + 1) + "</sup>").insertBefore(this);
        jQuery(this).before([
            "<a href=\"#footnote-",
            index + 1,
            "\" id=\"context-",
            index + 1,
            "\" class=\"context\">",
            "<sup>",
            index + 1,
            "</sup></a>"].join(""))
            .appendTo(footnotesList)
            .append(["&nbsp;(<a href=\"#context-", index + 1, "\">context</a>)"].join(""))
            .wrap("<li id=\"footnote-" + (index + 1) + "\"></li>");
    });
    /* Test 4 */
    jQuery(".pull-quote").each(function (index) {
        let parentP = jQuery(this).parent("p");
        parentP.css("position", "relative");
        let pullQuoteCloned = jQuery(this).clone();
        pullQuoteCloned
            .addClass("pulled")
            .find("span.drop")
            .html("&hellip;")
            .end()
            .text(pullQuoteCloned.text())
            .prependTo(parentP);
    });

    /************************************************* Practice 3 & 4 *****************************************************/
    jQuery("#author").click(function () {
        let text = jQuery(this).text();
        let author = text.substr(3, text.length - 3);
        if (jQuery(this).children().is("b")) {
            jQuery(this).html("by " + author);
        } else {
            jQuery(this).html("by <b>" + author + "</b>");
        }
    });
    /************************************************* Practice 5 *****************************************************/
    jQuery("p").each(function () {
        let classValue = jQuery(this).attr("class");
        jQuery(this).attr({"class": classValue + " inhabitants"});
    });
});
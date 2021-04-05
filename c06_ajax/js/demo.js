jQuery(document).ready(function () {
    let dictionary = jQuery("#dictionary");
    /* Test 1 */
    jQuery("#letter-a a").click(function (event) {
        event.preventDefault();
        jQuery("#dictionary").load("a.html");
        alert("Loaded!");
    });
    /* Test 2 */
    jQuery("#letter-b a").click(function (event) {
        event.preventDefault();
        jQuery.getJSON("b.json", function (data) {
            let html = "";
            jQuery.each(data, function (entryIndex, entry) {
                html += "<div class=\"entry\">";
                html += "<h3 class=\"term\">" + entry.term + "</h3>";
                html += "<div class=\"part\">" + entry.part + "</div>";
                html += "<div class=\"definition\">";
                html += entry.definition;
                if (entry.quote) {
                    html += "<div class='quote'>";
                    jQuery.each(entry.quote, function (lineIndex, line) {
                        html += "<div class='quote-line'>" + line + "</div>";
                    });
                    if (entry.author) {
                        html += "<div class='quote-author'>" + entry.author + "</div>";
                    }
                    html += "</div>";
                }
                html += "</div>";
                html += "</div>";
            });
            jQuery("#dictionary").html(html);
        });
    });
    /* Test 3 */
    jQuery("#letter-c a").click(function (event) {
        event.preventDefault();
        jQuery.getScript("js/c.js");
    });
    /* Test 4 */
    jQuery("#letter-d a").click(function (event) {
        event.preventDefault();
        jQuery.get("d.xml", function (data) {
            dictionary.empty();
            jQuery(data).find("entry:has(quote[author])").each(function () {
                let $entry = $(this);
                let html = '<div class="entry">';
                html += '<h3 class="term">' + $entry.attr('term');
                html += '</h3>';
                html += '<div class="part">' + $entry.attr('part');
                html += '</div>';
                html += '<div class="definition">';
                html += $entry.find('definition').text();
                let $quote = $entry.find('quote');
                if ($quote.length) {
                    html += '<div class="quote">';
                    $quote.find('line').each(function () {
                        html += '<div class="quote-line">';
                        html += $(this).text() + '</div>';
                    });
                    if ($quote.attr('author')) {
                        html += '<div class="quote-author">';
                        html += $quote.attr('author') + '</div>';
                    }
                    html += '</div>';
                }
                html += '</div>';
                html += '</div>';
                $('#dictionary').append($(html));
            });
        });
    });
    /* Test 5 */
    jQuery("#letter-e a").click(function (event) {
        event.preventDefault();
        let requestData = {term: jQuery(this).text()};
        jQuery.get("http://php.example.edu:81/ajax/e.php", requestData, function (data) { dictionary.html(data); });
    });
});
/*
	Hey there!

	This is the client file for your theme. If you need to do any client-side work in javascript,
	this is where it needs to go.

	You can listen for page changes by writing something like this:

	  $(window).on('action:ajaxify.end', function(data) {
		var	url = data.url;
		console.log('I am now at: ' + url);
	  });
*/

function ar_setup_navigation(evt, data) {
    $("#main-nav-links a").removeClass('active');
    $(document.body).removeClass('forum');

    //pull off the first part of the path for highlighting the correct navigation item
    var url = data.url.split('/').shift();
    var path = "/" + url;

    if (path === "/") {
        $("#header-menu").hide();
        ajaxify.loadTemplate('home', function(home_template) {
            var html = templates.parse(home_template, {});
            $("#content").html(html);
            $("#header-menu").hide();
        });
        return;
    }
    var link = $("#main-nav-links a[href='" + path + "']");
    if (link[0] && link.attr("id") !== "forum-page" || path === "/sample") {
        link.addClass("active");
        $("#header-menu").hide();
    } else {
        $(document.body).addClass('forum');
        $("#forum-page").addClass('active');
        $("#header-menu").show();
        $(".breadcrumb a[href='/']").attr('href', $("#forum-page").attr('href'));
    }
}


$(document).ready(function() {
	$(window).on('action:ajaxify.end', ar_setup_navigation);
});

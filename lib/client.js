function ar_setup_navigation(evt, data) {
    $("#main-nav-links a").removeClass('active');
    $(document.body).removeClass('forum');

    //pull off the first part of the path for highlighting the correct navigation item
    var url = data.url.split('/').shift();
    var path = "/" + url;

    var link = $("#main-nav-links a[href='" + path + "']");
    if (link[0] && link.attr("id") !== "forum-page" || path === "/" || path === "/sample") {
        link.addClass("active");
        $("#header-menu").hide();
    } else {
        $(document.body).addClass('forum');
        $("#forum-page").addClass('active');
        $("#header-menu").show();
        $(".breadcrumb a[href='/']").attr('href', $("#forum-page").attr('href'));
    }
}


$(window).on('action:ajaxify.end', ar_setup_navigation);

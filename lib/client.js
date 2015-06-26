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

window.embed_video = function (event, video_id) {
    var container = $(event.target).closest('div.box-image');
    var placeholder = container.find('img');
    var width = placeholder.width();
    var height = placeholder.height();
    placeholder.replaceWith('<iframe width="' + width + '" height="' + height + '" src="https://www.youtube-nocookie.com/embed/' + video_id + '?rel=0&autoplay=1&loop=1&playlist=' + video_id + '&controls=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>');
    container.addClass("video");
};

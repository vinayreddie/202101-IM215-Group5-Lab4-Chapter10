$(document).ready(function() {
    images.forEach(element => {
        var image = $("<img></img>").attr('src', 'images/square/' + element.path).attr('alt', element.title);
        $(".gallery").append(image);
    });
    $("img").mouseenter(function() {
        $(this).addClass("gray");
        var di = $("<div></div>").attr('id', 'preview');
        var image = $("<img></img>").attr('src', $(this).attr('src').replace('square', 'medium')).attr('alt', $(this).attr('alt'));
        div.append(image);
        images.forEach(ele => {
            if (ele.title == $(this).attr('alt')) {
                var p = $("<p></p>").html(ele.title + " " + ele.city + ", " + ele.country + " [" + ele.taken + "]");
                div.append(p);
            }
        });
        $("body").append(di);
    });
    $("img").mousemove(function(event) {
        $("#preview").css('left', event.pageX).css('top', event.pageY);
    });
    $("img").mouseleave(function() {
        $("#preview").remove();
        $(this).removeClass("gray");
    });
});
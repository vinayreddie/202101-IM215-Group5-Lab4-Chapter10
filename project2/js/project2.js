$(document).ready(function() {

    images.forEach(element => {
        var img = $("<img></img>").attr('src', 'images/square/' + element.path).attr('alt', element.title);
        $(".gallery").append(img);
    });

    $("img").mouseenter(function(event) {
        $(this).addClass("gray");
        var div = $("<div></div>").attr('id', 'preview');
        var img = $("<img></img>").attr('src', $(this).attr('src').replace('square', 'medium')).attr('alt', $(this).attr('alt'));
        div.append(img);
        images.forEach(ele => {
            if (ele.title == $(this).attr('alt')) {
                var p = $("<p></p>").html(ele.title + "</br>" + ele.city + ", " + ele.country + " [" + ele.taken + "]");
                div.append(p);
            }
        });
        $("body").append(div);

    });
    $("img").mousemove(function(event) {
        $("#preview").css('left', event.pageX + 20).css('top', event.pageY + 10);
    });
    $("img").mouseleave(function() {
        $("#preview").remove();
        $(this).removeClass("gray");
    });
});
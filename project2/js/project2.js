$(document).ready(function() {
    images.forEach(element => {
        var image = $("<img></img>").attr('src', 'images/square/' + element.path).attr('alt', element.title);
        $(".gallery").append(image);
        
        
    });
    $("img").mouseenter(function() {
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
        $("#preview").css('left', event.pageX + 10).css('top', event.pageY + 10);
        $("body").append(div);
    })
    $("img").mouseleave(function() {
        $("#preview").remove();
        $(this).removeClass("gray");
    })
    $("img").mousemove(function(e) {
        $('#preview').css("display", "block").css('left', e.pageX + 20).css('top', e.pageY + 10);
    });
});

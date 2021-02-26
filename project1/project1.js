$(document).ready(function() {

    $("#thumbBox").click(function(e) {
        if (event.target && event.target.matches('img')) {
            var thumbImg = event.target.cloneNode();
            thumbImg.src = thumbImg.src.replace('small', 'medium');
            $('#imgManipulated>img').replaceWith(thumbImg);
            $('figcaption').replaceWith($('<figcaption> <em>' + thumbImg.alt + '</em></br>' + thumbImg.title + '</figcaption>'));
            applyFilters();
        }
    });


    $('#sliderOpacity').on('input', function(event) {
        $('#sliderOpacity').attr('value', event.target.value);
        $('#numOpacity').html(event.target.value);
        applyFilters();
    });

    $('#sliderSaturation').on('input', function(event) {
        $('#sliderSaturation').attr('value', event.target.value);
        var val = event.target.value;
        val = (val / 3000 * 100)
        $('#numSaturation').html(val);
        applyFilters();
    });

    $('#sliderBrightness').on('input', function(event) {
        $('#sliderBrightness').attr('value', event.target.value);
        let val = event.target.value;
        val = (val / 300 * 100)
        $('#numBrightness').html(val);
        applyFilters();
    });

    $('#sliderHue').on('input', function(event) {
        $('#sliderHue').attr('value', event.target.value);
        $('#numHue').html(event.target.value);
        applyFilters();
    });

    $('#sliderGray').on('input', function(event) {
        $('#sliderGray').attr('value', event.target.value);
        $('#numGray').html(event.target.value);
        applyFilters();
    });

    $('#sliderBlur').on('input', function(event) {
        $('#sliderBlur').attr('value', event.target.value);
        $('#numBlur').html(event.target.value);
        applyFilters();
    });

    var applyFilters = function() {
        let filters = 'opacity(' + $('#sliderOpacity').attr('value') + '%)' +
            'brightness(' + $('#sliderBrightness').attr('value') + '%) ' +
            'saturate(' + $('#sliderSaturation').attr('value') + '%) ' +
            'grayscale(' + $('#sliderGray').attr('value') + '%) ' +
            'blur(' + $('#sliderBlur').attr('value') + 'px)' +
            'hue-rotate(' + $('#sliderHue').attr('value') + 'deg) ';

        $('#imgManipulated>img').css('filter', filters);



    }

    $('#resetFilters').on('click', function() {
        $('#imgManipulated>img').css('filter',
            'opacity(100%) ' +
            'saturate(100%) ' +
            'brightness(100%) ' +
            'hue-rotate(0deg) ' +
            'grayscale(0%) ' +
            'blur(0px)');


    });

});
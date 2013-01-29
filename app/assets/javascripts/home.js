$(document).ready(function() {
    $('input[type="tel"]').mask("9999 - 999-999");

    var validator = $("#registration-form").validate({
        messages: {
            "participant[name]" : "Don't be shy...",
            "participant[email]" : "We promise to never send you spam.",
            "participant[phone_number]" : "We need your phone number."
        }}
    );

    var current = "peace";

    $('.agenda img, .agenda h4').click(function() {
        var item = $(this);
        var toDisplay = item.data('toggle');

        if (toDisplay != current) {
            $('.agenda-item.' + current).addClass('hidden');
            $('.agenda-item.' + toDisplay).removeClass('hidden');
            current = toDisplay;
        }
    });


    $('.social a').hover(function() {
        var item = $(this);
        var id = item.attr('id');
        $("#" + id + " .social-icon").addClass("hover");

    }, function() {
        var item = $(this);
        var id = item.attr('id');
        $("#" + id + " .social-icon").removeClass("hover");
    });

    $('.agenda-item.peace .quotes').orbit({ fluid: '16x6', directionalNav: false, timer:true, bullets:true, advanceSpeed: 10000});
    $('.agenda-item.entrepreneurship .quotes').orbit({ fluid: '16x6', directionalNav: false, timer:true, bullets:true, advanceSpeed: 10000});
    $('.agenda-item.leadership .quotes').orbit({ fluid: '16x6', directionalNav: false, timer:true, bullets:true, advanceSpeed: 10000});

    $('.agenda-item.entrepreneurship').addClass('hidden');
    $('.agenda-item.leadership').addClass('hidden');

    $('header .slides').orbit({ fluid: '16x6', directionalNav: true, timer:false});

    $('#registration-form').submit(function() {
        var form = $(this);
        var valid = form.valid();
        var tel = $('#tel').val();

        if (tel == "____ - ___-___" || tel.length != "____ - ___-___".length) {
            valid = false;
        }

        if (valid) {
            $('.progress-indicator').toggleClass('loader');
            $.post('/participants', form.serialize(), function(response) {
                $('.progress-indicator').toggleClass('loader');
                if (response.id != null && response.id != "") {
                    $('#registration-form').hide();
                    $('h4.cta').html("Thank you for registering.");
                    $('p.cta-description').html("SMS your #name, #county and #constituency to 8848 to unlock your Amani points");
                }
            }, 'json');
            return false;
        }

        return false;
    });
});
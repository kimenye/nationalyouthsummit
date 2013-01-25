$(document).ready(function() {
    $('input[type="tel"]').mask("9999- 999-999");

    var validator = $("#registration-form").validate({
        messages: {
            "name" : "Don't be shy...",
            "email" : "We promise to never send you spam.",
            "phone" : "We need your phone number."
        }}
    );
});
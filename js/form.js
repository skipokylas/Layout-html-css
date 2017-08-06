$(function() {
    $('form button[type=submit]').click(sendForm);
})

function sendForm(e) {
    e.preventDefault();
    $.ajax({
            url: "https://formspree.io/skipokylas@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                text: $('#text').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('form')[0].reset();
            alert("thank you!");
        })
        .fail(function(e) { 
            alert("sorry");
        });
}
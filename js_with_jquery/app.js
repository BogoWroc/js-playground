$('#login').click(function () {
    let loginUser = G$("Jan", "Kowalski");

    $('#logindiv').hide();

    loginUser.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
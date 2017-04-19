	function openwin()
					{
						window.open("report.html");
	//					window.location.href="p-1.2.1.html";
					}
function login() {
    // $('form-signin').submit();
    $.ajax({
        cache: true,
        type: "POST",
        url:"http://localhost:3000/postlogin",
        data:$('.form-signin').serialize(),// 你的formid
        async: false,
        error: function(request) {
            console.log("Connection error:"+request.error);
            openwin()
        },
        success: function(data) {
            console.log("SUCCESS!");
            openwin()
        }
    });
}
window.onload = 	function ()
			{   //弹出报到框
				var owrap = document.getElementById("wrap");
				var oclose = document.getElementById("close");
				var owin = document.getElementById("win");
				var obtn = document.getElementsByTagName("button")[0];
				var owrap1 = document.getElementById("wrap1");
				var owbottom = document.getElementById("w-bottom");
				obtn.onclick = function ()
				{
					owrap.style.display = "block";
					owin.style.display = "block";
				};
				//关闭
//				oclose.onclick = function ()
//				{
//					owrap.style.display = "none";
//					owin.style.display = "none";
//				}
				//
				
				goblack = function ()
				{
//					owrap.style.display = "none";
//					owin.style.display = "none";
					window.open("report.html");
				}
				//弹出确认框
				submit = function ()
				{
//					owrap1.style.display = "block";
//					owin1.style.display = "block";
					owbottom.style.display = "block";

				}
//				goBack = function ()
//				{
////					owbottom.style.display = "none";
//					owrap1.style.display = "none";
////					owin.style.display = "none";
//				}
				//取消确认诊断结果
				cancel = function ()
				{
					owbottom.style.display = "none";
				}
				//确认诊断结果
				confirm = function ()
				{
					window.open("seeAdoctor.html");
				}
			};
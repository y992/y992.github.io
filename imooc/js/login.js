	window.onload = function ()
			{
				var oMask = document.getElementById("mask");
				var ologincon = document.getElementById("loginCon");	
				var oBtn=document.getElementById("btnLogin");
				var oClose = document.getElementById("close");
				oBtn.onclick = function ()
				{
					oMask.style.display = "block";
					ologincon.style.display = "block"
				};
				oClose.onclick = function ()
				{
					oMask.style.display = "none";
					ologincon.style.display = "none"	
				}
				//获取页面的高度和宽度
				var sWidth=document.body.scrollWidth;
				var sHeight=document.body.scrollHeight;
				//创建遮罩层
				var oMask=document.createElement("div");
					oMask.id="mask";
					oMask.style.height=sHeight+"px";
					oMask.style.width=sWidth+"px";
					document.body.appendChild(oMask);
			
			};
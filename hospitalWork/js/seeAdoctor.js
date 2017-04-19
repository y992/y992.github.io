window.onload = 	function ()
			{   
				var owrap1 = document.getElementById("wrap1");
				var oclose1 = document.getElementById("close1");
				var owin1 = document.getElementById("win1");
				var obtn = document.getElementsByClassName("bd-btn");
				for (var i=0; i<obtn.length; i++) 
				{
					obtn[i].onclick = function ()
						{
							owrap1.style.display = "block";
							owin1.style.display = "block";
						};	
				}
				oclose1.onclick = function ()
				{
					owrap1.style.display = "none";
					owin1.style.display = "none";
				}
				goBack = function ()
				{
					owrap1.style.display = "none";
				}
				$.ajax({ 
                        type: "get", 
                        url: "http://localhost:3000/test", 
                        dataType: "jsonp", 
                        success: function (data) {
                        	$.each(data, function(index, item){
                        			if (index == 0) {
                        				var row = $("#template1");
                        			} else {
                        				var row = $("#template1").clone();
                        			}
                        			row.find("#NameId1").text(item.name1);
                        			row.find("#AgeId1").text(item.age1);
                        			row.find("#PhoneId1").text(item.phone1);
                        			row.find("#OutpatientDate1").text(item.outpatientTime1);
                        			row.find("#DoctorName1").text(item.doctor1);
                        			row.find("#Hospital1").text(item.hospital1);
                        			row.find(".bd-btn").text(item.status1);
                        			row.appendTo("#tab-dates");//添加到模板的容器中
                        		});
								$(".bd-btn").click(function(){
									owrap1.style.display = "block";
									owin1.style.display = "block";
								});
							},
	                        error: function (XMLHttpRequest, textStatus, errorThrown) { 
	                                alert(errorThrown); 
	                        } 
	                });
				
			};
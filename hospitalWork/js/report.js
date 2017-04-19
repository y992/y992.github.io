/**
 * Created by wyz on 17/4/8.
 */
window.onload = 	function ()
{   //弹出报到框
    var owrap = document.getElementById("wrap");
    var oclose = document.getElementById("close");
    var owin = document.getElementById("win");
//				var obtn = document.getElementsByClassName("bd-btn");

    //确认对话框
    var confire_dialog = document.getElementById("w-bottom");
//				for (var i=0; i<obtn.length; i++) {
//
//					obtn[i].onclick = function ()
//						{
//							owrap.style.display = "block";
//							owin.style.display = "block";
//						};
//				}

    oclose.onclick = function ()
    {
        owrap.style.display = "none";
        owin.style.display = "none";
    }
    goblack = function (){
        owrap.style.display = "none";
        owin.style.display = "none";
    }
    patientReport = function() {
        confire_dialog.style.display = "block"
    }
    cancel = function() {
        confire_dialog.style.display = "none";
    }
    confirm = function (){
        window.open("text1seeAdoctor.html");
    }

    $.ajax({
        type: "get",
        url: "http://localhost:3000/reportInfo",
        dataType: "jsonp",
        success: function (data) {
            $.each(data, function(index, item){
                if (index == 0) {
                    var row = $("#template");
                } else {
                    var row = $("#template").clone();
                }
                row.find("#NameId").text(item.name);
                row.find("#AgeId").text(item.age);
                row.find("#PhoneId").text(item.phone);
                row.find("#ApplyDate").text(item.applyTime);
                row.find("#WatchDate").text(item.watchTime);
                row.find("#DocotrName").text(item.doctor);
                row.find("#Hospital").text(item.hospital);
                row.find(".bd-btn").text(item.state);
                row.appendTo("#datas");//添加到模板的容器中
            });
            $(".bd-btn").click(function(){
                owrap.style.display = "block";
                owin.style.display = "block";
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

};
//document.getElementById("btnSend").addEventListener("click", function () {
//    alert("From: " + document.getElementById("txtFrom").value +
//        ", Subject: " + document.getElementById("txtSubject").value +
//        ", Message: " + document.getElementById("txtMessage").value);
//})


//this is the jquery way of doing the javascript version above
//
$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeToggle("slow");
})


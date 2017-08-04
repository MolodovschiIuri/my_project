$(document).ready(function(){
    $("#done").bind("click", function(){
        $.ajax({
            url:"check.php",
            type:"POST",
            data:({name: $("#name").val()}),
            dataType: "html",
            beforeSend: function(){
             $("#information").text("Ожидание ...");
            },
            success: function(data){
             if (data == "fail")
                  var conf =  confirm("You are admin?");
             else
                 $("#information").text(data);
             if(conf === true)
                 alert("Access is open");
            }
        });
    });
});

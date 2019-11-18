$(document).ready(function(){
$("#name1") .focusout(function(){
  var nameval=$("#name1").val();
    if(nameval=="")
        {
        $("#nameerror").html("<p>Please fill required</p>")
        }
});
    
    $("#email1").focusout(function(){
        var emailval=$("#email1").val();
        var at=/^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
        if(at.test(emailval))
            {
                alert("success");
            }
        else{
            $("#emailerror").html("<p>check wheather the address is correct or not</p>");
        }
        
    });
    
    $("#pass1").focusout(function(){
       var pswd=$("#pass1").val().length;
        if(pswd<8)
            {
        $("#pass").html("<p>characters should contain atleast 8 characters</p>");
                
            }
        else{
            
        }
    });
    
     $("#cpass1").focusout(function(){
       var cpswd=$("#cpass1").val();
         var pswd=$("#pass1").val();
        if(cpswd!==pswd)
            {
        $("#cpass").html("<p>Invalid Password</p>");
                
            }
        else{
            alert("success");
        }
    });
    $("#bio").onkeypress(function(){
        var length=140;
        var bio2=$("#bio").val().length;
        var y=length-bio2;
        if(y>=0)
            {
                
                $("#sub").html("y");
            }
        
    });
});

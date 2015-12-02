
window.onload = function() {
    var a=document.getElementById("submit");
    a.onmouseover=function show (){
        a.style.opacity = "0.8";
    };
    a.onmouseout=function show2 (){
        a.style.opacity = "1";
    };   
};

$(function()  {
        $("#order_form").validate({
        rules: {
            fullname: {
            required:true
            },
            telefonanr: {
            required: true,
            digits:true,
            minlength: 8,
            maxlength: 8
            },
            zinojums: {
            required: true
            },
            address:{
            required: true   
            },
            quantity: {
            required: true,
            digits:true
            }
        },
        messages: {
            fullname: {
            required: "Vārds ir obligāts"
            },
            telefonanr: {
            required: "Telefons ir obligāts",
            digits: "Telefonam ir jāsastāv no cipariem",
            minlength: "Jābūt astoņiem cipariem",
            maxlength: "Jābūt astoņiem cipariem"
            },
            zinojums: {
            required: "Ziņojums ir obligāts"
            },
            address:{
            required: "Adrese ir obligāta"   
            },
            quantity: {
            required: "Daudzums ir obligāts",
            digits: "Daudzumam ir jāsastāv no cipariem"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
        });
     });
     
    $(document).ready(function() {
    $("#order-rezultats").text($("#price").val() * $("#quantity").val());
    $( "#quantity" ).change(function() {
        $("#order-rezultats").text("");
        if (($("#quantity").val()).match(/^[0-9]+$/))
        {
            $("#order-rezultats").text($("#price").val() * $("#quantity").val());
        }  
    });
  
});

// put validations using jquery

$(document).ready(function(){

    $("#email").keyup(function(){
      var regx_email = /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-Z]{5,10}(.)([a-zA-Z]+))$/i;

      var email_inp = $(this).val();
      if (regx_email.test(email_inp)) {
        $("#email_status").text("valid");
        $("#email_status").removeClass("text-danger");

      }
      else {
        $("#email_status").addClass("text-danger");
        $("#email_status").text("Invalid");

      }
    });





});
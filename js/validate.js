// TODO codigo Javascript debajo de esto

$(document).ready(function() {
    $("#btnSubmit").click(function(){

         //variables
          var usuario = $("#usuario").val(); 
          var  contraseña= $("#contraseña").val(); 
          //validar 
            if(usuario.length  == 0 || contraseña.length == 0){
                alert("Usuario y/o contraseña invalidos."); 
 
              }else if (usuario  == "Anyi"){
                alert("El usuario no puede contener letras mayúsculas."); 

              }else if(contraseña.length <=5){
                alert("La contraseña debe exceder los 5 dígitos.");


              } else {
                $(document).ready(function(){
                //Argumentos de redireccion
                window.location.href = 'Principal.html';               
                });
             }        

          });
        });


       

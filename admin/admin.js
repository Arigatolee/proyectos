$(document).ready(function () {
  
  

var base64String = "";

  
//guardar producto

$("#enviar").click(function (e) { 
    e.preventDefault();
                                  
                                            let imagen = document.querySelector('input[type=file]')['files'][0];

                                            if(imagen ==undefined){
                                            let imageBase64Stringsep = "";


                                            insertar(imageBase64Stringsep);
                                            }else{

                                            var file = imagen;
                                            var reader = new FileReader();
                                            reader.onload = function () {
                                            base64String = reader.result.replace("data:", "")
                                            .replace(/^.+,/, "");
                                            imageBase64Stringsep = base64String;
                                            insertar(imageBase64Stringsep)

                                            }
                                            reader.readAsDataURL(file);
                                            }


                                            function insertar(imageBase64Stringsep){

                                          
                                            let nombre = $("#nombre").val();
                                            let precio = $("#precio").val();
                                            let category = $("#category").val();
                                            let filtro1 = $("#filtro1").val();
                                            let filtro2 = $("#filtro2").val();
                                            let filtro3 = $("#filtro3").val();

                                       

                                            $.post("php2.php", {"accion":"insertar","imagen":imageBase64Stringsep,"nombre":nombre,"precio":precio,"filtro1":filtro1,"filtro2":filtro2,"filtro3":filtro3,"category":category},
                                            function (data) {
                                           
                                            if (data == '1') {
                  
                                            }else{
                                           
                                            }
                                            },
                                            "dataType"
                                            );

                                            }

});



//eliminar producto
$(document).on('click',"#deletep",function(){
                                        $(this).parent().parent().hide();
                                        let borrarid = $(this).data('id');
                                        $.post("php2.php",{"accion":"borrar","id":borrarid},function(data){
                                        if (data == '1') {


                                        }else{

                                        }

                                        });

});


//mostrar productos


$("#cartaenviar").click(function (e) { 
  e.preventDefault();
                                      $(".producto").remove();
                                      let category = $("#slcarta").val()

                                      if(category !== "all"){

                                      $.getJSON("php2.php", {"accion":"leer","category":category},
                                      function (data) {
                                      $.each(data, function (index, item) {
                                      $("#productos").html($("#productos").html()+`
                                      <div class="producto">
                                      <div id="divimagen">
                                      <img id="imagendeproducto" src="data:image/WebP;base64,${item.imagen}" >
                                      </div>
                                      <div id="infoL">
                                      <div>${item.precio} </div>
                                      </div>
                                      <div id="infoR">
                                      <div id="editp" style="cursor:pointer"  data-id='${item.id}'
                                      data-precio='${item.precio}'
                                      data-nombre='${item.nombre}'
                                      data-fecha='${item.fecha}'
                                      data-categoryr='${item.category}'></div>
                                      <div id="deletep" style="cursor:pointer" data-id='${item.id}'></div>
                                      </div>

                                      </div>

                                      `)   });
                                      },
                                      );

                                      }else if(category == "all"){
                                      $(".producto").remove();
                                      $.getJSON("php2.php", {"accion":"leer2"},
                                      function (data) {
                                      $.each(data, function (index, item) {
                                      $("#productos").html($("#productos").html()+`
                                      <div class="producto">
                                      <div id="divimagen">
                                      <img id="imagendeproducto" src="data:image/WebP;base64,${item.imagen}" >
                                      </div>
                                      <div id="infoL">
                                      <div>${item.precio} </div>
                                      </div>
                                      <div id="infoR">
                                      <div id="editp" style="cursor:pointer"  data-id='${item.id}'
                                      data-precio='${item.precio}'
                                      data-nombre='${item.nombre}'
                                      data-fecha='${item.fecha}'
                                      data-categoryr='${item.category}'></div>
                                      <div id="deletep" style="cursor:pointer" data-id='${item.id}'></div>
                                      </div>

                                      </div>

                                      `)});
                                      },
                                      );

                                      }

});


//editar producto

$(document).on('click',".editp",function(){
  /*  console.log($(this).data('id'));*/
    $('#nombre').val($(this).data('nombre'));
   $("#precio").val($(this).data('precio'))
    $('#fecha').val($(this).data('fecha'));
    $('#category').val($(this).data('category'));
    $('#filtro1').val($(this).data('filtro1'));
    $('#filtro2').val($(this).data('filtro2'));
    $('#filtro3').val($(this).data('filtro3'));
    $('#filtro1').val($(this).data('filtro4'));
    $('#id').val($(this).data('id'));
  });


  $("#Reditar").click(function(e){
        e.preventDefault();
        let Rnombre=$("#Rnombre").val();
        let Rcorreo=$("#Rcorreo").val();
        let Rpass=$("#Rpass").val();
        let Rpass2=$("#Rpass2").val();
        let Rfecha=$("#Rfecha").val();
        let Rcelular=$("#Rcelular").val();
        let Rid=$("#Rid").val();
        $("#Rvolver").click();
        $.post($enlaze3,{"accion":"editar","nombre":Rnombre,"correo":Rcorreo,"pass":Rpass,"fecha":Rfecha,"celular":Rcelular,"id":Rid},function(data){
if (data == '1') {
$("#mostrarlista").click()
}else{

}
  });
});






});



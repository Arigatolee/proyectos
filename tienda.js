 $(document).ready(function(){


    const abrir = document.querySelector('#p3')
    const cerrar = document.querySelector("#cerrarmenu")
    
    
    abrir.addEventListener('click',function(){
        document.getElementById('menulateral').classList.toggle('active')
    })
    
    cerrar.addEventListener('click',function(){
        document.getElementById('menulateral').classList.toggle('active')
    })
    
    

  $('body').hide
 

    $('.producto').hide();
    $('#cerrartienda').hide();

$('.botonventa').click(function(){
    var pr = $(this).attr('category');

   
    $('#cerrartienda').show();
    
    $('.producto').hide();
    $('.producto[category='+ pr +']').show();
   
   
    

   

    $('#tienda').addClass('active2');
    $('#contenedorcartas').addClass('contenedorcartasa');
    $("#contenedorcartas").css("display","none");;

});




$('.botonventaadmin').click(function(){
    var pr = $(this).attr('category');
    $('#cerrartienda').show();
    $('.producto').hide();
   
   
   


    $('#tienda').addClass('active2');
    $('#contenedorcartas').addClass('contenedorcartasa');
  

});

$('#cerrartienda').click(function(){
    $('.producto').hide();
    $('#cerrartienda').hide();
   
    $('#tienda').removeClass('active2');
    $('#contenedorcartas').removeClass('contenedorcartasa');
    $("#contenedorcartas").delay(3000).css("display","flex");
  

})

$('.botonventaall').click(function(){
    $('#cerrartienda').show();
    $('.producto').show();
 

    $('#tienda').addClass('active2');
    $('#contenedorcartas').addClass('contenedorcartasa');
    $("#contenedorcartas").css("display","none");
})

})

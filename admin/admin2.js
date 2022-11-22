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
 





$('.botonventaadmin').click(function(){
    var pr = $(this).attr('category');
    $('#cerrartienda').show();
    $('.producto').show();
   
   
   
    $('html, body').animate({
        scrollTop: 460
    }, 10);


    $('#tienda').addClass('active2');
    $('#contenedorcartas').addClass('contenedorcartasa');
  

});

$('#cerrartienda').click(function(){
    $('.producto').hide();
    $('#cerrartienda').hide();
       $('html, body').animate({

        scrollTop: 450
    
    }, 10);
    $('#tienda').removeClass('active2');
    $('#contenedorcartas').removeClass('contenedorcartasa');
    $("#contenedorcartas").delay(3000).css("display","flex");
  

})

$('.botonventaall').click(function(){
    $('#cerrartienda').show();
    $('.producto').show();
    $('html, body').animate({

        scrollTop: 460
    }, 0);

    $('#tienda').addClass('active2');
    $('#contenedorcartas').addClass('contenedorcartasa');
    $("#contenedorcartas").css("display","none");
})

$('#imagen').change(function(){
    const file = this.files[0];
  
    if (file){
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(event){
        //console.log(event.target.result);
        $(".inpimg").css("background-image","url("+event.target.result+")");
      }
    
    }
    
  });



$("#hola").click(function (e) { 
    e.preventDefault();



    $("#vistaadminproducto").addClass("cerroon");
$("#vistaadminproducto").removeClass("cerroff");
});



$(".cerr").click(function (e) { 
    e.preventDefault();
    $("#vistaadminproducto").removeClass("cerron");
    $("#vistaadminproducto").addClass("cerroff");
});


});

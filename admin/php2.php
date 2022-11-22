<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servidor2="localhost";
$usuario2="root";
$pass2="";
$bd2="productos";


$servidor3="sql303.byethost5.com";
$usuario3="b5_32921583";
$pass3="Mnbv6098";
$bd3="b5_32921583_productos";

/*creo la coneccion a la base de datos */
$mysqli=new mysqli($servidor2,$usuario2,$pass2,$bd2);

/*creo la coneccion a la base de datos */
//$mysqli=new mysqli($servidor3,$usuario3,$pass3,$bd3);

if( $_REQUEST['accion']=="leer"){
                    /*un array vavio previamiente preparado */
                    $arreglo=array();
                    /*variable para consultar por todo */
                    $sql="SELECT id,imagen,nombre,precio,fecha,filtro1,filtro2,filtro3,category FROM productos where `category` = '".$_GET["category"]."'";
                    /*coneccion + consulta da datos a result */
                    if($result=$mysqli->query($sql) ){
                        /*repetir mientras hayan datos en $result y se los doy a la variable $row*/

                        while($row = $result->fetch_array(MYSQLI_ASSOC) ){
                            /*todos los datos que resivio $row se los pasare a la variable con array */
                        
                            $arreglo[]=$row;
                        }
                        /*en este momento $arreglo es un texto simple ,lo convertiresmo a un jason ordenado por arrays */
                        echo json_encode($arreglo);
                    }
                    /*cierro variables para ahorrar memoria del servidor */
                    $result->close();
}
else if( $_REQUEST['accion']=="leer2"){
                    /*un array vavio previamiente preparado */
                    $arreglo=array();
                    /*variable para consultar por todo */
                    $sql="SELECT id,imagen,nombre,precio,fecha,filtro1,filtro2,filtro3,category FROM productos";
                    /*coneccion + consulta da datos a result */
                    if($result=$mysqli->query($sql) ){
                        /*repetir mientras hayan datos en $result y se los doy a la variable $row*/

                        while($row = $result->fetch_array(MYSQLI_ASSOC) ){
                            /*todos los datos que resivio $row se los pasare a la variable con array */
                        
                            $arreglo[]=$row;
                        }
                        /*en este momento $arreglo es un texto simple ,lo convertiresmo a un jason ordenado por arrays */
                        echo json_encode($arreglo);
                    }
                    /*cierro variables para ahorrar memoria del servidor */
                    $result->close();
}

else if($_REQUEST['accion']=="insertar"){
 $sql="INSERT INTO `productos` (`imagen`, `nombre`, `precio`, `filtro1`, `filtro2`, `filtro3`, `category`) VALUES ('".$_POST["imagen"]."','".$_POST["nombre"]."','".$_POST["precio"]."','".$_POST["filtro1"]."','".$_POST["filtro2"]."','".$_POST["filtro3"]."','".$_POST["category"]."')";
if( $mysqli->query($sql) ===TRUE ){
    echo "1";
}else{
    echo "0";
}}
else if($_REQUEST['accion']=="editar"){
    $sql="UPDATE `productos` SET `nombre`='".$_POST["nombre"]."',`correo`='".$_POST["correo"]."',`precio`='".$_POST["precio"]."',`filtro1`='".$_POST["filtro1"]."',`filtro2`='".$_POST["filtro2"]."'',`filtro3`='".$_POST["filtro3"]."' WHERE `id`='".$_POST["id"]."'";
    /*  $sql="UPDATE empleados set nombre='".$_POST["nombre"]."',puesto='".$_POST["puesto"]."',edad='".$_POST["edad"]."' where id='".$_POST["id"]."';";*/
    if( $mysqli->query($sql) ===TRUE ){
        echo "1";
    }else{
        echo "0";
    }
}
else if($_REQUEST['accion']=="borrar"){
    $sql="DELETE FROM `productos` WHERE `id`='".$_POST["id"]."'";
    /*  $sql="UPDATE empleados set nombre='".$_POST["nombre"]."',puesto='".$_POST["puesto"]."',edad='".$_POST["edad"]."' where id='".$_POST["id"]."';";*/
    if( $mysqli->query($sql) ===TRUE ){
        echo "1";
    }else{
        echo "0";
    }
}
$mysqli->close();
?>
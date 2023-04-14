/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let precioFinal;
    let marca;
    let impuesto;

    PRECIO_UNITARIO= 35;
    cantidadDeLamparas= parseInt(document.getElementById("txtIdCantidad").value);
    marca=document.getElementById("Marca").value;
    //A y B
    if (cantidadDeLamparas>5){
        precioFinal = (cantidadDeLamparas*PRECIO_UNITARIO* 0.5);
    }
    else{
        if (cantidadDeLamparas==5 && marca=="ArgentinaLuz"){
            precioFinal = (cantidadDeLamparas*PRECIO_UNITARIO* 0.4);
        }
        else{
            precioFinal = (cantidadDeLamparas*PRECIO_UNITARIO* 0.3);
        }
    }
   
    //C
    if(cantidadDeLamparas==4 && marca == "ArgentinaLuz" || marca=="FelipeLamparas"){
    
       precioFinal=(cantidadDeLamparas*PRECIO_UNITARIO*0.25);
    }
    else {
       precioFinal=(cantidadDeLamparas*PRECIO_UNITARIO*0.2);
    }


    //D
    if(cantidadDeLamparas==3 && marca == "ArgentinaLuz") {
      
        precioFinal=(cantidadDeLamparas*PRECIO_UNITARIO*0.15);
     }
    if(marca == "FelipeLamparas"){
        precioFinal=(cantidadDeLamparas*PRECIO_UNITARIO*0.10);
     }
    else {
        precioFinal=(cantidadDeLamparas*PRECIO_UNITARIO*0.05);
     }

    
    impuesto= precioFinal*0.1;
    if( precioFinal>120){

    precioFinal= precioFinal +impuesto;
    alert("Usted pago " + precioFinal + " de IIBB, siendo " + impuesto +" el impuesto que se pagó.");

    }

}



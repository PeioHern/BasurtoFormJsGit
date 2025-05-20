window.addEventListener("load",inicio,true);

function inicio(){

    console.log("pabellones from validar.js:", window.pabellones);
    
    let validar=document.getElementById('enviar');
    const servicios=[];

    validar.addEventListener("click",function(){
        let servicio=document.getElementById('servicio').value;
        let pabellon=document.getElementById('pabellon').value;
        let mostrar=document.getElementById('mostrar').checked;
        console.log(pabellon);
       let pattern=/^[A-Za-z0-9-]+$/;
       
       
       if(!pattern.test(servicio)){
            alert('El nombre del servicio debe estar formado únicamente por letras, números o guión alto.');
            return false;
       }
    
       if(!window.pabellones.includes(pabellon)){
        alert('seleccione un pabellón valido')
        return false;
    }
    
    console.log(mostrar);

   
    let indicePabellon = window.pabellones.indexOf(pabellon);

    let servicio1=new Servicio(servicio,indicePabellon,mostrar)
    console.log(servicio1.mostrarInfo())
    servicios.push(servicio1);
    console.log(servicios)
    return true;
    });


}
document.addEventListener("DOMContentLoaded", function() {
    
    var eventos = function() {
        // Validaciones formulario
        const botonSubmit = document.getElementById("botonSub");

        //const botonDelete = document.getElementById("botonDel");
        /*var tabla = document.getElementById("tabla");
        var lastRow = tabla.lastElementChild; // Obtener la última fila
        if (lastRow) {
            tabla.removeChild(lastRow); // Eliminar la última fila
        }*/
  
        if (botonSubmit) {
            botonSubmit.addEventListener('click', function(event) {
            
                const inputField = document.getElementById("nombre");
                const inputField2 = document.getElementById("nota");
                const inputField3 = document.getElementById("pais");

                const soloLetrasEsp = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
                const numToHundr = /^(100|[1-9]?[0-9])$/;

                let esValido = true;

  
                if (!(inputField && soloLetrasEsp.test(inputField.value))) {
                    //document.getElementById("errorNombre").style.visibility = "visible";
                    alert("nombre solo pouede contener letras");
                    esValido = false;
                    event.preventDefault(); // Prevent the default form submission
                }else{
                 //document.getElementById("errorNombre").style.visibility = "hidden";
                                
                 }
  
               if (!(inputField2 && numToHundr.test(inputField2.value))) {
                    //document.getElementById("errorApellido").style.visibility = "visible";
                    alert("la nota debe de ser un numero del 0 al 100");
                    esValido = false;
                    event.preventDefault(); // Prevent the default form submission
                }else{
                 //document.getElementById("errorApellido").style.visibility = "hidden";
                                
                 }

                 if (!(inputField3 && soloLetrasEsp.test(inputField3.value))) {
                    //document.getElementById("errorApellido").style.visibility = "visible";
                    alert("pais solo pouede contener letras");
                    esValido = false;
                    event.preventDefault(); // Prevent the default form submission
                }else{
                 //document.getElementById("errorApellido").style.visibility = "hidden";
                                
                 }


                 if(esValido){
                    event.preventDefault();
                    const arrayValores = [inputField.value, inputField2.value, inputField3.value];

                    crear(arrayValores);

                    function crear(arrayValores) {
                        var tabla= document.getElementById("tabla")

                        var fila= document.createElement('tr');
            
                        //var contenido= document.createTextNode("fila nueva");
                        
                        for(var i=0; i<document.getElementsByTagName("tr")[0].getElementsByTagName("th").length;i++){
                            var tede= document.createElement('td');
                            var texto = document.createTextNode(arrayValores[i]);
            
                            tede.appendChild(texto);
                            fila.appendChild(tede);
                            
                        }			
                        tabla.appendChild(fila);		

                        //si quisieras hacer un boton de borrar seria probablemente parecido pero con removeChild o asi
                        
                        //llama a limpiarFormulario
                    }

                 }

  
  
            });
        }
    }
  
    eventos(); // Call the eventos function after the DOM is ready
  });
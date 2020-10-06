function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
}

function createR() {
    
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var correo = document.getElementById("Input3").value;
    var carrera = document.getElementById("Input4").value;


    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var Marca = {
            id, //modelo:id
            nombre,
            correo,
            año,
        }

        var lista_Modelos=JSON.parse(localStorage.getItem("Modelos"));

        if(lista_Modelos==null)
        { 
            var lista_Modelos = [];
        }
        
        const existe = lista_Marca.some(element=>element.id==id); 

        if(!existe||document.getElementById("Input1").disabled==true)
        {
            
            if(document.getElementById("Input1").disabled==true)
            {
                var lista_Marca=lista_Marca.filter(Marca=>Marca.id!=id);

            }
                
            lista_Modelos.push(Modelos);
            var temporal = lista_Modelos.sort((a,b) => a.id-b.id);
            localStorage.setItem("Marca", JSON.stringify(temporal));
            
            read();
            resetFields();
            swal("Listo!", "Agregado correctamente", "success");

        }
        else
        {
            swal("Error", "Ya existe ese id de Modelos","warning");
        }

    } 
    else 
    {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
    
}

function read(){
    document.getElementById("Table1").innerHTML='';
    

    const lista_Modelos = JSON.parse(localStorage.getItem("Modelos"));
    
     
    if(lista_Modelos)
    {
        lista_Modelos.forEach((Marca)=>printRow(Marca));
    }
}


function printRow(Modelo){
    
    if(alumno!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = Año.id;
        cell2.innerHTML = Modelo.nombre; 
        cell3.innerHTML = Modelo.correo;
        cell4.innerHTML = Modelo.Modelo; 
        cell5.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${alumno.id})">Eliminar</button>`;
        cell6.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+alumno.id+')">Modificar</button>';
    }
}

function deleteR(id){
    const lista_Modelos = JSON.parse(localStorage.getItem("Modelos"));
    var temporal=lista_Modelos.filter(Modelos=>Modelos.id!=id);
    localStorage.setItem("Modelos", JSON.stringify(temporal));

    if(temporal.length==0)
    { 
        localStorage.removeItem("Modelos");
    }
 
    read();
    
}

function seekR(id){

    const lista_Modelos = JSON.parse(localStorage.getItem("Modelos"));
    var Modelos=lista_Modelos.filter(Modelos=>Modelos.id==id);
    //console.log(Modelos[0]);
    updateR(Modelos[0]);
}

function updateR(Marca){
    if(alumno!=null)
    {
        document.getElementById("Input1").value=Modelo.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=Marca.nombre;
        document.getElementById("Input3").value=Marca.correo;
        document.getElementById("Input4").value=Marca.Año;
    }
}


//Para consulta de Liberado
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;
  
    const lista_Liberado = JSON.parse(localStorage.getItem("Modelos"));
    var ModelosC=lista_Liberado.filter(Modelos=>Marca.Año==c);
    if(ModelosC)
    {
        ModelosC.forEach((Marca)=>printRowQ(Marca));
    }
    //console.log(ModelosC)

}


function printRowQ(Desbloqueado){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = Compañia.id;
    cell2.innerHTML = .Compañia.nombre; 
    cell3.innerHTML = Compañia.correo;
    cell4.innerHTML = Compañia.Telcel; 
   
}
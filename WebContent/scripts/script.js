var xhr = new XMLHttpRequest();
window.onload=function()
{
	document.getElementById("btnABNB").addEventListener("click",miSubmit);
	document.getElementById("btnAgregarFila").addEventListener("click",agregarFila);
	document.getElementById("btnLimpiar").addEventListener("click",limpiar);
}
function miSubmit(){
	alert("00000");
//	document.getElementById("miDiv").style.backgroundColor="orange";
//	var name = document.getElementById("new_name").value;
//	var country = document.getElementById("new_country").value;
//	var age = document.getElementById("new_age").value;
	
	var codigo=document.getElementById("nuevo_codigo").value;
	var nombre=document.getElementById("nuevo_nombre").value;
	var nocajas=document.getElementById("nuevo_nocajas").value;
	var cajaxtarima=document.getElementById("nuevo_cajaxtarima").value;
	var peso=document.getElementById("nuevo_peso").value;
	
	//--
	xhr.open("get","MiServlet?txtCodigo="+codigo);
	//xhr.open("get","Practica3Servlet?txtNombrecillo="+nombre+"&" + "txtApellidilloP="+apellidoP+"&txtApellidilloM="+apellidoM+"&txtEdadcilla="+edad+"&txtPesillo="+peso+"&txtAlturilla="+altura);
	xhr.onload=callBack;
	xhr.send(null);
}
var zero=0;
var acum=parseInt(zero);
function callBack()
{
	if(xhr.status==200)
		{
		
		var s = xhr.responseText;
		console.log("aqui"+s);
		var s1=JSON.parse(s);
		alert(s1.codigo);
		document.getElementById("nuevo_nombre").value=s1.nombre;
		document.getElementById("nuevo_cajaxtarima").value=s1.cajaxtarima;
		var boxNumber = parseInt(document.getElementById("nuevo_nocajas").value);
		console.log("Este es el valor de bxNumber: "+boxNumber);
		document.getElementById("nuevo_peso").value=(parseInt(s1.peso))*boxNumber;

		//document.getElementById("miDiv").innerHTML=xhr.responseText;
		var res=parseInt((nuevo_peso).value);
		console.log(res);
		document.getElementById("xxx").value=res;
		acum=acum+res;
		document.getElementById("yyy").value=acum;
		return acum;
		}
}
function borrar(no)
{
//document.getElementById("row"+no+"").outerHTML="";
//var resBorrar=document.getElementById("row"+no+"").innerText;
var resBorrar=document.getElementById("peso_row"+no+"").innerText;
console.log("AAA: "+resBorrar);
console.log("BBB: "+acum);
//>document.getElementById("yyy").value=resBorrar;
acum=acum-resBorrar;
document.getElementById("yyy").value=acum;
document.getElementById("row"+no+"").outerHTML="";
return acum;
}
var cont=0;
function agregarFila()
{
 
 cont++;
 var nuevo_id=document.getElementById("nuevo_id").value;
 var nuevo_codigo=document.getElementById("nuevo_codigo").value;
 var nuevo_nombre=document.getElementById("nuevo_nombre").value;
 var nuevo_nocajas=document.getElementById("nuevo_nocajas").value;
 var nuevo_cajaxtarima=document.getElementById("nuevo_cajaxtarima").value;
 var nuevo_peso=document.getElementById("nuevo_peso").value;
	
 var table=document.getElementById("tablaC");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td>"+cont+"</td><td id='codigo_row"+table_len+"'>"+nuevo_codigo+"</td><td id='nombre_row"+table_len+"'>"+nuevo_nombre+"</td><td id='nocajas_row"+table_len+"'>"+nuevo_nocajas+"</td><td id='cajaxtarima_row"+table_len+"'>"+nuevo_cajaxtarima+"</td><td id='peso_row"+table_len+"'>"+nuevo_peso+"</td><td><input type='button' value='Delete' class='delete' onclick='borrar("+table_len+")'></td></tr>";
 
 document.getElementById("nuevo_id").value="";
 document.getElementById("nuevo_codigo").value="";
 document.getElementById("nuevo_nombre").value="";
 document.getElementById("nuevo_nocajas").value="";
 document.getElementById("nuevo_cajaxtarima").value="";
 document.getElementById("nuevo_peso").value="";
}

function limpiar(){
	document.getElementById("nuevo_id").innerHTML="";
	document.getElementById("nuevo_codigo").innerHTML="";
	document.getElementById("nuevo_nombre").innerHTML="";
	document.getElementById("nuevo_nocajas").innerHTML="";
	document.getElementById("nuevo_cajaxtarima").innerHTML="";
	document.getElementById("nuevo_peso").innerHTML="";
}
//function agregarFila(){
//	document.getElementById("tablaprueba").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td>';
//}
//
//function eliminarFila(){
//  var table = document.getElementById("tablaC");
//  var rowCount = table.rows.length;
//  //console.log(rowCount);
//  
//  if(rowCount <= 1)
//    alert('No se puede eliminar el encabezado');
//  else
//    table.deleteRow(rowCount -1);
//}
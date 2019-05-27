<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ATRIUS</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<div id=tablaCalculadora">
 <form id="principal" action="MiServlet" method="GET">
    <table id="tablaC">
        <tr>
          <th>ID</th>
          <th>CODIGO
          <th>NOMBRE</th>
          <th>NO° CAJAS</th>
          <th>CAJAS POR TARIMA</th>
          <th>PESO (kg.)</th>
        </tr>
        <tr>
		  <td><input type="text" id="nuevo_id"></td>
		  <td><input type="text" id="nuevo_codigo"></td>
		  <td><input type="text" id="nuevo_nombre"></td>
		  <td><input type="text" id="nuevo_nocajas"></td>
		  <td><input type="text" id="nuevo_cajaxtarima"></td>
		  <td><input type="text" id="nuevo_peso"></td>
		  <td><input type="button" id="btnAgregarFila" value="Agregar Fila"></td>
		  <td><input type="button" id="btnLimpiar" value="Limpiar"></td>
		  <td><button type="button" id="btnABNB">Buscar Elemento</button></td>
		</tr>        
    </table>
    <div class="form-group">
    <input type="text" id="xxx">
    <input type="text" id="yyy">
    <input type="text" id="zzz">
    </div>
 </form>
</div>
<script src="scripts/script.js"></script>
</body>
</html>
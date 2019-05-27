package com.proyecto.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.proyecto.model.Producto;

@WebServlet("/MiServlet")
public class MiServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter salida = response.getWriter();
		
		String nombreBuscado = request.getParameter("txtCodigo");
		
		int idProducto;
		String codigo;
		String nombre;
		int nocajas;
		int cajaxtarima;
		double peso;
		
		Connection conn = null;
		Statement stmnt = null;
		ResultSet rs = null;
		
		Properties props = new Properties();
		String nombreArchivo = "config.properties";
		InputStream inputStream = getClass().getClassLoader().getResourceAsStream(nombreArchivo);
		if(inputStream!=null)//si encontro el archivo, carga el archivo en el props
		{
			props.load(inputStream);
		}
		else
		{
			throw new FileNotFoundException("Property file'"+nombreArchivo+"'no se encontro el classpath");
		}
		
		String urlServidor = props.getProperty("urlServidor");
		String usuario = props.getProperty("usuario");
		String password = props.getProperty("password");
		String sentenciaSql = props.getProperty("sentenciaSQL");
		String s2 = sentenciaSql+"'"+nombreBuscado+"'";
		System.out.println("!!!!!"+s2);
		Producto miProducto = new Producto();
		miProducto.setCodigo(request.getParameter("txtCodigo"));
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(urlServidor,usuario,password);
			stmnt = conn.createStatement();
			rs = stmnt.executeQuery(s2);
			//pstmnt.executeUpdate(sentenciaSql);
			
			//rs = stmnt.executeQuery(sentenciaSql);
			//rs.next()extrae fila por fila
			rs.next();
			idProducto = rs.getInt("idProducto");
			codigo = rs.getString(2);
			nombre = rs.getString(3);
			nocajas = rs.getInt(4);
			cajaxtarima = rs.getInt(5);
			peso = rs.getDouble(6);
			
			response.setContentType("application/json");
			salida.append("{\"codigo\":\""+codigo+"\",\"nombre\":\""+nombre+"\",\"numerocajas\":"+nocajas+",\"cajaxtarima\":"+nocajas+",\"peso\":"+peso+"}");
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

}

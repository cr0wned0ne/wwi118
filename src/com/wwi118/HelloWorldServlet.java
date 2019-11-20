package com.wwi118;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorldServlet extends HttpServlet{
	
	

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String message = req.getParameter("message");
		System.out.println(message);
		writeToDatabase(message);
		
	}
	
	
	private void writeToDatabase(String message) {
		try {
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/messages?useSSL=false", "root", "start123");
			Statement statement = conn.createStatement();
			
			String insert = "insert into messages(message) values ('" + message + "')";
			
			statement.executeUpdate(insert);
		
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
}

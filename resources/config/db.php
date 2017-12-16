<?php 
	//Create connection to database
	$conn = mysqli_connect('localhost', 'root', '', 'pgd_new');

	//Check connection
	if(mysqli_connect_errno()){
		//Connection failed
		echo 'Failed to connect to the database'.mysqli_connect_errno();
	}
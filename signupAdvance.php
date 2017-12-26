<html>
<?php
include 'plugins.php';
?>
<head>
  <title>Pinoy Global Deals</title>
  <link rel="Shortcut Icon" type="image/ico" href="img/favicon.ico">
</head>
<form action="signupAdvance.php" method="post">
<body style="margin-left:2%">
<h2>Create your Pinoy Global Deals Advance Account</h2>
<label>First Name</label>
<input type="text" class="form-control" name="firstName" style="width:30%">
<label>Last Name</label>
<input type="text" class="form-control" name="lastName" style="width:30%">
<label>E-mail</label>
<input type="text" class="form-control" name="email" style="width:30%">
<label>Password</label>
<input type="password" class="form-control" name="password" style="width:30%">
<label>Confirm Password</label>
<input type="password" class="form-control" name="password2" style="width:30%">
<label>Gender</label>
<select class="form-control" name="gender" style="width:30%">
  <option>Male</option>
  <option>Female</option>
</select>
<label>Mobile Number</label>
<input type="text" class="form-control" name="mobile_num" style="width:30%">
<label>Country</label>
<input type="text" class="form-control" name="country" style="width:30%">
<label>Province</label>
<input type="text" class="form-control" name="province" style="width:30%">
<label>City</label>
<input type="text" class="form-control" name="city" style="width:30%">
<label>Street</label>
<input type="text" class="form-control" name="street" style="width:30%">
<br>
<button type="submit" class="btn btn-primary" name="register">Register</button>
<br>
<br>
</form>
<?php
if(isset($_POST["register"])){
  $conn = getConnection();
  $firstName = $_POST["firstName"];
  $lastName = $_POST["lastName"];
  $email = $_POST["email"];
  $mobile_num = $_POST["mobile_num"];
  $street = $_POST["street"];
  $city = $_POST["city"];
  $country = $_POST["country"];
  $province = $_POST["province"];
  $p = $_POST["password"];
  $password = md5($p);
  $gender = $_POST["gender"];
  $ip = $_SERVER['REMOTE_ADDR'];
  $activate_email = 1;
  $userType = 102;

  $sql = "INSERT INTO mt_users (first_name, lastname, email_add, mobile_num, street, city, country, province, password, gender, ip, activate_email, userType) "
          . "VALUES ('$firstName', '$lastName', '$email', '$mobile_num', '$street', '$city', '$country', '$province', '$password', '$gender', '$ip', '$activate_email', '$userType')";
  $conn->query($sql);
}
?>
</body>
</html>

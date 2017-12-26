<html>
<?php
include 'plugins.php';
?>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="ypZaVNwO_O8FrwuhdtzDqzLOfgWvLZ2AA9vmSbyCTOQ" />
  <meta name="propeller" content="ed552b5a8ac60625ae31beb6db5d9e45" />
  <title>Pinoy Global Deals</title>
  <link rel="Shortcut Icon" type="image/ico" href="img/favicon.ico">
  <meta name="description" content="">

  <!-- End of Local CSS-->


  <!-- To Unset the search param -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <nav class="navbar navbar-default" style="width:100%">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
        </button>
         <a class="hovicon effect-8" href="home.php"><img width="70px" height="50px" src="images/pgd_logo.png" style="margin: 25px 0px">
          </a>
      </div>
      <ul class="nav navbar-nav navbar-right" style="padding-top: 20px;">
        <li class="hidden-sm hidden-md hidden-xs"><a href="accountsCategory.php" id ><button class="btn syitem" data-toggle="popover" data-template='<div class="popover1" role="tooltip">
                      <div class="arrow"></div>
                      <div class="popover-content"></div>
                    </div>'  data-content="Post Your Items For Free"><span>Sell Your Items Now</span></button></a></li>
        <li><a href="#" data-toggle="modal" data-target="#at-login"><button class="btn loginbtn" style="border:1px solid black;"><span>Log In</span></button></a></li>
      </ul>
    </div>
    </nav>
    <!-- Modal -->
<div class="modal fade" id="at-login" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <center><h4 class="modal-title">Log In</h4></center>
      </div>
      <div class="modal-body">
        <form method="post"  id="form-standard" action="">
            <div class="form-group">
                <div class="row log-form">
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-3">
                        <label class="label-email">Email:</label>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-7">
                    <input type="text" name="email" value="" class="form-control">
                    </div>
                    <div class="col-lg-2"></div>
                </div>
                <div class="row log-form">
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
                    <div class="col-lg-2 col-lg-2 col-md-2 col-sm-2 col-xs-3">
                        <label class="label-password">Password:</label>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-7">
                    <input type="password" name="password" class="form-control">
                    </div>
                <div class="col-lg-2"></div>
                </div>
                <div class="row" style="margin-top: 20px;">
                <div class="col-lg-2 col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-8" style="margin-top: 8px;">
                <input type="checkbox" name="remember_me" id="remember_me" class="chk-rmb"><span class="rememberme">Remember me on this computer</span>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3" style="margin-right: 0px;padding-right: 0px;">
                <input type="submit" name="login" class="btn btn-login text-right" value="Login">
                </div>
                <div class="col-lg-2"></div>
                </div>
                <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                <hr class="style18">
                </div>
                <div class="col-lg-3"></div>
                </div>
                <div class="row signme">
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-10 text-center">
                    <span>Do you want to have an account? <a href="accountsCategory.php">Click here</a> to Sign Up</span>
                </div>
                <div class="col-lg-2"></div>
                </div>
            </div>
        </form>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<!--
$result -> num_rows to check number of returned rows
!-->
<?php

if(isset($_POST["login"])){
  $conn = getConnection();

  $email = $_POST["email"];
  $password = $_POST["password"];
  $sql = "SELECT user_id, email_add, password
          FROM   mt_users
          WHERE  email_add = '$email' AND password ='".md5($password)."'";
          $result = mysqli_query($conn, $sql);
          if (mysqli_num_rows($result) == 1) {
            echo "<script>window.location='dashboard.php'</script>";
              while ($row = mysqli_fetch_assoc($result)) {
              $_SESSION["userID"] = $row["user_id"];

          }

        }
          else {
            echo "fail";
          }
  }

?>
</body>
</html>

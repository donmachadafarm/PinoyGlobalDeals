<!-- LOCAL CSS-->
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/aboutetc.css">
<link rel="stylesheet" href="css/accountcat.css">
<link rel="stylesheet" href="css/animate.css">
<link rel="stylesheet" href="css/login.css">
<link rel="stylesheet" href="css/productview.css">
<link rel="stylesheet" href="js/vendor/jquery-ui/jquery-ui.css">
<link rel="stylesheet" href="js/vendor/jquery-ui/jquery-ui.theme.css">
<link rel="stylesheet" href="css/jhtml/jHtmlArea.css">
<link rel="stylesheet" href="css/jhtml/jqueryui/ui-lightness/jquery-ui-1.7.2.custom.css">
  <!-- Bootstrap Core CSS -->

    <link href="vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
    <!-- MetisMenu CSS -->
    <link href="vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="dist/css/sb-admin-2.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- Multi select-->
    <link href="dist/css/bootstrap-multiselect.css" rel="stylesheet" type="text/css">
    <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet">
    <!--End of Google Fonts-->
    <!-- Font Awesome CDN-->
     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <!-- End of Font Awesome CDN-->
    <!-- JAVASCRIPT -->
    <script type="text/javascript" src="js/bootstrap-modal-animate-css.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!--End of JAVA SCRIPT -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<?php
function getConnection(){
    $servername = "127.0.0.1"; //servername
    $username = "root"; //username
    $password = ""; //password of db
    $dbname = "pgd_new"; //name of the DB

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}
?>

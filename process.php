<?php
  if (isset($_POST['email']))  {
  
    //email information
    $admin_email = "info@codehard.wz.cz";
    $jmeno = $_POST['jmeno'];
    $telefon = $_POST['telefon'];
    $email = $_POST['email'];
    $pocetdospeli = $_POST['pocetdospeli'];
    $pocetdeti = $_POST['pocetdeti'];
    $ubytovani = $_POST['ubytovani'];
    $komentar = $_POST['komentar'];
   
    //send email
    mail($admin_email, "RSVP", $jmeno . "%" . $telefon . "%" . $email . "%" . $pocetdospeli . "%" . $pocetdeti . "%" . $ubytovani . "%" . $komentar, "From:" . $email);
    
    //navigate to
    header('Location: http://codehard.wz.cz/success.html');
  }
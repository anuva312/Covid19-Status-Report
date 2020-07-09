<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Symptoms</title>
</head>

<body>
    <div id="top-nav">
        <h4>Covid19 Status Report </h4>
        <nav>
            <a href="index.html">Home</a>
            <a href="symptoms.php">Symptoms</a>
            <a href="prevention.php">Prevention</a>
        </nav>
    </div>
    <div id="page-container">
    <h2 id="title">SYMPTOMS</h2>
    <hr>
    <p>
     <?php

       $conn = mysqli_connect("localhost","webhost","webdev","cov_data");
       /*if($conn){
           echo"succes";
        }else { 
          echo"failed connection";

          }*/
       $sql ="SELECT * FROM symptoms";
       $result=mysqli_query($conn,$sql);
       while($row=mysqli_fetch_array($result)){
           echo"<br>".$row["symptom"];
             }
          
     ?>
     </p>
     </div>
    <footer>
        Designed by Remarkable Pebbles. <br>
        For feedback, <a href="contact.html">Click Here</a>
    </footer>
</body>

</html>
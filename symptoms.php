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
            <a href="symptoms.html">Symptoms</a>
            <a href="prevention.html">Prevention</a>
        </nav>
    </div>
    <h2 id="title">SYMPTOMS</h2>
    <hr>
     <?php

       $conn = mysqli_connect("localhost","root","","corona");
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
    <footer>
        Designed by Remarkable Pebbles. <br>
        For feedback, <a href="contact.html">Click Here</a>
    </footer>
</body>

</html>
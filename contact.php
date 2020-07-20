<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Suggestions</title>
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
        <div id="suggestion-form">
            <h3 id="title">Suggestions</h3>
            <hr>
               
            <form>
                <label for="name">Name :</label>
                <input type="text" name="name">
                <label for="email">Email :</label>
                <input type="email" name="email">
                <label for="message">Message :</label>
                <textarea name="message"></textarea>
                <input type="submit" value="Send">
            </form>
        </div>
    </div>
            <?php

             $conn = mysqli_connect("localhost","root","","corona");
             if(isset($_POST['submit'])){
             $name=$_POST['name'];
             $email=$_POST['email'];
             $message=$_POST['message'];
             }
             $sql = "INSERT INTO form (name,email,message) values ('$name','$email','$message')";
             $result = mysqli_query($conn,$sql);
             if( $result)
                { echo"Message sent";
                 }
            ?>
    <footer>
        Designed by Remarkable Pebbles. <br>
        <!-- <p>For feedback, <a href="contact.html">Click Here</a></p> -->
    </footer>
</body>

</html>
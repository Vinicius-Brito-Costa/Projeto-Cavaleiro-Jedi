<?php
    require('conexao.php');
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $usuario = $_POST['nome'];
        $mensagem = $_POST['mensagem'];
        $email = $_POST['email'];
        $sql = "INSERT INTO feedback (id_mensagem, usuario, mensagem, email, dia) VALUES (null, '$usuario', '$mensagem', '$email', now());";
        semQuery($sql);    
    }
    header("Access-Control-Allow-Origin: *");
?>
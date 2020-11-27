<?php 
    require('conexao.php');

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $frete = 10;
        $usuario = "Usuario Padrão";
        $endereco = $_POST['endereco'];
        $numero = $_POST['numero'];
        $cidade = $_POST['cidade'];
        $estado = $_POST['estado'];
        $cep = $_POST['cep'];
        $telefone = $_POST['telefone'];
        $id_produto = $_POST['id_produto'];
        $valor_unitario = $_POST['preco_atual'];
        $quantidade = $_POST['quantidade'];
        $valor_total = ($valor_unitario * $quantidade) + $frete;
        //$sql = "INSERT INTO pedidos VALUES (null, '$usuario', '$endereco','$telefone', '$id_produto', '$valor_unitario', '$quantidade', '$valor_total')";
        $sql = "INSERT INTO pedidos VALUES (null, '$usuario', '$endereco','$numero', '$cidade', '$estado', '$cep', '$telefone', '$id_produto', '$valor_unitario', '$quantidade', '$valor_total')";
        semQuery($sql);    
    }
    header("Access-Control-Allow-Origin: *");
?>
<?php
    function query($sql){
        $servidor = "den1.mysql6.gear.host";
        $usuario  = "fullstackdb1";
        $senha    = "Cg9X2D_-z03J";
        $bancoDB  = "fullstack";
        $conexao = mysqli_connect($servidor, $usuario, $senha, $bancoDB);
        if(!$conexao)
        {
            die("Erro de conexão:".mysqli_connect_error());
        }
        mysqli_set_charset($conexao, "utf8mb4");
        $resultado = mysqli_query($conexao, $sql);
        return $resultado;
        mysqli_close($conexao);
    }

    function semQuery($sql){
        $servidor = "localhost";
        $usuario  = "root";
        $senha    = "";
        $bancoDB  = "fullstack";
        $conexao = mysqli_connect($servidor, $usuario, $senha, $bancoDB);
        if(!$conexao)
        {
            die("Erro de conexão:".mysqli_connect_error());
        }
        mysqli_set_charset($conexao, "utf8mb4");
        mysqli_query($conexao, $sql);
        mysqli_close($conexao);
    }
<?php 
    include('./conexao.php');
    $tabela = $_GET['table'];
    $tipo = 'nada';
    if(isset($_GET['query'])){
        $tipo = $_GET['query'];
    }
    $sql = "select * from $tabela";
    if($tabela == "produtos"){
        $sql = "select * from $tabela left outer join produtos_categorizados on produtos.id_produto = produtos_categorizados.id_produto
        left outer join categorias on produtos_categorizados.id_categoria = categorias.id_categoria
        left outer join sub_categorias on produtos_categorizados.id_sub_categoria = sub_categorias.id_sub_categoria order by produtos.id_produto asc;";
    }
    if($tabela == "produtos" && $tipo == "destaque")
    {
        $sql = "select * from $tabela left outer join produtos_categorizados on produtos.id_produto = produtos_categorizados.id_produto
        left outer join categorias on produtos_categorizados.id_categoria = categorias.id_categoria
        left outer join sub_categorias on produtos_categorizados.id_sub_categoria = sub_categorias.id_sub_categoria where promocao > 0 order by rand() limit 4;";
    }
    $resultado = query($sql);
    $conteudo =[];
    while($linha = mysqli_fetch_assoc($resultado)){
        $conteudo[] = $linha;
    }
    header("Access-Control-Allow-Origin: *");
    echo json_encode($conteudo);
?>
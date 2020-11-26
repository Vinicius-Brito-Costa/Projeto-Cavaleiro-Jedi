<?php
$link = file_get_contents("http://localhost/Projeto%20Bootstrap/contentJson.php?table=produtos");
$guia = file_get_contents("http://localhost/Projeto%20Bootstrap/contentJson.php?table=produtos_categorizados");
$dados = json_decode($link, true);
$guia_categorias = json_decode($guia, true);
foreach($dados as $key => $valor){
    $nome = $valor["nome"];
    $preco_antigo = $valor["preco_antigo"];
    $preco_atual = $valor["preco_atual"];
    $promo = $valor["promocao"];
    if ($preco_antigo == "") {
        $preco_antigo = "&nbsp;";
    } else {
        $preco_antigo = "R$" . $preco_antigo;
    }
    if ($promo != "") {
        $promo = "-" . $promo . "%";
    }
    $id = 0;
    $classe = 0; 
    foreach($guia_categorias as $guia_categoria){
        if($guia_categoria['id_produto'] ==  $valor['id_produto'])
        {
            $id= $guia_categoria['id_categoria'];
            $classe = $guia_categoria['id_sub_categoria'];
        }
    }
    $endereco_imagem = $valor["nome_imagem"];
?>
    <div class='box-produtos sc<?php echo $classe ?> col' id='c<?php echo $id ?>'>
        <form onclick="GoTo('produto.php'), this.submit()"role="button" method="GET" action="produto.php">
            <img class="cover" src="imagens/produtos/<?php echo $endereco_imagem ?>">
            <div class="box-descricao text-light px-2">
                <span class="preco-antigo text-danger d-block"><p><?php echo $preco_antigo ?></p></span>
                <span class="nome-produto d-block text-nowrap overflow-hidden"><?php echo $nome ?></span>
                <ul class="list-unstyled d-flex mx-0 px-0 container-fluid text-center">
                    <li class="preco-atual text-light mx-0 pl-1 pr-0 px-0 py-0 container-fluid"><p><?php echo "R$ " . $preco_atual ?></p></li>
                    <li class="promo bg-danger mx-0 px-0 mx-0-sm px-0-sm mx-1 px-1 "><p><?php echo $promo ?></p></li>
                </ul>
                <input typer="hidden" name="id_produto" style="display: none" value="<?php echo $valor['id_produto'] ?>"></input>
            </div>
        </form>
    </div>
<?php
}
?>
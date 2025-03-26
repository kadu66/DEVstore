//CRIA OS VETORES PARA AMEZENAR OS DADOS DO BACKEND 
var idsProds=[]
var descProds=[]
var precoProds=[]
var tamanhoProds=[]
var fotoProds=[]
var categoriaProds=[]
//informa ao nevagador para chamar função
//ao carregar a pagina
window.onload=()=>{
    pesquisaProdutos(); 
}
//cria a funcao pesquisaProdutos()
//essa funcao requisitada e carrega os resultados 
function pesquisaProdutos(){
    limpa_vetores(); 
    //faz a requisição a backend
    fetch('http://localhost/devstore/produtos.php')
    //transforma a resposta do servidor 
    .then(response=>response.json())
    //manipula os dados e monta a resposta na tela
    .then(data=>{
        //captura as 2 lista de produtos
        const divProds = document.getElementById('products-area'); 
        const divProds = document.getElementById('products-area'); 
        //exclui o conteudo atual
        divProds.replaceChildren(); 
        divSeen.replaceChildren(); 
        //estrutura para alimentar os vetores 
        for(var i=0;i<data.lenght;i++){
            //push adiciona um item no final
            //de cada vetor 
        }
    })
}
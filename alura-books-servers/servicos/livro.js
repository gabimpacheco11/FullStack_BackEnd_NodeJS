const fs = require("fs")
const path = require("path")

const pathLivro = "alura-books-servers/livros.json"

function getTodosLivros() {
    return JSON.parse( fs.readFileSync(pathLivro) )
}

//para criar essa função primeiro retornei a lista de livros, e criei uma variavel filtrada obtendo o id comparado
// Como o ID é unico adicionei [0] retornando o primeiro item da lista que será sempre 1
function getLivroPorId(id) {
    const livros =  JSON.parse(fs.readFileSync(pathLivro))
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}


function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync(pathLivro))

    // criar uma nova lista de livros com o livroNovo
    const novaListadeLivros = [...livros, livroNovo]

    fs.writeFileSync(pathLivro, JSON.stringify(novaListadeLivros))
}

function modificaLivro(modificacoes, id){
    // O let é usado para algo modificavel. o Const é imodificavel
    let livrosAtuais = JSON.parse(fs.readFileSync(pathLivro))
    const indiceModificavel = livrosAtuais.findIndex(livro => livro.id === id)

    // Cria 2 objetos com seus valores, caso um deles tenha variavel com valor diferente esse valor será alterado
    const conteudoModificado = {...livrosAtuais[indiceModificavel], ...modificacoes}
    livrosAtuais[indiceModificavel] = conteudoModificado

    fs.writeFileSync(pathLivro, JSON.stringify(livrosAtuais))

}

function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync(pathLivro))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync(pathLivro, JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivroPorId
}
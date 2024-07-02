const fs = require("fs")
const path = require("path")

const pathFavoritos = "alura-books-servers/favoritos.json"
const pathLivro = "alura-books-servers/livros.json"

function getTodosFavoritos() {
    return JSON.parse( fs.readFileSync(pathFavoritos) )
}

function deletaFavoritosPorId(id){
    const livros = JSON.parse(fs.readFileSync(pathFavoritos))

    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync(pathFavoritos, JSON.stringify(livrosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse( fs.readFileSync(pathLivro) )
    const favoritos = JSON.parse( fs.readFileSync(pathFavoritos) )

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync(pathFavoritos, JSON.stringify(novaListaDeLivrosFavoritos))
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritosPorId,
    insereFavorito
}
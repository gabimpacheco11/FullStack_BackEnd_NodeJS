// Este arquivo foi criado para testar o acesso a arquivos no nodeJS
//fs: um componente do Node capaz de ler/escrever arquivos. Vai ser usado para ler/inserir dados no json

const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = { id:'3', nome: 'Livro mais que demais' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado ]))

console.log(JSON.parse(fs.readFileSync("livros.json")))
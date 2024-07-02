// Importando express
const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")
const cors = require("cors")
//crindo função express e add na constante app
const app = express()
// informa que o app vai receber dados em formato json
app.use(express.json())
app.use(cors({origin: "*"}))
// Configurando porta
const port = 8000

app.use('/livro', rotaLivro)
app.use('/favorito', rotaFavorito)

//Fazendo app ficar escutando a porta 8000 caso haja interação do usuario
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
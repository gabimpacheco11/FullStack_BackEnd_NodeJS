const {Router} = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros) 

//:id será a variavel que vai ser passada para obter o id do livro
router.get('/:id', getLivro) 

router.post('/', postLivro)

// Responsavel por edição
router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)


module.exports = router
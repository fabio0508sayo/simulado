const Entrega = require('../models/Entrega')
const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.cidadeDestino || !valores.statusAtual || !valores.dataHora || !valores.idCarga) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        

        await Entrega.create(valores)
        return res.status(201).json({ message: 'Entrega cadastrado com sucesso!' })
    } catch (err) {

        console.error('erro ao cadastrar entrega', err)
        return res.status(500).json({ message: 'Erro ao cadastrar entrega ' })

    }
}

module.exports = { cadastrar }
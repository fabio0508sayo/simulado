const Carga = require('../models/Carga')
const cryptoJs = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.descricao || !valores.peso || !valores.volume || !valores.codRastreio||!valores.idMotorista) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        

        await Carga.create(valores)
        return res.status(201).json({ message: 'Carga cadastrado com sucesso!' })
    } catch (err) {

        console.error('erro ao cadastrar Carga', err)
        return res.status(500).json({ message: 'Erro ao cadastrar Carga ' })

    }
}

module.exports = { cadastrar }
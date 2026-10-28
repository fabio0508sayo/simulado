const Motorista = require('../models/Motorista')
const CHAVE_SECRETA = 'segredo'

const cryptoJs = require('crypto-js')

const cadastrar = async(req,res)=>{
    const valores = req.body
    console.log(valores)
    if(!valores.nome||!valores.cnh||!valores.cpf||!valores.telefone){
        return res.status(500).json({message:'Preencha todos os campos para cadastrar'})
    }
    
    try{
        const cpfCripto = cryptoJs.AES.encrypt(valores.cpf,CHAVE_SECRETA).toString()
        const cnhCripto = cryptoJs.AES.encrypt(valores.cnh,CHAVE_SECRETA).toString()
        await Motorista.create({
            nome:valores.nome,
            telefone:valores.telefone,
            cpf:cpfCripto,
            cnh:cnhCripto
        })
        return res.status(200).json({message:'Cadastro feito com sucesso'})
    }catch(error){
        console.error(error)
    }
}
const consultar= async(req,res)=>{
    const id = req.params.id
    try{

    }catch(err){
        console.error(err) 
    }
}
module.exports={cadastrar}
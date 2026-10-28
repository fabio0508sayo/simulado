
const resposta = document.getElementById('resposta')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const descricao = document.getElementById('descricao').value 
    const peso = document.getElementById('peso').value 
    const codRastreio = document.getElementById('codRastreio').value 
    const idMotorista = document.getElementById('idMotorista').value 

    const valores = {
        descricao: descricao,
        peso: peso,
        codRastreio: codRastreio,
        idMotorista: idMotorista
    }

    fetch('http://localhost:3000/carga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })

        .then(res => res.json())
        .then(dados => {
            resposta.innerHTML += `<p>${dados.message}</p>`
            document.querySelector('form').reset()
        })
        .catch((err) => {
            console.error('Erro no cadastro', err)
            resposta.innerHTML += `<p>Erro ao cadastrar fucionario</p>`
        })
})
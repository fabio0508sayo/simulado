
const resposta = document.getElementById('resposta')
const btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const cidadeDestino = document.getElementById('cidadeDestino').value 
    const statusAtual = document.getElementById('statusAtual').value 
    const dataHora = document.getElementById('dataHora').value 
    const idCarga = document.getElementById('idCarga').value 

    const valores = {
        cidadeDestino: cidadeDestino,
        statusAtual: statusAtual,
        dataHora: dataHora,
        idCarga: idCarga
    }

    fetch('http://localhost:3000/entrega', {
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
function contador(){
    let inicio      = document.getElementById('inicio')
    let fim         = document.getElementsByName('fim')[0]
    let passo       = document.getElementsByName('passo')[0] 
    let numinicio   = Number(inicio.value)
    let numfim      = Number(fim.value)
    let numpasso    = Number(passo.value)
    

    if(inicio.value == '' || fim.value == '' || typeof passo.value == ''){
        document.getElementById('contagem').innerText = 'Impossivel contar!'
    }else{
        if(numpasso==0){
            window.alert('Passo invalido! Considerando passo = 1')
            numpasso = 1
        }        
        if(numinicio < numfim){
            document.getElementById('contagem').innerHTML = `A contagem é: <br>`
            for(let cont=numinicio; cont<=numfim; cont+=numpasso){
                document.getElementById('contagem').insertAdjacentHTML('beforeend',`<span>&#128073;</span> ${cont}`) 
            }
            document.getElementById('contagem').insertAdjacentHTML('beforeend', ' <span>&#129311;</span>')
        }else{
            document.getElementById('contagem').innerHTML = `A contagem é: <br>`
            for(let cont=numinicio; cont>=numfim; cont-=numpasso){
                document.getElementById('contagem').insertAdjacentHTML('beforeend',`<span>&#128073;</span> ${cont}`) 
            }
            document.getElementById('contagem').insertAdjacentHTML('beforeend', ' <span>&#129311;</span>')

        }
    }
}
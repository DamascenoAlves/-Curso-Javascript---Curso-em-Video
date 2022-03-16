let valores = []
let travafim=true

function adicionar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    let n = Number(num.value)
    
    if(num.value=''||n<1||n>100){
        window.alert('[ERRO] Valor inválido!')
    }else if (valores.indexOf(n)==-1){
        
        let item=document.createElement('option')
        item.text=`Valor ${n} adicionado`
        item.value = `${n}`
        tab.appendChild(item)
        valores.push(n)
        console.log(valores)
        travafim=false
        document.getElementById('resultados').innerHTML=``
    }else{
        window.alert('[ERRO] Número já adicionado!')
    }
}

function finalizar(){
    if(!travafim){
        travafim=true
        let totalnums   = valores.length;
        let valorescres = valores.sort((a,b)=>{
            if (a<b)return -1;
            if (a>b)return  1;
            return 0;
        }
        )
        let menornum    = valorescres[0]
        console.log(menornum)
        let maiornum    = valorescres[totalnums-1]
        let somavalores = valores.reduce((somavalores,currentElement)=> somavalores+currentElement)
        console.log(somavalores)
        let media       = somavalores/totalnums
        let resultados  = document.getElementById('resultados')
        resultados.innerHTML += `Ao todo temos ${totalnums} valores <br>`
        resultados.innerHTML += `O maior valor informado foi ${maiornum} <br>`
        resultados.innerHTML += `O menor valor informado foi ${menornum} <br>`
        resultados.innerHTML += `Somando todos os valores temos ${somavalores} <br>`
        resultados.innerHTML += `A media dos valores é de ${media}`
    }
}
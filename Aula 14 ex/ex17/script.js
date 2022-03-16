function tabuada(){
    let numero  = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')
    
    if(numero.value==''){
        window.alert('Por favor insira um valor!')
    }else{
        let n=Number(numero.value)
        tabuada.innerHTML=''
        for(let cont=1; cont<=10;cont++){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}` 
            item.value = `tab${cont}`
            tabuada.appendChild(item)
        }
    }
}
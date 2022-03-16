//var travabtn=false
function verificar(){
    var data =new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var reseta = document.getElementById('rst')
    if(fano.value.length==0||fano.value > ano){
        window.alert('verifique os dados e tente novamente!')
    } else {        //if(!travabtn) {
                    //travabtn=true
        var fsex    = document.getElementsByName('radsex')
        var idade   = ano - Number(fano.value)
        var genero  = ''
        var img     = document.createElement('img')
        var reset   = document.createElement('input')
        if(fsex[0].checked)
        {
            genero='Homem'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src','criancahomem.jpg')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','jovemhomem.jpg')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','adultohomem.jpg')
            }else{
                //Idoso
                img.setAttribute('src','velhohomem.jpg')
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<10){
                //Criança
                img.setAttribute('src','criancamulher.jpg')
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','jovemmulher.jpg')
            }else if(idade<50){
                //Adulto
                img.setAttribute('src','adultamulher.jpg')
            }else{
                //Idoso
                img.setAttribute('src','velhamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos</br>`
        img.setAttribute('style',"border-radius: 50%")
        img.setAttribute('width',"250")
        img.setAttribute('height',"250")
        img.setAttribute('alt',"Foto da Pessoa")
        res.appendChild(img)
        
        document.getElementById('verificar').setAttribute('onclick',null)

        reset.setAttribute('type','button')
        reset.setAttribute('value','Fazer novamente')
        reset.setAttribute('onclick','reseta()')
        reseta.appendChild(reset)
    }
}
function reseta(){
    //travabtn=false
    var imgpai  = document.getElementById('res')
    var img     = document.getElementsByTagName('img')[0]
    var d       = imgpai.removeChild(img)
    var botpai  = document.getElementById('rst')
    var btn     = botpai.getElementsByTagName('input')[0]
    var removebt= botpai.removeChild(btn)
    document.getElementById('res').innerHTML= 'Preencha os dados acima para ver o resultado!'
    document.getElementById('verificar').setAttribute('onclick','verificar()')
}
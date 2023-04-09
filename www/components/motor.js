
const btnCompra = document.getElementById('comprar');
const btnNew = document.getElementById('new');
const btnClose = document.getElementById('close');
const btnCancelar = document.getElementById('cancel');
const btnConfirmar = document.getElementById('confirm');
const modalTabela = document.getElementById('modal-tabela');
const BTNcloseTabela = document.getElementById('closeTabela');
const BTNtbPrec = document.getElementById('tbPrec');

btnCompra.addEventListener('click', ()=>{

    var placa = document.getElementById('placa').value;
    var tempo = document.getElementById('tempo').value;
    var categoria = document.getElementById('categoria').value;
    var resultado = categoria*tempo;
    var modalText = document.getElementById('modal-text');
    const modalErro = document.getElementById('modal-erro');
    const modalCompra = document.getElementById('modal-compra');
    const timerShow = document.getElementById('tempoShow');
    var placaText = document.getElementById('placaText')
    var horas = document.getElementById('horasText');
    var categoriaText = document.getElementById('modeloText');
    var valorText = document.getElementById('valorText');
    var categoriaString;

    if(placa === ""){
           modalErro.classList.replace('inactive', 'active');
           modalText.innerText = "Insira uma placa valida";
           btnClose.addEventListener('click', ()=>{
            modalErro.classList.replace('active', 'inactive');
        })
    }
    else if(placa.length < 7 || placa.length > 7){
        modalErro.classList.replace('inactive', 'active');
        modalText.innerText = "Insira uma placa valida (7 digitos)";
        btnClose.addEventListener('click', ()=>{
            modalErro.classList.replace('active', 'inactive');
        })
    }
    else if(tempo === "Selecione" && categoria === "Selecione"){
        modalErro.classList.replace('inactive', 'active');
        modalText.innerText = "Insira valores válidos";
        btnClose.addEventListener('click', ()=>{
            modalErro.classList.replace('active', 'inactive');
        })
    }
    else if(tempo === "Selecione"){
        modalErro.classList.replace('inactive', 'active');
        modalText.innerText = "Insira um tempo valido";
        btnClose.addEventListener('click', ()=>{
            modalErro.classList.replace('active', 'inactive');
        })
    }
    else if(categoria === "Selecione"){
        modalErro.classList.replace('inactive', 'active');
        modalText.innerText = "Insira uma categoria valida";
        btnClose.addEventListener('click', ()=>{
            modalErro.classList.replace('active', 'inactive');
        })
    }
    else{

        modalCompra.classList.replace('inactive', 'active');
        placaText.innerText = "Placa: "+ placa
        horas.innerText = "Tempo: " + tempo + " horas"
        categoriaText.innerText = "Categoria: " + Categorias(categoria, categoriaString);
        valorText.innerText = "Valor à pagar: R$"+ resultado.toFixed(2);
        btnConfirmar.addEventListener('click', ()=>{

            const hour = document.getElementById('tempo');
            let duration = parseInt(hour.value) * 60 * 60;
            display = document.getElementById('timer')
            timer(duration, display);
            btnCompra.classList.replace('active', 'inactive');
            modalCompra.classList.replace('inactive', 'active');
            timerShow.classList.replace('inactive', 'active');
            btnNew.classList.replace('inactive', 'active');
            modalCompra.classList.replace('active', 'inactive');
            BTNtbPrec.classList.replace('active', 'inactive');
        })

        btnCancelar.addEventListener('click', ()=>{
            modalCompra.classList.replace('active', 'inactive');
        })

    }



})

const timer = (duration, display) =>{
    let timer = duration;
    let hour;
    let interval = setInterval(() => {
        hours = Math.floor((timer / 60) / 60);
        minutes = Math.floor(timer / 60 - (hours * 60));
        seconds = Math.floor(timer % 60);
    
    
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
    

        display.innerHTML = `${hours}:${minutes}:${seconds}`;
    
        timer -= 1;
    

        if(timer < 0){
          display.innerHTML = 'ACABOU!!!';
          clearInterval(interval);
        }
      }, 1000);
    }

btnNew.addEventListener('click', ()=>{
    alert("Apagando todos os campos");
    location.href = "index.html"
    localStorage.clear();
})


function Categorias(categoria, categoriaString){
    if(categoria === '3.50'){
        return categoriaString = "SubCompacto"
    }
    else if(categoria === '4.00'){
        return categoriaString = "Compacto"
    }
    else if(categoria === '4.50'){
        return categoriaString = "Hatch"
    }
    else if(categoria === '5.00'){
        return categoriaString = "Sedan"
    }
    else if(categoria === '6.00'){
        return categoriaString = "SUV"
    }
    else{
        return categoriaString = "Pick-up"
    }
}

BTNcloseTabela.addEventListener('click',()=>{
    modalTabela.classList.replace('active', 'inactive');
})

BTNtbPrec.addEventListener('click', ()=>{
    modalTabela.classList.replace('inactive', 'active');
})
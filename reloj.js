const reloadTime = () => {
    let pDia = document.getElementById("dia");
    let pDiaMes = document.getElementById("diaMes");
    let pMes = document.getElementById("mes");
    let pYear = document.getElementById("year");
    
    let pHora = document.getElementById("hora");
    let pMin = document.getElementById("min");
    let pMomento = document.getElementById("momento");
    let pSeg = document.getElementById("seg");

    let tiempo = new Date();

    let diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    let dia = tiempo.getDay();
    let disMes = tiempo.getDate();
    let nameMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let mes = tiempo.getMonth();
    let year = tiempo.getFullYear();

    let hora = tiempo.getHours();
    let min = tiempo.getMinutes();
    let seg = tiempo.getSeconds();
    let momento = "AM";

    if(hora > 12){
        hora = hora - 12;
        momento = "PM";
    }
    if(hora < 10){
        hora = "0" + hora;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(seg < 10){
        seg = "0" + seg;
    }

    pDia.innerText = diaSemana[dia];

    pHora.innerText = hora;
    pMin.innerText = ": " + min;
    pMomento.innerText = momento;
    pSeg.innerText = seg;
    pDiaMes.innerText = disMes;
    pMes.innerText = nameMes[mes];
    pYear.innerText = "del " + year;
}
reloadTime();
let intervalo = setInterval(reloadTime,1000);
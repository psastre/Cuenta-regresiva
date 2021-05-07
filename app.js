const abrePanel = ()=>{
    document.querySelector(".form-container").style.display = "flex";

}




const countdown = ()=>{
    const ano =  document.getElementById("ano").value;
    const mes =  document.getElementById("mes").value;
    const dia =  document.getElementById("dia").value;
    const resultado = `${mes} ${dia}, ${ano} 00:00:00`;
    

    const countDate = new Date(resultado).getTime();
    

    const now = new Date().getTime();
    const gap = countDate - now;

    const  second = 1000;
    const minute = second * 60;
    const hour = minute*60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    
    document.querySelector(".dia").innerText = textDay;
    document.querySelector(".hora").innerText = textHour;
    document.querySelector(".minutos").innerText = textMinute;
    document.querySelector(".segundos").innerText = textSecond;

   

}

const Final =()=>{
    setInterval(countdown,1000)
    document.querySelector(".form-container").style.display = "none";
}
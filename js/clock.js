const clock = document.getElementById("clock");

const getclock = () =>{
    const date = new Date(); 
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours} : ${min}`;
}

getclock();

setInterval(getclock,60000);


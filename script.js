const endDate = "15 Septemeber 2022 10:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input');
function clock(){
    const end= new Date("15 September 2022 10:00 PM");
    const now = new Date();
    const diff = (end-now);
    inputs[0].value=(Math.floor(diff/1000/3600/24))
    inputs[1].value=(Math.floor(diff/1000/3600)%24)
    inputs[2].value=(Math.floor(diff/1000/60)%60)
    inputs[3].value=(Math.floor((diff/1000)%60));
}
clock();
setInterval(
    ()=>{
        clock();
    },
    1000
)

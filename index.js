const logDiv = document.getElementById('log')
const stateDiv = document.getElementById('state')
const startBtn =document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    startBtn.disabled = false;
    stopBtn.disabled = true;
    logDiv.textContent=``;
    stateDiv.textContent= ``;
})

function handleDown(e){
    logDiv.textContent = `Key ${e.key} is  down`
    stateDiv.textContent = `Key is Down`

}

function handleUp(e){
    logDiv.textContent = `Key  ${e.key} is Up`
    stateDiv.textContent = `Key is Up`
}
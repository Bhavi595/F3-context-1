const setbtn = document.getElementById("Set-time-btn");
const allTimerDiv = document.getElementById("All-Timer-Box");
const heading4 = document.getElementsByClassName("heading4")[0];
let allInput = document.getElementsByClassName("input");
let variable = 1;
setbtn.addEventListener("click", newTimerCreate);


function newTimerCreate() {
  let newtimer = document.createElement("div");
  newtimer.id = "timetaker";
  let newID = `id${variable}`;
  variable++;
  let totalMinisecond = 0;
  totalMinisecond  = allInput[0].value*60*60*1000 +  allInput[1].value*60*1000 + allInput[2].value*1000;
  newtimer.innerHTML = `<h3 class="heading3">Time left :</h3>
    <div id=${newID} class="Timertext">
        
    </div>
    <button id="Set-time-btn" onclick="DeleteTimerFunction(this)">Delete</button>
    `;

  allTimerDiv.appendChild(newtimer);
 
 heading4.style.display="none";
//  console.log(totalMinisecond);

 for(let i = 0; i<allInput.length;i++){
    allInput[i].value = "";
 }

   let intervalid =  setInterval(()=>{
    totalMinisecond = totalMinisecond-1000;
     let timer = document.getElementById(newID);
     let Hour = parseInt(totalMinisecond/3600000);
     let mint = parseInt(totalMinisecond%3600000/60000);
     let sec = parseInt(totalMinisecond%3600000%60000/1000)
     timer.innerText = `${Hour}HH: ${mint}MM : ${sec}SS`;
     if(Hour===0&&mint===0&&sec===0){
        clearInterval(intervalid);
        // .remove();
        // continous here 
        

     }
 
 }, 1000);
}

// function StartTimer
// Delete timer function 

function DeleteTimerFunction(Timerdeletebtn){  //here we pass this insde the function as
                                              //parameter this give the address where event is occer
    Timerdeletebtn.parentNode.remove();
    // console.log(allTimerDiv.childNodes);

    if(allTimerDiv.childNodes.length===1){  //When all card is reomove headding4 is come back
        
    heading4.style.display="block"

    }

}

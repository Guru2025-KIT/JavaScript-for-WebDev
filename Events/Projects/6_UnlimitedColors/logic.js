//Generate random hex color  #1212AB
function generateColor(){
  const hex='0123456789ABCDEF';
  let color='#';
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}

let IntervalId;
const startChangingColor= function (){
    if(!IntervalId){
      IntervalId=setInterval(changeBGColor,500);
    }

    function changeBGColor(){
        document.querySelector('body').style.backgroundColor=generateColor();
        console.log(generateColor())
    }
}

const stopChangingColor= function (){

  clearInterval(IntervalId);
  IntervalId=null;
}

document.querySelector('#start').addEventListener('click',()=>{
  startChangingColor();
})

document.querySelector('#stop').addEventListener('click',()=>{
  stopChangingColor();
})


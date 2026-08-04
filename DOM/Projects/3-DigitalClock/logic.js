const clock=document.getElementById('clock')

setInterval(function(){
          const date=new Date();
          clock.innerHTML=date.toLocaleTimeString();
          clock.style.color='black'
      },1000);
const body=document.querySelector('body');
const buttons=document.querySelectorAll('.button');

buttons.forEach((button)=> {
        button.addEventListener('click',function (e){
            switch(e.target.id){
            
                case 'grey':
                    body.style.backgroundColor=e.target.id;
                    break;
                
                case 'white':
                    body.style.backgroundColor=e.target.id;
                    break;

                case 'blue':
                    body.style.backgroundColor=e.target.id;
                    break;

                case 'yellow':
                    body.style.backgroundColor=e.target.id;
                    break;

                case 'pink':
                    body.style.backgroundColor=e.target.id;
                    break;
            
                case 'red':
                    body.style.backgroundColor=e.target.id;
                    break;

                case 'black':
                    body.style.backgroundColor=e.target.id;
                    break;
                
                
                
            }
  })
});


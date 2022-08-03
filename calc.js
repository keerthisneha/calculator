let str='';
let a=document.querySelectorAll('.num');
console.log(a)
Array.from(a).forEach((num) => {
     num.addEventListener('click',(e) => {
          e.target.innerHTML;
          if(e.target.innerHTML=='='){

               if(str.includes('x')){
                    str = str.replace('x','*')
               }
               else if(str.includes('%')){
                    str=str.replace('%','/')
               }
               
               str=eval(str) ;
               document.querySelector('#res').value=str; 
          }
          else if(e.target.innerHTML=='AC'){
               str="";
               document.querySelector('#res').value=str;
          }
          else{
               str=str+e.target.innerHTML;
               document.querySelector('#res').value=str;
          }
     })
})



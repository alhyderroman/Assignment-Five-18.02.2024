function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');

}
function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');

}
let count=0;
let seat=40;
const allBtn=document.getElementsByClassName('seat-btn');
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        
        count=count+1;
        seat=seat-1;
       
        document.getElementById('seat-selected').innerText=count;
        
        document.getElementById('current-seat').innerText=seat;


    })
  
   };



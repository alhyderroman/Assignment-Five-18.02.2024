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
let total=0;
const allBtn=document.getElementsByClassName('seat-btn');
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        if(count>=4 ||btn.classList.contains('bg-[#1DD100]')){
   
            return;
           }
        
       
       
        count=count+1;
        seat=seat-1;
        total=total+550;
       
        document.getElementById('seat-selected').innerText=count;
        
        document.getElementById('current-seat').innerText=seat;
        
        //adding rows
       
    
     const tBody=document.getElementById('tbody');
     const tr=document.createElement('tr');
   const td1=document.createElement('td');
   

   td1.innerText=event.target.innerText;
   tr.appendChild(td1);
   const td2=document.createElement('td');
   td2.innerText='Business';
   tr.appendChild(td2);
   const td3=document.createElement('td');
   td3.innerText='500';
   tr.appendChild(td3);
   const totalPrice=document.getElementById('total-price');
   tBody.insertBefore(tr,totalPrice);
   console.log(tBody);

   //adding color
btn.classList.add('bg-[#1DD100]');
       
 //showing total price
 document.getElementById('total').innerText=total;
 // button disable

//  showing grand total price
document.getElementById('grand-total').innerText=total;
 

    })
   
  
   };

   function couponApply(){
    const couponValue=document.getElementById('coupon-value').value;
    const grandTotalElement=document.getElementById('grand-total');
    const grandTotalText=grandTotalElement.innerText;
    let grandTotal=parseInt(grandTotalText);
    
    
    if(couponValue=='NEW15' ){
      const grandTotalnew=grandTotal-grandTotal*.15;
       document.getElementById('grand-total').innerText=grandTotalnew;
       const coupon=document.getElementById('coupon-row');
       coupon.classList.add('hidden');


    }
    else if(couponValue=='Couple 20'){
        
            const grandTotalnew=grandTotal-grandTotal*.20;
             document.getElementById('grand-total').innerText=grandTotalnew;
             const coupon=document.getElementById('coupon-row');
             coupon.classList.add('hidden'); 
    }
    else{
        window.alert('Your coupon is not valid');
    }
   };

      // next button condition
      const nextButton =document.getElementById('next-btn');
      const phone=document.getElementById('mobile-number');
      nextButton.disabled=true;

     
      phone.addEventListener('input',function(){
        for(const button of allBtn){
            button.addEventListener('click',function(){
                if(phone.value.length===11){
            
                    nextButton.disabled=false;
                  } 
            })
        }
      });
   
    //   continue button condition

    
   
   




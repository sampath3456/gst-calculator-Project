// let button=document.getElementById('button');
// button.addEventListener('click',()=>{
// window.location.href="bookingpages.html"
// });
 



let chickenBiriyani = document.getElementById("quantity1");
let VegBiriyani = document.getElementById("quantity2");
let chickenMandi = document.getElementById("quantity3");
let MuttonBiriyani = document.getElementById("quantity4");




let PrintBill=document.getElementById('bill-button');
PrintBill.addEventListener("click", function(){

  let CBiriyaniprices=document.getElementById("CBiriyaniprice")
  let q1=chickenBiriyani.value*150;
  CBiriyaniprices.textContent=q1;

  let VBiriyaniprices=document.getElementById("VBiriyaniprice")
  let q2=VegBiriyani.value*120;
  VBiriyaniprices.textContent= q2;

  let CMandiprices=document.getElementById("Chickenmandi")
  let q3=chickenMandi.value*300;
  CMandiprices.textContent=q3;

  let MBiriyaniprices=document.getElementById("MBiriyaniprice")
  let q4=MuttonBiriyani.value*250;
  MBiriyaniprices.textContent=q4;

  let BillWithoutGST=document.getElementById("BillWithoutGST")
  let gst=0.18
  BillWithoutGST.textContent=(q1+q2+q3+q4);
  let GStAmount=gst*(q1+q2+q3+q4);
  let GSt_Amount=document.getElementById("GSt_Amount");
  GSt_Amount.textContent=GStAmount;
  let FinalBill=document.getElementById("FinalBill");
  FinalBill.textContent=GStAmount+q1+q2+q3+q4;

})


  

   






function addDigit(x,y,carryF){
   const s = parseInt(x,10) + parseInt(y,10) + carryF;
   let val =0, carry =0;
   if (s === 3){
     val =1;
     carry =1;
   }else if(s === 2){
     carry=1;
   } else if(s === 1){
     val = 1;
   }
   return [val, carry]
}
function addBinary(str1,str2){
   let a = str2, b = str1;
   let res = '';
   let carryF = 0;
   for(let i = a.length -1; i >= 0; i--){
     let [val, carry] = addDigit(a[i],b[i], carryF);
     res = val + res;
     carryF = carry;
   }
   if(carryF){
     res = carryF + res;
   }
   return res;
}
console.log(addBinary("111", "010"));

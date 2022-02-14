const num = 200;
const findPrimes = (num = 10) => {
   const numArr = new Array(num + 1);
   numArr.fill(true);
   numArr[0] = numArr[1] = false;
   for (let i = 2; i <= Math.sqrt(num); i++) {
      for (let j = 2; i * j <= num; j++){
          numArr[i * j] = false;
      }
   }
   return numArr.reduce((acc, val, ind) => {
      if(val){
         return acc.concat(ind);
      }else{
         return acc;
      };
   },[]);
};
console.log(findPrimes(num));


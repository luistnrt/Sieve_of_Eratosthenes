export class sieve { 
   
   public static calculate_primes(num1: number): array { 
 
         const num = num1;
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

   }
}


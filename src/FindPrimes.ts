export class Sieve { 
   public static primeSieve(limit: number ) { 

       let arr: number[] = new Array(limit - 1)
       for (let i:number = 0; i < arr.length; i++) {
       arr[i] = i+2
       }
       for (let j:number = 0; j< arr.length; j++) {
       let checkLimit:number = arr[j] * arr[j]
       if (arr[j] != 0 && checkLimit < limit) {
       sievePrime(arr[j], j)
       }
       }
       function sievePrime(multipleOf:number, position:number) {
       for (let k:number = position; k < arr.length; k += multipleOf){
       if (arr[k] != 0 && arr[k] != multipleOf) {
       arr[k] = 0;
       }
       }
       }
       let arr2: number[] = [];
       for (let l:number = 0; l<arr.length; l++) {
       if (arr[l] != 0) {
       arr2.push(arr[l]);
       }
       }
       return arr2;
       }
}

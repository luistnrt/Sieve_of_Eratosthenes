# Sieve_of_Eratosthenes
A simple module to find all prime numbers below a certain given number. It is a deno implementation of the Sieve of Eratosthenes algorithm in typescript. 

In case any errors occur or code improvements should be built in, please contact me. Suggestions are welcome. 

## Functionality 
### Usage example Command line input ###
To run the usage example of the module input the following line into your Command prompt or terminal and run it.
```
deno run --allow-net https://deno.land/x/eratosthenes_sieve@v0.1/usageExample.ts
```

### Usage example Code ### 
To run the module as code input the 
```
import { Sieve } from "https://deno.land/x/eratosthenes_sieve@v0.1/mod.ts";

// Input your number into the function below. Alle primes untill that number will be shown.
console.log("Youre Primes are " + Sieve.primeSieve()) 
```

### Deno Test ###
To test the modul via Deno run the following code. 
```
deno run --allow-net "https://deno.land/x/eratosthenes_sieve@v0.1/src/FindPrimes_test.ts";
```

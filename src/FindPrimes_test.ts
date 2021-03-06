import { Sieve } from "./FindPrimes.ts"

import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

//for deno testing run this typescript code 
Deno.test("the module should give you the primes", async () => {
    assertEquals(Sieve.primeSieve(200), [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199]
    )

})

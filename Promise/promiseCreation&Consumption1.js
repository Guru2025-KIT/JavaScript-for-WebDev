/**
 * @file promiseCreation&Consumption1.js
 * @description Comprehensive study guide covering JavaScript Asynchronous Architecture.
 * This file demonstrates the lifecycle, states, creation patterns, and consumption methods 
 * of Promises, including modern Fetch API integration and Async/Await structural control.
 * 
 * @summary WHAT I LEARNED TODAY:
 * 
 * 1. THE PROMISE OBJECT & LIFECYCLE STATES:
 *    - A Promise is a proxy for a value not necessarily known when the promise is created.
 *    - It exists in one of three mutually exclusive states:
 *      * PENDING: Initial state, neither fulfilled nor rejected. Async operation is ongoing.
 *      * FULFILLED: Operation completed successfully. Triggers `resolve()` and `.then()`.
 *      * REJECTED: Operation failed. Triggers `reject()` and `.catch()`.
 *    - Once a Promise settles (Fulfilled or Rejected), its state is immutable (cannot change again).
 * 
 * 2. PROMISE CONSUMPTION ARCHITECTURE:
 *    - .then(): Registers handlers for fulfillment. Returning a value inside a `.then()` 
 *      implicitly wraps that value in a resolved Promise, enabling linear method chaining.
 *    - .catch(): Registers a handler for rejections. It catches errors from the executor or 
 *      any preceding `.then()` block, preventing script termination.
 *    - .finally(): Registers a callback that runs unconditionally after settlement. Used 
 *      exclusively for mandatory cleanup tasks (e.g., closing databases, stopping spinners).
 * 
 * 3. ASYNC / AWAIT SYNTACTIC SUGAR:
 *    - The `async` keyword defines an asynchronous function wrapper which returns a Promise.
 *    - The `await` keyword pauses execution context inside that specific function block 
 *      until the targeted Promise settles, making asynchronous flows look and read like synchronous code.
 *    - Replaces method chaining with traditional block-scoped `try/catch` error management.
 * 
 * 4. NATIVE FETCH ENGINE & NETWORK BASICS:
 *    - Node.js (v18+) and modern browsers natively support the global `fetch()` API.
 *    - `fetch()` returns a Promise that resolves to a HTTP `Response` object metadata stream.
 *    - It only rejects on true network failures (e.g., DNS loss, hardware disconnection). 
 *      HTTP errors like 404 or 500 still resolve successfully; check `response.ok` or `response.status` to verify.
 *    - Extracting body content requires a secondary asynchronous read phase via `response.json()`.
 */


// 1st Way: Standard Anonymous Promise
new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("Promise 1 Executing...");
    resolve();
  }, 1000);
}).then(function(){
  console.log("Promise 1 Consumed!");
});

// Second Way: Reference Storage & Data Chaining
const promiseTwo = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("\nExecuting Second Promise...");
    resolve({ User: "Guru", password: "GuruShinde123" });
  }, 5000);
});

promiseTwo
  .then(function(response){
    return response.User;
  })
  .then(function(user){
    console.log("User Name Got is: " + user);
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(function(){
    console.log("Always Executing Finally Block ....");
  });

// Third Way: Conditional Logic with Reject Path
new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // Change it to false for success
    if (!error) {
      resolve({ "ClgName": "KIT", Age: 22 });
    } else {
      reject("Error Occured While Collecting the Data...");
    }
  }, 3000);
})
  .then((response) => {
    return response.ClgName;
  })
  .then((clg) => {
    console.log("\nPromise 3 Executed Successfully! Clg Name Got is: " + clg);
  })
  .catch((error) => {
    console.log(`\nError Occured! ---> ${error}`);
  })
  .finally(() => {
    console.log("Ending the Task Now!");
  });

// 4th Promise: Now using Async and wait

const PromiseFour=new Promise(function(resolve,reject){
        setTimeout(()=>{
            let error=false;
            if(!error){
                resolve("\nDataBase Connection Established!");
            }else{
                reject("\nDataBase failed to Connect!");
            }
        },1000)
})

async function consumePromiseFour(){
    try{
        const data=await PromiseFour
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFour()


// fetch() Using async and await

async function consumeFetchPromise(){
    let data=await fetch("http://api.github.com/users/Guru2025-KIT")
    //console.log(data)
    data=await data.json();
    console.log(data);
}
consumeFetchPromise()

// fetch() Using then catch

fetch("http://api.github.com/users/dhanvantri37")
.then((response)=>{
    console.log(typeof response)
    console.log(response)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Done Fetch")
})
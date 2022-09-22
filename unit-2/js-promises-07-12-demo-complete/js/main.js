// Synchronous Function
function synchronous() {
  console.log("I m first");
  console.log("I m Second");
  console.log("I m Third");
}
//synchronous();

// Callback Example
function job1() {
  console.log("I m first");
}

function job2() {
  console.log("I m Second");
}

function job3() {
  console.log("I m Third");
}

function doJobsSynchronous() {
  job1();
  job2();
  job3();
}
//doJobsSynchronous();

// Asynchronous Function
// setTimeout
function doJobsAsynchronous() {
  setTimeout(job1, 1000);
  setTimeout(job2, 1000);
  setTimeout(job3, 1000);
}

//doJobsAsynchronous();

// Aynchronus in Parallel
function jobsInParallel() {
  console.log("This is Job 1");
  setTimeout(() => {
    console.log("This is Job 2");
    setTimeout(() => {
      console.log("This is Job 3");
      setTimeout(() => {
        console.log("This is Job 4");
        setTimeout(() => {
          console.log("This is Job 5");
          setTimeout(() => {
            console.log("This is Job 6");
            setTimeout(() => {
              console.log("This is Job 7");
              setTimeout(() => {
                console.log("This is Job 8");
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 5000);
  }, 5000);
}

//jobsInParallel();

// Callbacks

/////////////////
//// Promise ////
/////////////////

// Producer
const promise1 = new Promise((resolve, reject) => {
  console.log("I m in Promise");
  error = true;
  // Rejected
  if (error) {
    reject("I m in Rejected as an Error occured");
  }
  // Fullfilled
  resolve("I m Resolved!");
});
console.log(promise1);

// Consumer
// promise1.then( fun1, fun2);

// Way 1 : Error Handling
/*promise1.then(
  (result) => {
    console.log("Consumer : ", result);
  },
  (error) => {
    console.log("Consumer received an error: ", error);
  },
);*/

// Way 2 : Error Handling
// promise1.then().catch();

/*promise1
  .then((result) => {
    console.log("Consumer : ", result);
  })
  .catch((error) => {
    console.log("Consumer received an error: ", error);
  });
*/
// Convert Call back hell into Promise
// Stretch Assignment : Convert the doJobsAsynchronous() , jobsInParallel() into Promise

// Promise Chaining
// promise1.then().then().then(). ...

const promise2 = new Promise((resolve, reject) => {
  resolve("I have completed the job");
});

promise2
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result1) => {
    console.log(result1);
    return result1;
  })
  .then((result2) => {
    console.log(result2);
    return result2;
  })
  .then((result3) => {
    console.log(result3);
    return result3;
  })
  .then((result4) => {
    console.log(result4);
    return result4;
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.all
// Food Ordering System(DoorDash)
// Place an order of 3 food items
// Prepare those items
// Send out message to the customer
const orderFood = new Promise((resolve, reject) => {
  // Fullfilled
  resolve("I m ordered food!");
});

const prepareFood = new Promise((resolve, reject) => {
  
  resolve("I m prepared food!");
});

const sendNotification = new Promise((resolve, reject) => {
  resolve("Food Ready!");
});
Promise.all([orderFood, prepareFood, sendNotification]).then( (values) => {console.log(values)} );



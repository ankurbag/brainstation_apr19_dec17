function synchronous() {
  console.log("First");
  console.log("Second");
  console.log("Third");
}

function asynchronous() {
  console.log("First");
  setTimeout(function () {
    console.log("Second");
  }, 1000);

  console.log("Third");
}

// Callbacks
function job(name) {
  console.log(`${name} : First Job`);
  setTimeout(
    function () {
      console.log(`${name} : Second Job`);
      setTimeout(
        function () {
          console.log(`${name} : Third Job`);
          setTimeout(
            function () {
              console.log(`${name} : Fourth Job`);
            },
            1000,
            name
          );
        },
        1000,
        name
      );
    },
    1000,
    name
  );
}

job("Ankur");

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();

const doJob1 = (name, callback) => {
  result = name + " completed Job 1!";
  callback(result);
};

const doJob2 = (name, callback) => {
  result = name + " completed Job 2!";
  callback(result);
};

const doJob3 = (name, callback) => {
  result = name + " completed Job 3!";
  callback(result);
};

const doJobs = (name) => {
  doJob1(name, (result1) => {
    doJob2(result1, (result2) => {
      doJob3(result2, (result3) => {
        console.log(result3);
      });
    });
  });
};
doJobs("Ankur");

/////////////////
//// Promise ////
/////////////////

// myPromise = new Promise((resolve, reject) => {
//     resolve('In Resolve!');
// });
const promise1 = new Promise((resolve, reject) => {
  console.log("Hello World!");
});
console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
  resolve("REsolve!");
});
console.log(promise2);

const promise3 = new Promise((resolve, reject) => {
  reject("Rejected!");
});
console.log(promise3);

const myPromise = new Promise((resolve, reject) => {
  let error = true;
  if (error) {
    reject("Error occured");
  }
  setTimeout(() => {
    resolve("Asynchronous");
  }, 2000);
});
console.log(myPromise);

// To access data from resolve
myPromise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);

// Food Ordering System(DoorDash)
// Place an order of 3 food items
// Prepare those items
// Send out message to the customer

const orderFood = new Promise((resolve, reject) => {
  resolve("Food is ordered");
});

const payBill = new Promise((resolve, reject) => {
  resolve("Bill is paid");
});

const foodDelivered = new Promise((resolve, reject) => {
  resolve("Food is Delivered");
});

Promise.all([orderFood, payBill, foodDelivered]).then((values) => {console.log(values);});

const promiseN = new Promise((resolve, reject) => {
    if(error){
        reject('error')
    }
    setTimeout(()=>{
        resolve('Job done');
    }, 5000);
    
  });
  promiseN.then( (result)=> {
    console.log(result);

  }).then((result)=> {
    console.log(result);

  });


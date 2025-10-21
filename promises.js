// // Promises

// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 10);

//     setTimeout(() => {
//         if (randomNumber < 4) {
//             resolve('Well done! You guessed it right!')
//         } else {
//             reject('Oops! You guessed it wrong!')
//         }
//     }, 2000);
// });

// console.log(
//     promise.then((msg) => {
//         console.log(msg)
//     }).catch((err) => {
//         console.log(err);
//     })
// );

const promise_1 = new Promise((resolve, reject) => {
  resolve("Well done, Promise_1!");
});

const promise_2 = new Promise((resolve, reject) => {
  resolve("Well done, Promise_2!");
});

const promise_3 = new Promise((resolve, reject) => {
  reject("Failed, Promise_3!");
});

// correct chaining
promise_1
  .then((value) => {
    console.log(value);
    return promise_2;
  })
  .then((value) => {
    console.log(value);
    return promise_3;
  })
  .catch((error) => {
    console.log(error);
  });

// wrong chaining

promise_1.then((value) => {
  console.log(value);
  promise_2.then((data) => {
    console.log(data);
    promise_3
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// also correct chaining
promise_1
  .then((promise_2) => {
    console.log(promise_2);
  })
  .then((promise_3) => {
    console.log(promise_3);
  })
  .catch((err) => {
    console.log(err);
  });

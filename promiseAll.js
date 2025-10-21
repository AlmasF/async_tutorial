const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One Resolved!')
    }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Two Resolved!')
    }, 5000);
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise Three Rejected!')
    }, 2000);
})

Promise.all([promiseOne, promiseTwo, promiseThree])
.then((data) => console.log(data[0], data[1], data[2]))
.catch((err) => console.log(err));
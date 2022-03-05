let count = 0;

const myfun = () => {
    // let count = 1
    console.log(++count);

}

// myfun();

const myinterval = setInterval(myfun, 1000)

setTimeout(function () {
    clearInterval(myinterval)
}, 5000)


// const finish = setTimeout(myfun, 10000)


// const stop = () => {
//     clearInterval(finish)
// }
// stop();






// // //

// // async function asyncFunction1() {
// //   console.log("Start of asyncFunction1"); // 同步代碼

// //   await Promise.resolve().then(() => {
// //     console.log("Promise 1 in asyncFunction1"); // 微任務
// //   });

// //   console.log("Sync 1 in asyncFunction1"); // 同步代碼（await 之後）

// //   await asyncFunction2(); // 調用另外一個 async 函數

// //   console.log("End of asyncFunction1"); // 同步代碼（await 之後）
// // }

// // async function asyncFunction2() {
// //   console.log("Start of asyncFunction2"); // 同步代碼

// //   await new Promise((resolve) => {
// //     console.log("Sync 1 in asyncFunction2"); // 同步代碼
// //     setTimeout(() => {
// //       console.log("Timeout in asyncFunction2"); // 宏任務
// //     }, 0);
// //     resolve();
// //   });

// //   console.log("End of asyncFunction2"); // 同步代碼
// // }

// // console.log("Start"); // 同步代碼

// // asyncFunction1(); // 調用 asyncFunction1

// // Promise.resolve().then(() => {
// //   console.log("Promise in main"); // 微任務
// // });

// // setTimeout(() => {
// //   console.log("Timeout in main"); // 宏任務
// // }, 0);

// // setTimeout(() => {
// //   console.log("Timeout 2 in main"); // 宏任務
// // }, 0);

// // console.log("End"); // 同步代碼
// async function asyncFunction1() {
//   console.log("Start of asyncFunction1");

//   await Promise.resolve().then(() => {
//     console.log("Promise 1 in asyncFunction1");
//   });

//   console.log("Sync 1 in asyncFunction1");

//   await asyncFunction2();

//   console.log("End of asyncFunction1");
// }

// async function asyncFunction2() {
//   console.log("Start of asyncFunction2");

//   await new Promise((resolve) => {
//     console.log("Sync 1 in asyncFunction2");
//     setTimeout(() => {
//       console.log("Timeout 1 in asyncFunction2");
//     }, 0);
//     resolve();
//   });

//   console.log("End of asyncFunction2");

//   await asyncFunction3();
// }

// async function asyncFunction3() {
//   console.log("Start of asyncFunction3");

//   await new Promise((resolve) => {
//     console.log("Sync 1 in asyncFunction3");
//     resolve();
//   }).then(() => {
//     console.log("Promise 1 in asyncFunction3");
//   });

//   console.log("End of asyncFunction3");

//   setTimeout(() => {
//     console.log("Timeout 2 in asyncFunction3");
//   }, 0);
// }

// console.log("Start");

// asyncFunction1();

// Promise.resolve().then(() => {
//   console.log("Promise 2 in main");
// });

// setTimeout(() => {
//   console.log("Timeout 1 in main");
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 2 in main");
// }, 0);

// console.log("End");

// setTimeout(() => {
//   console.log("Timeout 3 in main");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 3 in main");
// });

async function task1() {
  console.log("Start of task1");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task1");
      resolve();
    }, 0);
  });

  console.log("Sync 1 in task1");

  await task2();

  console.log("End of task1");
}

async function task2() {
  console.log("Start of task2");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task2");
      resolve();
    }, 100);
  });

  console.log("Sync 1 in task2");

  await task3();

  console.log("End of task2");
}

async function task3() {
  console.log("Start of task3");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task3");
      resolve();
    }, 150);
  });

  console.log("Sync 1 in task3");

  await task4();

  console.log("End of task3");
}

async function task4() {
  console.log("Start of task4");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task4");
      resolve();
    }, 200);
  });

  console.log("Sync 1 in task4");

  await task5();

  console.log("End of task4");
}

async function task5() {
  console.log("Start of task5");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task5");
      resolve();
    }, 250);
  });

  console.log("Sync 1 in task5");

  await task6();

  console.log("End of task5");
}

async function task6() {
  console.log("Start of task6");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task6");
      resolve();
    }, 300);
  });

  console.log("Sync 1 in task6");

  await task7();

  console.log("End of task6");
}

async function task7() {
  console.log("Start of task7");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task7");
      resolve();
    }, 350);
  });

  console.log("Sync 1 in task7");

  await task8();

  console.log("End of task7");
}

async function task8() {
  console.log("Start of task8");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task8");
      resolve();
    }, 400);
  });

  console.log("Sync 1 in task8");

  await task9();

  console.log("End of task8");
}

async function task9() {
  console.log("Start of task9");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task9");
      resolve();
    }, 450);
  });

  console.log("Sync 1 in task9");

  await task10();

  console.log("End of task9");
}

async function task10() {
  console.log("Start of task10");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timeout 1 in task10");
      resolve();
    }, 500);
  });

  console.log("Sync 1 in task10");

  await Promise.resolve().then(() => {
    console.log("Promise 1 in task10");
  });

  console.log("End of task10");
}

console.log("Start");

task1();

Promise.resolve().then(() => {
  console.log("Promise 2 in main");
});

setTimeout(() => {
  console.log("Timeout 1 in main");
}, 0);

setTimeout(() => {
  console.log("Timeout 2 in main");
}, 0);

console.log("End");

setTimeout(() => {
  console.log("Timeout 3 in main");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 3 in main");
});


//"Start"
//Start of task1
// End
// Promise 2 in main
// Promise 3 in main
// Timeout 1 in main
// Timeout 2 in main
// Timeout 3 in main
// Sync 1 in task1
// Start of task2
// Sync 1 in task2
// Start of task3
// Sync 1 in task3
// Start of task4
// Sync 1 in task4
// Start of task5
// Sync 1 in task5
// Start of task6
// Sync 1 in task6
// Start of task7
// Sync 1 in task7
// Start of task8
// Sync 1 in task8
// Start of task9
// Sync 1 in task9
//Start of task10
// Sync 1 in task10
// Promise 1 in task10
// End of task10
// End of task9
// End of task8
// End of task7
// End of task6
// End of task5
// End of task4
// End of task3
// End of task2
// End of task1
// Timeout 1 in task1
// "Timeout 1 in task2
// ...Timeout 1 in task10
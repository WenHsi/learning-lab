

// // const p = new Promise((resolve, reject) => {
// //     setTimeout(() => {resolve("!")}, 2000)
// // })

// // p.then(console.log).catch(console.log)

// async function p2() {
//     try {
//         const res = await new Promise((resolve, reject) => {
//             let item = {i: 0};
//             item.set = setInterval(() => {resolve(item);console.log(item.i += 1)}, 2000);
//         }).catch( e => {console.log(e)})

//         return res;
//     } catch (e) {
//         // console.log(e)
//     }
// }

// p2().then(
//     d=>{
//         d.ppp = "p"
//         clearInterval(d.set)
//        return d;
//     }

// ).then(console.log)


(function () {
    try {
      throw new Error();
    } catch (err) {
      var err = 5;
      var boo = 10;
      console.log(err);
    }
    //Guess what the output is here:
    console.log(err);
    console.log(boo);
  })();
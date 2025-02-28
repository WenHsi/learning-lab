// // Solve the below problems:

// // #1) Convert the below async function to remove the async keyword
// function fetchStarship() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await response.json();
  // console.log(data);
// }

// // --------- Answer:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((d) => d.json())
//   .then(console.log)

// // #2) ADVANCED: Remove the async function from the below wherever possible:
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];


//   const [users, posts, albums] = await Promise.all(
//     urls.map(async url => {
//       const result = await fetch(url);
//       const data = await result.json();
//       return data;
//     })
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);


// // --------- Answer:
// Promise.all(
//   urls.map((url) => fetch(url).then((resp) => resp.json()))
// ).then(data => {
//   console.log("users", data[0]);
//   console.log("posta", data[1]);
//   console.log("albums", data[2]);
// });

// // #3  ADVANCED: Try to run this piece of code just as a JS file not inside the browser dev tool, instea using this:
//https://glot.io/new/javascript
// const response = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await response.json();
// console.log(data);
// //!! It will actually give you an error: "await is only valid in async functions and the top level bodies of modules"
// //WHY?

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);

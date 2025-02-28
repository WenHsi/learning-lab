const button = document.querySelector("#news-joke");
const output = document.querySelector("#output");

async function hello() {
  try {
    let joke = await fetch("https://v2.jokeapi.dev/joke/Programming");
    let d = await joke.json();
    output.innerHTML += d.setup
      ? `<h3>${d.setup}</h3><p>${d.delivery}</p><br/>`
      : `<h3>${d.joke}</h3><br/>`;
  } catch (e) {
    console.log(e);
  }
}
button.addEventListener("click", () => {
  hello();
});

function return100() {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

async function show() {
  console.log(await return100());
}

show();

const pokemons = [
  { name: "bulbasaur", type: "grass" },
  { name: "blastoise", type: "water" },
  { name: "charmander", type: "fire" },
  { name: "ivysaur", type: "grass" },
  { name: "charmeleon", type: "fire" },
  { name: "charizard", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "venusaur", type: "grass" },
  { name: "wartortle", type: "water" },
  { name: "pikachu", type: "electric" },
];

Object.prototype.groupBy = (arr, fn) => {
  const map = {};
  for (const i of arr) {
    const property = fn(i);
    if (!map[property]) {
      map[property] = [];
    }
    map[property].push(i);
  }
  return map;
};

const result = Object.groupBy(pokemons, (i) => {
  return i.type;
});

console.log(result);

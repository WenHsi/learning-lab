
const aaa = "AAA";

function sayHi(name) {
  if (!name) {
    throw new Error("錯誤");
  }
  return `${name} 早安`;
}

function sum(a = 1, b = 2) {
  return a + b;
}

function required() {
  throw new Error("錯誤");
}

function sum2(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}

const obj = { a: 10, b: 20 };
const newObj = Object.assign({}, obj);
const new2Obj = { ...obj };

const hoverVideo = {
  name: "kevin",
  isMarry: false,
  age: 30,
  sayHi() {
    return `Hi ${this.name}`;
  },
  isSleep: false,
};

class Player {
  constructor(name, sex, age) {
    this._name = name;
    this._sex = sex;
    this._age = age;
  }
  show() {
    return `${this.name} 的性別是： ${this.sex}`;
  }

  static info() {
    return "這是一個球員類別，您可以使用它建立自己的球員。";
  }
  info() {
    return "這是一個球員類別，您可以使用它建立自己的球員。";
  }

  get age() {
    return this._age;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

class Player1 {
  constructor(name = "ooo", age) {
    this._name = name; // 私有屬性
    this.age = age;
  }

  // 使用 set 驗證值
  // set name(value) {
  //     if (value.length > 0) {
  //         this._name = value;
  //     } else {
  //         console.error("Name cannot be empty!");
  //     }
  // }

  // 使用 get 讀取值
  get pname() {
    return `名字是：${this._name}`;
  }
}

class P extends Player1 {
  constructor(name = "kkk", age, a) {
    super(name, age);
    this._name = name;
    this._age = age;
    this._a = a;
  }

  info() {
    return `名字是：${this._name}, A 是：${this._a}`;
  }
}

// var s ="eeee"
function findName3() {
  var b = "Kevin";

  findName();
  // console.log(aaaas);
  var aaaas = 111;
  function findName() {
    // var s
  }
}

function findName2() {
  var b = "Kevin";
  findName3();
}

{
  {
    {
      {
        {
          {
            {
              {
                {
                  {
                    {
                      {
                        {
                          {
                            {
                              findName2();
                              {
                                var qqq = "qqa";
                              }
                              function loop() {
                                for (var i = 0; i < 5; i++) {
                                  console.log(i);
                                }
                                console.log("Final", i);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// loop()

// console.log(qqq)

const obj11 = {
  name: "kevin",
  sing: function () {
    console.log("a", this);
    var anotherFunc = function () {
      return this;
    };
    return anotherFunc.bind(this)();
  },
};
// console.log(obj1.sing().sing().sing().sing().sing().sing().name)

// const arr = [30,39,14,0,1];

// function s(...arr) {

//     console.log(arr)
// }
// s.apply(s, arr)

// const array = [1,2,3];

// function getMaxNumber(arr) {
//   //code here
//   return Math.max(...arr)
// }
// console.log(getMaxNumber(array) /* should return 3*/)

// const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);

// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

// const arr = [1,2,3];
// const oobj = {
//     q: "11",
//     1: "22",
//     2: "33",
// }

// console.log(oobj[1])

// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// // var eq = user1 == user2;
// var eq = JSON.stringify(user1) === JSON.stringify(user2)
// console.log(eq)

// const number = 100
// const string = "Jay"
// let obj1 = {
//   value: "a"
// }
// let obj2 = {
//   value: "b"
// }
// let obj3 = obj2;

// function change(number, string, obj1, obj2) {
//     var number;
//     number = number * 10;
//     string = "Pete";
//     obj1 = obj2;
//     obj2.value = "c";
// }

// change(number, string, obj1, obj2);
// //Guess the outputs here before you run the code:
// console.log(number);
// console.log(string);
// console.log(obj1.value);

// 创建一个具有值和对自身的循环引用的对象。
const original = { name: "MDN" };
original.itself = original;

// 对它进行克隆
const clone = structuredClone(original);

console.assert(clone !== original, "???"); // 对象并不相同（标识不同）
console.assert(clone.name === "MDN"); // 它们具有相同的值
console.assert(clone.itself === clone); // 且保留了循环引用

// console.assert(
//   false,
//   "This is a failure message.",
//   { errorCode: 404 },
//   "additional context"
// );

/*
true
true
false
true
true
true
false
true
false
false
*/
// console.log(false == ""); // T
// console.log(false == []); // F
// console.log(false == {}); // F
// console.log("" == 0); //T
// console.log("" == []); //F
// console.log("" == []); //F
// console.log("" == {}); //F
// console.log(0 == []); // F

// console.log(0 == {}); // F
// console.log(0 == null); // T

// function woo (i,o){
//     console.log(i,o)
//     this.name="999"
//     console.log(this.name)
// }

// console.log(woo.bind(woo,9,8)())

// const bigArr = findData();
// console.log(bigArr(6999))
// console.log(bigArr(6999))
// console.log(bigArr(6999))
// console.log(bigArr(6999))

// function findData() {
//     const bigArr = new Array(7000).fill("😃");
//     console.log("create!")
//     return (index) => bigArr[index];

// }
// let view;

// function initialize() {
//     if(view) return;
//         view = "🌁";
//         console.log("view has been set!");
// }

// initialize();

// console.log(view)

// const arr = [1,2,3,4];
// for(let i = 0; i < arr.length; i++) {
//     setTimeout(function() {
//         console.log("index: " + i);
//     }, 3000);
// }

// const arr = [1,2,3,4];
// for(var i = 0; i < arr.length; i++) {
//     (function(io){
//         return setTimeout(function() {
//             console.log("index: " + io);
//         }, 3000);
//     })(i)
// }

// Date.prototype.lastYear = function() {return this.getFullYear() -1 };

// console.log(new Date("1990-10-10").lastYear())

// // Array.prototype.map
// Array.prototype.map = function() {
//     let result = [];
//     for (const i in this) {
//         result.push(this[i] + "🌁");
//     }
//     return result;
// }

// console.log([3,4,5].map())


// const basic = {
//     attack() {
//         return this.name + " attack somebody.";
//     },
//     sayAge() {
//         return this.age;
//     }
// }

// const person = function (name, age) {
//     const obj = Object.create(basic);
//     obj.name = name;
//     obj.age = age;
//     return obj;
// }

// const me = person("Kevin", 13);
// console.log(person.prototype)
// console.log(me.attack())
// console.log(me.sayAge())


// person.prototype.sayHi = function() {
//     return this.name + " say Hi~"
// }

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const kevin = new person("kevin", 13);
// console.log(kevin.age)
// console.log(kevin.name)
// console.log(person.prototype)
// console.log(kevin.__proto__)

// const obj1 = {
//     name: "keivn",
//     sayHi: function() {
//         this.name = "HA";
//         const a = () => {
//           return  this.name;
//         }
//         return a();
//     }
// }
// console.log(obj1.sayHi())

// const obj1 = {
//     name: "Kevin",
//     sayHi: ()=> {
//         console.log(this.name);
//     },
// };
// obj1.sayHi();

// class Person {
//     constructor(name){
//         this.name = name;
//     }
    
//     sayHi() {
//         const a = function () {
//             return this.name + " say Hi~";
//         }
//         return a.call(this)
//     }
// }

// const ka = new Person("ka");
// // console.log(ka.sayHi())
// console.log(ka.__proto__)
// console.log(Object.getPrototypeOf(ka));  // 會顯示 Person 的原型物件，並包括 sayHi 方法

class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
}

class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
    attack() {
        return super.attack();
        // return `I am the ${this.name} of ${this.type}, now bow down to me!`
    }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

console.log(victoria.attack())
 // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

  
// Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const purchaseItem = (user, item) => emptyCart(buyItem(appleTaxToItem(addItemToCart(Object.assign({}, user, item)))));
purchaseItem(user, {laptop: 200})

function addItemToCart(user) {
    const newUser = Object.assign({}, user);
    // newUser.cart.push(laptop);
    console.log(newUser)
    return newUser;
}

function appleTaxToItem(user) {
    const newUser = Object.assign({}, user);
    newUser.cart.forEach(items => {
        for(const n in items) {
            items[n] *= 1.03;
        }
    });
    return newUser;
}

function buyItem(user) {
    return user
}

function emptyCart(user) {
    return user
}

// My first Version
// function purchasesItem(name, price) {
//     return {
//         name,
//         price
//     }
// }

// const item1 = purchasesItem("pen", 300);
// const item2 = purchasesItem("app", 900);

// // 1. Add items to cart.
// user.cart.push(item1, item2);

// // 2. Add 3% tax to item in cart
// user.cart.forEach(i => {i.price *= 1.03})

// // 3. Buy item: cart --> purchases
// user.purchases = user.cart;

// // 4. Empty cart
// user.cart = [];

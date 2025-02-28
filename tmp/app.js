const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

   if (item) {
       setTimeout( removeItemsFromList, 0 );
       console.log(list.length)
   } else {
    console.log("End = "+list.length);
   }
};

removeItemsFromList();

console.log("End = "+ list.length);
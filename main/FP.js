Object.prototype.tab = function(fn) {
    fn(this);
    return this;
};

const fetchData = () => ["apple", "banana", "cherry"];
const toUpperCase = (str) => str.toUpperCase();
const addIndex = (str, i) => `${i + 1}. ${str}`;
// **函數組合**：處理數據流
const processList = (list) =>
    list.map(toUpperCase)
        .tab(console.log)
        .map(addIndex)
        .join("\n")
        .tab(console.log);

processList(fetchData())
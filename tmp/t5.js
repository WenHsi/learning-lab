// async function parallel() {
//     const a = () => _promisify("a", 100);
//     const b = () => _promisify("b", 5000);
//     const c = () => _promisify("c", 3000);

//     const promises = [a(), b(), c()];
//     const [output1] = await Promise.race(promises);
//     console.log(output1)

//     function _promisify (item, delay) {
//         return new Promise((resolve) =>
//             setTimeout(() =>
//                 resolve(item), delay));
//     }
// }
// parallel()

async function race() {
  const trackTimeoutId = [];
  const promise = _promiseTrackTimeoutId(trackTimeoutId);

  const item1 = promise(_basicItem("Kevin", 34, "Secrit"))(10);
  const item2 = promise(_basicItem("fwe", 0, " fee"))(20);
  const item3 = promise(_basicItem("wfge", null, undefined))(30);

  try {
    const promises = [item1, item2, item3];
    const raceResult = await Promise.race(promises);

    trackTimeoutId.forEach((d) => {
      clearTimeout(d);
      d = null;
    });
    trackTimeoutId.length === 0;

    return ["race", raceResult];
  } catch (error) {
    console.error("Error caught:", error.message);
  }
}
race().then(console.log);

async function parallel() {
  const ItemPromise = _promiseTrackTimeoutId();
  const promises = [
    ItemPromise(_basicItem("dwsdq", 0, 0))(10),
    ItemPromise(_basicItem("AAAefq", 0, 0))(),
    ItemPromise(_basicItem("BBBdwsdq", 0, 0))(3200),
  ];

  const result = await Promise.all(promises);
  return ["all", result];
}
parallel().then(console.log);

async function sequence() {
  const itemPromise = _promiseTrackTimeoutId();
  const itemPromise1 = await itemPromise(_basicItem("dwsdq", 0, 0))(1000);
  const itemPromise2 = await itemPromise(_basicItem("Adwsdq", 0, 0))(1000);
  const itemPromise3 = await itemPromise(_basicItem("Xdwsdq", 0, 0))(1000);

  return ["sequence", itemPromise1, itemPromise2, itemPromise3];
}
sequence().then(console.log);

function _promiseTrackTimeoutId(trackTimeoutId) {
  return (dataItem) => (delay) => _promisify(dataItem, delay, trackTimeoutId);
}

function _basicItem(name, age, hobby) {
  return Object.fromEntries(
    Object.entries({ name, age, hobby }).filter(
      ([_, value]) => value !== undefined && value !== null
    )
  );
}

function _promisify(item, delay, trackTimeoutId) {
  return new Promise((resolve) => {
    const timeoutId = setTimeout(() => {
      resolve(item);
    }, delay);
    if (Array.isArray(trackTimeoutId)) {
      trackTimeoutId.push(timeoutId);
    }
  });
}

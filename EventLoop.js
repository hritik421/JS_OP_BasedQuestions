console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});

Promise.resolve()
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  });

console.log('end');

//
start
end
nextTick
promise1
promise2
setTimeout

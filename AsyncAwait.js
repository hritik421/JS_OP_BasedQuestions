console.log('start');

async function mixedFunction() {
  console.log('inside mixedFunction');
  setTimeout(() => {
    console.log('setTimeout inside mixedFunction');
  }, 0);
  await Promise.resolve();
  console.log('after await inside mixedFunction');
}

mixedFunction();

setTimeout(() => {
  console.log('global setTimeout');
}, 0);

console.log('end');

// 
start
inside mixedFunction
end
after await inside mixedFunction
global setTimeout
setTimeout inside mixedFunction

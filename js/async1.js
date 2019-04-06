console.log('start');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  console.log(a);
  const b = await resolveAfter2Seconds(30);
  console.log(b);
  return x + a + b;
}

console.log(add1(10).then(value => console.log(value)));

console.log('end');

// async 가 붙으면 Promise 가 된다.
// async는 반드시 await와 같이 써야 된다.
// await 뒤에는 Promise가 온다.
// await 에서 Promise 가 끝날때 까지 기다리면서 Block 된다.
//        끝나면 결과를 리턴받는다.
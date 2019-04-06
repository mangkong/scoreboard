// 1. promise 개념 : 비동기를 순차적으로 처리한다.
// 2. promise를 만드는 2가지 방법과 그 차이점 알기
// 3. promise를 사용하는 방법

//1)promise 를 만드는 방법 : 생성자함수
new Promise(resolve => {
  setTimeout(()=>{
    console.log('async setTimeout1');
    resolve('success');
  }, 1000);
}).then(value=>{
  console.log(value);
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log('async setTimeout2');
      resolve('success');
    }, 1000);
  })
}).then(value => {
  console.log('success');
})
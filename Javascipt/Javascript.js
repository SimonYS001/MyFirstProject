// function interval(delay = 1000, callback) {
//   return new Promise((resolve) => {
//     let id = setInterval(() => {
//       callback(id, resolve)
//     }, delay)
//     console.log(id)
//   })
// }

// interval(100, (id, resolve) => {
//   //   console.log(12)
//   const div = document.querySelector('div')
//   let left = parseInt(window.getComputedStyle(div).left)
//   div.style.left = left + 10 + 'px'
//   if (left >= 200) {
//     clearInterval(id)
//     resolve(div)
//   }
// })
//   .then((div) => {
//     return interval(100, (id, resolve) => {
//       let width = parseInt(window.getComputedStyle(div).width)
//       div.style.width = width - 10 + 'px'
//       if (width <= 20) {
//         clearInterval(id)
//         resolve(div)
//       }
//     })
//   })
//   .then((div) => {
//     div.style.backgroundColor = 'red'
//   })
//   .then((div) => {})

const yangsu = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('第一个异步');
    reject('失败了');
  }, 1000);
}).catch((error) => {
  console.log(error);
});

const dongning = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步');
  }, 1000);
});

Promise.all([yangsu, dongning]).then((result) => {
  console.log(result);
});

new Promise(resolve => {
    console.log('promise');
    // resolve('resolve');
    reject('不成功');

}).then(reject => console.log(resolve), resolve => console.log('reject')
);
console.log('yangsu');


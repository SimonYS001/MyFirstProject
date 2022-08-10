"use strict";

"use strict"

// let obj = {
//     name: 'yangsu',
//     user: {
//         name: "internalName"
//     }
// };

// let hd = {
//     name: obj.name,
//     user: obj.user
// };
// hd.user.name = "dongning"

// console.log(JSON.stringify(obj, null, 2));
// console.log(JSON.stringify(hd, null, 2));


// let data = {
//     name: 'yangsu',
//     user: {
//         name: "internalName"
//     }
// };

// function copy(object) {
//     let res = {};
//     for (const key in object) {
//         res[key] = typeof object[key] == 'object' ? copy(object[key]) : object[key];
//     }
//     return res
// }

// let hd = copy(data)
// hd.user.name = "dongning"
// console.log(JSON.stringify(hd, null, 2));
// console.log(JSON.stringify(data, null, 2));

let data = {
    name: 'yangsu',
    user: {
        name: "internalName"
    },
    arr: []
};

function copy(obj) {
    let res = obj instanceof Array ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
        res[key] = typeof value == 'object' ? copy(value) : value;
    }
    return res
}

let hd = copy(data);
hd.user.name = "dongning";

hd.arr.push('abc');
console.log(JSON.stringify(hd, null, 2));
console.log(JSON.stringify(data, null, 2));




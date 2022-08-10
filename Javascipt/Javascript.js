"use strict";

// let ys = {
//     name: 'yangsu',
//     show: function () {
//         console.log(this.name);
//     }
// }

// let dn = {
//     name: 'dongning',
//     show: function () {
//         console.log(this.name);
//     }
// }




function user(name) {
    return {
        name,
        show: function () {
            console.log(this.name);
        }
    }
};

let ys = user("yangsu")
ys.show()
console.log(ys);


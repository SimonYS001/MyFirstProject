function Article() {
    this.url = "article/lists";
    this.get = function (param) {
        console.log(Object.keys(params).map(k => `${params[k]}`).join('&');
        console.log();)

    };
}

let a = new Article();
console.log(a.get({ id: 1, cat: 'js' }));

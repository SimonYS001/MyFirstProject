function interval(callback, delay = 100) {
    let id = setInterval(() => callback(id), delay);
}

interval(timeId => {
    const div = document.querySelector("body>div");
    let left = parseInt(window.getComputedStyle(div).left);
    div.style.left = left + 10 + 'px'

    // console.log(left);

})



console.log("yangsu");

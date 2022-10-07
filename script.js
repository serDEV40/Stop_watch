var hour = document.querySelector(".hr");
var mint = document.querySelector(".mt");
var secd = document.querySelector(".sc");
var startBttn = document.querySelector(".start");
var stopBttn = document.querySelector(".stop");
const resetBttn = document.querySelector(".reset");

var i = 7200 * 6;

startBttn.addEventListener("click", () => {
    this.item = setInterval(updateTime, 1000);
});

function updateTime() {
    i++;

    const sc = Math.floor(i % 60);
    secd.innerHTML = buyukKucuk(sc);

    const mt = Math.floor((i % 3600) / 60);
    mint.innerHTML = buyukKucuk(mt);

    const hr = Math.floor((i / 3600) % 24);
    hour.innerHTML = buyukKucuk(hr);

}

const buyukKucuk = (e) => {
    if (e < 10) {
        return "0" + e;
    } else {
        return e;
    }
}

stopBttn.addEventListener("click", () => {
    clearInterval(this.item);
})

resetBttn.addEventListener("click", () => {
    i = 0
    return i;
})
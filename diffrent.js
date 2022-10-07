var i = 0;
var topla = 0;

while (true) {
    i++;
    if (i < 255) {
        const prmpt = prompt("Lütfen Bir Sayı Gir");

        if (prmpt == "=") {
            alert(topla);
            break;
        } else {
            topla += parseInt(prmpt);
            console.log(topla);
        }
    } else {
        break;
    }

}

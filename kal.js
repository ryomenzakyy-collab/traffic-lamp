var tampilan = document.getElementById("tampilan");
var angkaTombol = document.getElementsByClassName("angka");
var operatorTombol = document.getElementsByClassName("operator");
var samaDenganTombol = document.getElementsByClassName("sama-dengan");
var resetTombol = document.getElementsByClassName("reset");

var sementara = "";
var operator = "";
var angka1 = null;
var angka2 = null;
var hasilBaru = false;

for (var i = 0; i < angkaTombol.length; i++) {
    angkaTombol[i].addEventListener("click", function () {
        if (hasilBaru) {
            sementara = "";
            hasilBaru = false;
        }

        sementara += this.textContent;
        tampilan.value = sementara;
    });
}

for (let index = 0; index < operatorTombol.length; index++) {
    operatorTombol[index].addEventListener("click", function () {
        if (sementara === "" && this.textContent !== "-") {
            return;
        }

        if (operator !== "") {
            return;
        }

        angka1 = parseFloat(sementara);
        operator = this.textContent;
        sementara = "";
        tampilan.value = operator;
    });
}


for (let k = 0; k < samaDenganTombol.length; k++) {
    samaDenganTombol[k].addEventListener("click", function () {
        if (operator === "" || sementara === "") {
            return;
        }

        angka2 = parseFloat(sementara);

        let hasil;

        if (operator === "+") {
            hasil = angka1 + angka2;
        } else if (operator === "-") {
            hasil = angka1 - angka2;
        } else if (operator === "x") {
            hasil = angka1 * angka2;
        } else if (operator === "/") {
            hasil = angka1 / angka2;
        } else {
            return;
        }

        tampilan.value = hasil;
        sementara = String(hasil);
        angka1 = null;
        angka2 = null;
        operator = "";
        hasilBaru = true;
    });
}


for (let r = 0; r < resetTombol.length; r++) {
    resetTombol[r].addEventListener("click", function () {
        tampilan.value = "";
        sementara = "";
        operator = "";
        angka1 = null;
        angka2 = null;
        hasilBaru = false;
    });
}
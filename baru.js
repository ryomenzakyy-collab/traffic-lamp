//pilih elemen
const lampuMerah = document.getElementById("lampu-merah")
const lampuKuning = document.getElementById("lampu-kuning")
const lampuHijau = document.getElementById("lampu-hijau")
const tombolMulai = document.getElementById("mulai")
const tombolBerhenti = document.getElementById("berhenti")
const btnMerah = document.getElementById("btn-merah")
const btnKuning = document.getElementById("btn-kuning")
const btnHijau = document.getElementById("btn-hijau")
const textStatus = document.getElementById("status")

let intervalOtomatis;
let indexLampu = 0;
const urutan = ["merah", "kuning", "hijau"];

function jalanOtomatis() {
    const warna = urutan [indexLampu]
    console.log(warna)
    nyalakanLampu(warna);
    indexLampu++;
    if (indexLampu >= urutan.length){
        indexLampu = 0;
    }
}

tombolMulai.addEventListener("click", function () {
    clearInterval(intervalOtomatis);
    indexLampu = 0;
    jalanOtomatis();
    intervalOtomatis = setInterval(jalanOtomatis, 1000);
})

tombolBerhenti.addEventListener("click", function () {
    clearInterval(intervalOtomatis);
    matikanSemua();
    textStatus.textContent = "Status : Mati"
})

//fungsi
function matikanSemua() {
    lampuMerah.classList.remove("nyala");
    lampuKuning.classList.remove("nyala");
    lampuHijau.classList.remove("nyala");
}


//nyalakan lampu
function nyalakanLampu(warna) {
    matikanSemua();

    switch (warna) {
        case "merah":
        lampuMerah.classList.add("nyala");
        textStatus.textContent="Status : merah - BERHENTI";
        //selesai
        break;
        
        case "kuning":
            lampuKuning.classList.add("nyala");
            textStatus.textContent="Status : kuning - HATI-HATI";
            break;
        case "hijau":
            lampuHijau.classList.add("nyala");
            textStatus.textContent = "Status: Hijau - JALAN";
            break;
    }
}

//tombol berhenti
tombolBerhenti.addEventListener("click", function () {
    matikanSemua();
    textStatus.textContent = "Status : Mati";
});

//tombl manual
btnMerah.addEventListener("click", function () {
    nyalakanLampu("merah");
});

btnKuning.addEventListener("click", function () {
    nyalakanLampu("kuning");
});

btnHijau.addEventListener("click", function () {
    nyalakanLampu("hijau");
});
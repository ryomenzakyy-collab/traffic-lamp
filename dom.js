const tombol = document.getElementById("tombol-ubah")

tombol.addEventListener("click",function(){
    const judul = document.getElementById("judul");

    const judulLama = "Belajar JavaScript";
    const judulBaru = "judulnya sudah diubah saat di klik";

    if (judul.textContent === judulLama) {
        judul.textContent = judulBaru;
        judul.style.color = "red";
    } else {
        judul.textContent = judulLama;
        judul.style.color = "blue"
    }
});
//debugging


const listSantri = document.getElementById
("daftar-santri");

const tombolTambah = document.getElementById
("tambah-santri");

let urutan = 1;

tombolTambah.addEventListener("click", function () {
        const santriBaru = document.createElement
        ("li");

        santriBaru.textContent = `Santri No. ${urutan}`;

        santriBaru.style.color = "blue"

        listSantri.appendChild(santriBaru);

        urutan++;

    });
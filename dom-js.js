const catatan = document.getElementsByClassName
("catatan");

console. log(catatan);

catatan[0].textContent = "Urutan ke satu"
catatan[1].textContent = "Urutan ke dua"
catatan[2].textContent = "Urutan ke tiga"

// catatan[1].style.color = "red";

//looping;

//for (let urutan = 0; urutan < catatan. length;
//urutan++) {
//catatan [urutan] . style. color = "red";
//if (urutan === 0) {
//catatan [urutan].textContent = "ini yang pertama"; } }

//looping
// for (inisial ; kondisi, dan iterasi)

for (let urutan = 0; urutan < catatan.length; urutan +=2) {
    catatan[urutan].style.color = "red"
}

//0 
//0+2
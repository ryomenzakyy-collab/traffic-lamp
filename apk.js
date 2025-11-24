//getElementById
//getElementByClass
//getElementsByTagName
//querySelector
//getElementByClass >>. menghasilkan array

let nilai = document.getElementsByTagName("span") //menghasilkan array
let nilaiSelector = document. querySelector( "span") //single object
console.log("getElementsByTagName", nilai);

// console. log("querySelector 1", nilaiSelector);

let title = document. querySelector("h2. info");
let nama = document. querySelector("div. info");
let alamat = document. querySelector("p span. info");

// let keterangan = document. querySelector("p>div> span. info");
// console. log("querySelector 2:title", title);
// console. log( "querySelector 3: nama", nama);
// console. log("querySelector 4:alamat", alamat);

title. textContent = "Judu Baru"
nama. textContent = "Nama Baru";
alamat.textContent = "Alamat Baru ";


for (let index = 0; index < nilai. length; index++) {
//nilai[index]. textContent = 'Ini index ke ${index}';
nilai[index]. innerHTML = '<strong><i>Ini index ke ${index}</i></strong>';}


// keterangan. textContent = "keterangan Baru";
//integer, string, object,
//loop
//for(inisiasi; kondisi; iterasi);
//inisiasi: mulai dari urutan ke berapa
//kondisi: mengecek kapan harus berjalan atau berhenti proses perputaran. jika true maka lanjut, jika false maka berhenti

//iterasi: bagaimana kita melangkahnya, apakha satu persatu ataukah dalam jumlah tertentu
// nilai[0].textContent = "Ini index ke 0"
// nilai[1].textContent = "Ini index ke 1"
// nilai[2].textContent = "Ini index ke 2"

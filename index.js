// let Tipeangka = 1;
// let Tipehuruf = 'Aku Sayang Kamu'
// let Tipenull = null
// let Tipeboolean = true

// if (Tipeangka == 1) {
//     console.log('Benar 1')
// } 

// if(Tipehuruf == 'Aku Sayang Kamu') {
//     console.log('Benar 2')
// } 

// if(Tipenull == null) {
//     console.log('Benar 3')
// } 

// if(Tipeboolean != false) {
//     console.log('Benar 4')
// }

let angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let angka_hasil = angka[1];

if (angka_hasil == 0) {
    for (let i = 0; i >= 0;) {
        console.log('Serangan Tipe 0 Sebanyak', i)
        i+=1
    }
} else if(angka_hasil == 1) {
    let i = 1;
    while (i) {
        console.log('Serangan Tipe 1 Sebanyak', i)
        i+=2
    }
} else {
    console.log('Maaf tidak ada angka yang sama , silahkan coba lagi')
}

// cek login
let userLogin = JSON.parse(localStorage.getItem("userLogin"))

if(!userLogin){
    alert("Silakan login terlebih dahulu")
    window.location.href = "../login.html"
}

// tampilkan nama user
document.getElementById("welcome").innerHTML =
"Selamat datang, " + userLogin.nama

// Key Pesan Per Akun
let keyPesanan = "pesanan_" + userLogin.ponsel

// fungsi pesan
function pesan(nama, harga){

let qty = prompt(
`Pesanan: ${nama}\nHarga: Rp ${harga}\n\nMasukkan jumlah (qty):`
)

if(qty === null) return
    qty = parseInt(qty)

if(isNaN(qty) || qty <= 0){
    alert("Qty tidak valid")
    return
}

let total = qty * harga
    alert(
    `Pesanan Berhasil!\n\nMenu: ${nama}\nHarga: Rp ${harga}\nQty: ${qty}\nTotal: Rp ${total}`
)

// ambil data pesanan per Akun dan disimpan ke localStorage Browser
let pesanan = JSON.parse(localStorage.getItem(keyPesanan)) || []

// simpan data
pesanan.push({
nama: nama,
harga: harga,
qty: qty,
total: total
})

// simpan ulang per Akun
localStorage.setItem(keyPesanan, JSON.stringify(pesanan))

// pindah kehalaman pesanan
window.location.href = "pesanan.html"
}

// logout
function logout(){
    localStorage.removeItem("userLogin")
    alert("Anda berhasil logout")
    window.location.href = "../login.html"
}
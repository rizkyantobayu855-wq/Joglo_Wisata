function register(){

let nama = document.getElementById("nama").value.trim()
let ponsel = document.getElementById("ponsel").value.trim()
let password = document.getElementById("password").value.trim()

// validasi kosong
if(!nama || !ponsel || !password){
    alert("Semua data harus diisi")
    return false
}

// ambil akun
let akun = JSON.parse(localStorage.getItem("akun")) || []

// cek duplikat ponsel
let cek = akun.find(user => user.ponsel === ponsel)

if(cek){
    alert("Nomor Ponsel sudah terdaftar")
    return false
}

// simpan user
let user = {
    nama,
    ponsel,
    password
}

akun.push(user)
localStorage.setItem("akun", JSON.stringify(akun))

alert("Registrasi berhasil")

//pindah ke halaman login setelah registrasi
window.location.href = "login.html"

return false
}
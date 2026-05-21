function login(event){

event.preventDefault()

let ponsel = document.getElementById("ponsel").value.trim()
let password = document.getElementById("password").value.trim()

// validasi kosong
if(!ponsel || !password){
    alert("Mobile Number and Password must be filled in")
    return
}

// ambil akun
let akun = JSON.parse(localStorage.getItem("akun")) || []

// cari user
let user = akun.find(u =>
    u.ponsel === ponsel && u.password === password
)

if(!user){
    alert("Incorrect Mobile Number or Password")
    return
}

// simpan session login
localStorage.setItem("userLogin", JSON.stringify(user))

alert("Login successful")

//pindahin ke halaman dashboard user
window.location.href = "user/dashboard.html"
}
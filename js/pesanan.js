// ambil user login
let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href = "../login.html"
}

// Key Pesanan per Akun
let keyPesanan = "pesanan_" + user.ponsel
let keyCheckout = "checkout_" + user.ponsel

// ambil data pesanan per akun
let data = JSON.parse(localStorage.getItem(keyPesanan)) || []
let tbody = document.getElementById("tabelPesanan")

function render(){
tbody.innerHTML = ""
let totalSemua = 0

data.forEach((item,index)=>{
        totalSemua += item.total
        tbody.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${item.nama}</td>
        <td>$ ${item.harga}</td>
        <td>$ ${item.qty}</td>
        <td>Rp ${item.total}</td>
        <td>
        <button onclick="hapus(${index})">Delete</button>
        </td>
        </tr>
        `
    })

    // Baris buat nampilin total
    tbody.innerHTML += `
    <tr>
        <td colspan="4"><b>Grand Total</b></td>
        <td colspan="2"><b>$ ${totalSemua}</b></td>
    </tr>
    `
}


// Fungsi hapus per item
function hapus(index){
let konfirmasi = confirm("Are you sure you want to delete this item?")
if(!konfirmasi) return

data.splice(index,1)

// Nyimpen per akun
localStorage.setItem(keyPesanan, JSON.stringify(data))
render()
}

// Fungsi Selesaikan Pesanan
function selesaikan(){
    if(data.length === 0){
    alert("No orders yet")
    return
}

let meja = prompt("Enter table number:")
if(!meja){
alert("Table number is mandatory")
return
}

// simpan checkout per akun
localStorage.setItem(keyCheckout, JSON.stringify({
meja: meja,
pesanan: data,
user: user.nama
}))

window.location.href = "pembayaran.html"
}


render()
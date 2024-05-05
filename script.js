//quy doi tien

var tiGiaDoiTien = 23000;
var moneyInput = +window.prompt("nhap vao so tien muon quy doi");
var moneyEl = document.getElementById("money");
console.log(moneyInput);
function quydoiTien(usd) {
	var soTienDuocQuyDoi = usd * tiGiaDoiTien;
	return soTienDuocQuyDoi;
}

var soTienDaDuocQuyDoi = quydoiTien(moneyInput);

moneyEl.innerHTML = `da quy doi ${moneyInput}usd thanh ${soTienDaDuocQuyDoi}vnd`;

//tinh dien tich, chu vi hinh chu nhat

function tinhDienTich(chieudai, chieurong) {
	return chieudai * chieurong;
}

function tinhChuVi(chieudai, chieurong) {
	return (chieudai + chieurong) * 2;
}

//tinh tong 2 ky so

function tinhTongHaiKySo(number) {
	var hangDonVi = number % 10;
	console.log(hangDonVi);
	var hangChuc = (number - hangDonVi) / 10;
	console.log(hangChuc);
	return hangDonVi + hangChuc;
}

var tong = tinhTongHaiKySo(69);
console.log(tong);

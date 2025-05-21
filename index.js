console.log("Bài tập Javascript");

// Bài 1: Tính tiền lương nhân viên
// Phân tích IPO
// Input: Số ngày làm việc (user cung cấp), lương 1 ngày (mặc định là 100.000 VNĐ)
// Process: Tính tổng lương = số ngày làm việc * lương 1 ngày
// Output: Trả kết quả
document.getElementById("btnTinhLuong").onclick = function () {
  console.log("Đã click vào nút Tính lương");
  const soNgayLam = Number(document.getElementById("soNgayLamViec").value);
  console.log(soNgayLam);
  let tienLuong = 0;
  tienLuong = soNgayLam * 100000;
  console.log(tienLuong);
  document.getElementById(
    "resBai1"
  ).innerHTML = `Tổng lương là ${tienLuong} VNĐ`;
  let tienLuongVNĐ = Number(tienLuong).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById(
    "resBai1"
  ).innerHTML = `Tổng lương là ${tienLuongVNĐ}`;
};

// Bài 2: Tính giá trị trung bình của 5 số thực
// Phân tích IPO
// Input: 5 số thực (user cung cấp)
// Process: Tính giá trị trung bình = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
// Output: Trả kết quả
document.getElementById("btnTinhTrungBinh").onclick = function () {
  console.log("Đã click vào nút Tính trung bình");
  const soThu1 = Number(document.getElementById("soThuc1").value);
  const soThu2 = Number(document.getElementById("soThuc2").value);
  const soThu3 = Number(document.getElementById("soThuc3").value);
  const soThu4 = Number(document.getElementById("soThuc4").value);
  const soThu5 = Number(document.getElementById("soThuc5").value);
  console.log(soThu1, soThu2, soThu3, soThu4, soThu5);
  let giaTriTrungBinh = 0;
  giaTriTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  console.log(giaTriTrungBinh);
  document.getElementById(
    "resBai2"
  ).innerHTML = `Giá trị trung bình là ${giaTriTrungBinh}`;
};

// Bài 3: Quy đổi tiền tệ USD sang VNĐ
// Phân tích IPO
// Input: Số USD cần quy đổi (user cung cấp), tỷ giá USD/VNĐ (mặc định là 23.500 VNĐ)
// Process: Tính số tiền VNĐ = số USD * tỷ giá USD/VNĐ
// Output: Trả kết quả
document.getElementById("btnQuyDoi").onclick = function () {
  console.log("Đã click vào nút Quy đổi");
  const soUSD = Number(document.getElementById("soUSD").value);
  console.log(soUSD);
  // Kiểm tra nhập liệu hợp lệ
  if (isNaN(soUSD) || soUSD <= 0) {
    document.getElementById("resBai3").innerHTML =
      "Vui lòng nhập số USD hợp lệ (lớn hơn 0)";
    return;
  }
  let soVND = 0;
  soVND = soUSD * 23500;
  console.log(soVND);
  document.getElementById(
    "resBai3"
  ).innerHTML = `Số tiền quy đổi là ${soVND} VNĐ`;
  let soVNDVNĐ = Number(soVND).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById(
    "resBai3"
  ).innerHTML = `Số tiền quy đổi là ${soVNDVNĐ}`;
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Phân tích IPO
// Input: Chiều dài, chiều rộng (user cung cấp)
// Process: Tính diện tích = chiều dài * chiều rộng, chu vi = (chiều dài + chiều rộng) * 2
// Output: Trả kết quả
document.getElementById("btnTinhDienTichChuVi").onclick = function () {
  console.log("Đã click vào nút Tính diện tích, chu vi");
  const chieuDai = Number(document.getElementById("chieuDai").value);
  const chieuRong = Number(document.getElementById("chieuRong").value);
  console.log(chieuDai, chieuRong);
  // Kiểm tra tính hợp lệ
  if (isNaN(chieuDai) || isNaN(chieuRong) || chieuDai <= 0 || chieuRong <= 0) {
    document.getElementById("resBai4").innerHTML =
      "Vui lòng nhập chiều dài và chiều rộng hợp lệ (lớn hơn 0)";
    return;
  }
  let dienTich = 0;
  let chuVi = 0;
  dienTich = chieuDai * chieuRong;
  chuVi = (chieuDai + chieuRong) * 2;
  console.log(dienTich, chuVi);
  document.getElementById(
    "resBai4"
  ).innerHTML = `Diện tích là ${dienTich}, chu vi là ${chuVi}`;
};

// Bài 5: Tính tổng 2 ký số
// Phân tích IPO
// Input: Số có 2 chữ số (user cung cấp)
// Process:
// 1. Tách số hàng đơn vị = số user cung cấp % 10
// 2. Tách số hàng chục = số user cung cấp / 10
// 3. Tính tổng = số hàng đơn vị + số hàng chục
// Output: Trả kết quả
document.getElementById("btnTinhTong").onclick = function () {
  console.log("Đã click vào nút Tính tổng");
  const so2ChuSo = Number(document.getElementById("so2ChuSo").value);
  console.log(so2ChuSo);
  // Kiểm tra xem có đúng là số có 2 chữ số không
  if (isNaN(so2ChuSo) || so2ChuSo < 10 || so2ChuSo > 99) {
    document.getElementById("resBai5").innerHTML =
      "Vui lòng nhập số có 2 chữ số (từ 10 đến 99)";
    return;
  }
  let hangDonVi = 0;
  let hangChuc = 0;
  let tong = 0;
  hangDonVi = so2ChuSo % 10;
  hangChuc = Math.floor(so2ChuSo / 10);
  tong = hangDonVi + hangChuc;
  console.log(hangDonVi, hangChuc, tong);
  document.getElementById("resBai5").innerHTML = `Tổng 2 ký số là ${tong}`;
};

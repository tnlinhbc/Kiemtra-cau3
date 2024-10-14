function kiemtra() {
    var masv = document.frDangKy.masv.value;
    var hoten = document.frDangKy.hoten.value;
    var email = document.frDangKy.email.value;
    var gioitinh = document.frDangKy.gioitinh.value;
    var checkbox = document.frDangKy.sothich;
    var sothich = document.getElementById('st');
    var quoctich = document.frDangKy.quoctich.value;
    var ghichu = document.frDangKy.ghichu.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var st = "";
    if (masv == '') {
        alert('Nhập mã sinh viên');
        document.frDangKy.masv.focus();
        return false;
    }
    else if (masv.length < 7) {
        alert('Mã sinh viên phải có ít nhất 7 ký tự');
        document.frDangKy.masv.focus();
        return false;
    }
    if (hoten == '') {
        alert('Nhập họ tên');
        document.frDangKy.hoten.focus();
        return false;
    }
    if (email == '') {
        alert('Nhập email');
        document.frDangKy.email.focus();
        return false;
    }
    else if (!filter.test(email)) {
        alert('Địa dạng Email chưa đúng');
        document.frDangKy.email.focus();
        return false;
    }
    if (gioitinh == '') {
        alert('Chọn giới tính');
        return false;
    }
    if (sothich.checked == false) {
        alert('Chọn sở thích');
        return false;
    }
    if (quoctich == 'chonquoctich') {
        alert('Chọn quốc tịch');
        return false;
    }
    if (ghichu == '') {
        alert('Nhập ghi chú');
        document.frDangKy.ghichu.focus();
        return false;
    }
    alert('Đăng ký thành công');
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            st += checkbox[i].value + ",";
        }
    }
    var thongTin = '?masv=' + encodeURIComponent(masv) +
        '&hoten=' + encodeURIComponent(hoten) +
        '&email=' + encodeURIComponent(email) +
        '&gioitinh=' + encodeURIComponent(gioitinh) +
        '&st=' + encodeURIComponent(st) +
        '&quoctich=' + encodeURIComponent(quoctich) +
        '&ghichu=' + encodeURIComponent(ghichu);
    window.location.href = 'thongTin.html' + thongTin;
}

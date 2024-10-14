window.onload = function () {
    var params = new URLSearchParams(window.location.search);
    var masv = params.get('masv');
    var hoten = params.get('hoten');
    var email = params.get('email');
    var gioitinh = params.get('gioitinh');
    var gioitinh = params.get('gioitinh');
    var st = params.get('st');
    var quoctich = params.get('quoctich');
    var ghichu = params.get('ghichu');
    document.getElementById("masv").innerHTML = '<p><b>Mã sinh viên: </b>' + masv + '</p>';
    document.getElementById("hoten").innerHTML = '<p><b>Họ và tên: </b>' + hoten + '</p>';
    document.getElementById("email").innerHTML = '<p><b>Địa chỉ email: </b>' + email + '</p>';
    document.getElementById("gioitinh").innerHTML = '<p><b>Giới tính: </b>' + gioitinh + '</p>';
    document.getElementById("st").innerHTML = '<p><b>Sở thích: </b>' + st;
    document.getElementById("quoctich").innerHTML = '<p><b>Quốc tịch: </b>' + quoctich + '</p>';
    document.getElementById("ghichu").innerHTML = '<p><b>Ghi chú: </b>' + ghichu + '</p>';

}
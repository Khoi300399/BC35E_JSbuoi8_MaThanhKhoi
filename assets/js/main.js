var arr = [];

function btnPush() {
    var addArr = +document.getElementById("nhapN").value;
    arr.push(addArr);
    show(arr, "showArr");
}

function btnTinhTong() {
    var ketQua = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            ketQua += arr[i];
        }
    }
    show(ketQua, "showTinhTong");
}

function btnDemSo() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            dem++;
        }
    }
    show(dem, "showDemSo");
}

function btnTimSoNhoNhat() {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    show(min, "showTimSoNhoNhat");
}

function btnTimSoDuongNhoNhat() {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    var min = newArr[0];
    for (var j = 1; j < arr.length; j++) {
        if (min > newArr[j]) {
            min = newArr[j];
        }
    }
    show(min, "showTimSoDuongNhoNhat");
}

function btnTimSochan() {
    var ketQua;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            ketQua = arr[i];
        }
    }
    if (ketQua === undefined) {
        ketQua = -1;
    }
    show(ketQua, "showTimSochan");
}

function btnDoiCho() {
    var i = +document.getElementById("nhapViTri1").value;
    var j = +document.getElementById("nhapViTri2").value;
    var temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    show("Mảng sau khi đổi chỗ: " + arr, "showDoiCho");
}

function btnSapXepTangDan() {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    show("Mảng sau khi sắp xếp tăng dần: " + arr, "showSapXepTangDan");
}

function btnTimSNT() {
    var ketQua;
    for (var i = 0; i < arr.length; i++) {
        var dem = 0;
        for (var j = 1; j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                dem++;
            }
        }
        if (dem == 2) {
            ketQua = arr[i];
            break;
        }
    }
    if (ketQua === undefined) {
        ketQua = -1;
    }
    show(ketQua, "showTimSNT");
}

function btnThemSo() {
    var ThemSo = +document.getElementById("addNum").value;
    arr.push(ThemSo);
    show(arr, "showThemSo");
}

function btnDemSoNguyen() {
    var dem = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            dem++;
        }
    }
    show(dem, "showDemSoNguyen");
}

function btnSoSanh() {
    var demDuong = 0;
    var demAm = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            demDuong++;
        } if (arr[i] < 0) {
            demAm++;
        }
    }
    var ketQua = "";
    if (demDuong > demAm) {
        ketQua += "Số dương > Số âm";
    } if (demDuong === demAm) {
        ketQua += "Số dương = Số âm";

    }
    else {
        ketQua += "Số dương < Số âm";

    }
    show(ketQua, "showSoSanh");
}

function show(ketQua, a) {
    document.getElementById(a).innerHTML = ketQua;
    document.getElementById(a).style.display = "block"
}







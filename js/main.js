
var soNguyen = [];
function themSo() {
    var number = Number(document.querySelector("#nhapSN input").value);

    soNguyen.push(number);
    console.log(soNguyen);
    document.getElementById("txtform").innerHTML = "Mảng: " + soNguyen;
}
document.querySelector("#nhapSN button").onclick = themSo;
//bài tap 1
function baiTapTong() {
    var sum = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            sum += soNguyen[i]
        }
    }
    console.log(sum)
    document.getElementById("txtbt1").innerHTML = "Tổng số dương: " + sum;
}
document.getElementById("btnbt1").onclick = baiTapTong;
//bài tap 2
function btSoDuong() {
    var count = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            count++
        }
    }
    console.log(count);
    document.getElementById("txtbt2").innerHTML = "Số dương: " + count;
}
document.getElementById("btnbt2").onclick = btSoDuong;
//bài tap 3
function bttimmin() {
    var vitriso = 0;
    var Min = soNguyen[0];
    for (var i = 0; i < soNguyen.length; i++) {
        if (Min > soNguyen[i]) {

            Min = soNguyen[i];
            vitriso = i;

        }
    }
    document.querySelector("#txtbt3").innerHTML = "Số nhỏ nhất: " + Min;
}
document.getElementById("btnbt3").onclick = bttimmin;

//bài 4
function bttimsoduongnhonhat() {
    var viTriSo = 0;
    var min = soNguyen[0];
    for (var i = 0; i < soNguyen.length; i++) {
        if (min > soNguyen[i]) {

            min = soNguyen[i];
            viTriSo = i;

        }
    }
    document.querySelector("#txtbt4").innerHTML = "Số dương nhỏ nhất: " + min;
}
document.getElementById("btnbt4").onclick = bttimsoduongnhonhat;
//bài 5
function bttimsoduongcuoicung() {

    var numberCuaSoTanCung = -1;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] % 2 == 0) {
            numberCuaSoTanCung = soNguyen[i];
            numberCuaSoTanCung;
        }

    }
    document.querySelector("#txtbt5").innerHTML = "Số chẵn cuối cùng: " + numberCuaSoTanCung;
}
document.getElementById("btnbt5").onclick =  bttimsoduongcuoicung;

//bài6
function btdoicho(a, b) {
    temp = soNguyen[a];
    soNguyen[a] = soNguyen[b];
    soNguyen[b] = temp;


}
function doiCho() {
    var inputSo1 = document.getElementById("nb1").value;
    var inputSo2 = document.getElementById("nb2").value;
    btdoicho(inputSo1, inputSo2);

    document.querySelector('#txtbt6').innerHTML = "Mảng sau khi đổi: " + soNguyen;
}
//bài7
function btsapxep() {

    for (var i = 0; i < soNguyen.length - 1; i++) {
        for (var j = 0; j < soNguyen.length; j++) {

            if (soNguyen[j] > soNguyen[j + 1]) {
                btdoicho(j, j + 1)
            }

        }

    }
    console.log(soNguyen)
    document.querySelector('#txtbt7').innerHTML = "Mảng sau khi sắp xếp: " + soNguyen;
}
document.querySelector("#btnbt7").onclick = btsapxep;

//bài8

function btchecknt(num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}
function nguyenTo() {
    var nguyento = -1; 
    for (var i = 0; i < soNguyen.length; i++) {
        if (btchecknt(soNguyen[i])) {
            nguyento = soNguyen[i];
            break;
        }
    }
    document.getElementById('txtbt8').innerHTML = nguyento;
}
document.querySelector("#btnbt8").onclick = nguyenTo;

//bai9
var soNguyen2 = [];
function themsothuc() {
    var number = Number(document.getElementById("nhapsovao").value);
    soNguyen2.push(number);
    document.querySelector("#txtbt9").innerHTML = soNguyen2;
}
document.querySelector("#bt9").onclick = themsothuc;
function demsonguyen() {
    var count = 0;
    for (var i = 0; i < soNguyen2.length; i++) {
        Number.isInteger(soNguyen2[i]) ? count++ : count;
    }
    document.getElementById('txtbt92').innerHTML = count;
}
document.querySelector("#bt92").onclick = demsonguyen;
//bai10
function btsosanh() {
    var countDuong = 0;
    var countAm = 0;
    KQ = '';
  for (var i = 0; i < soNguyen.length; i++)
  soNguyen[i] > 0 ? countDuong++ : soNguyen[i] < 0 && countAm++;
  if (countDuong > countAm) {
    KQ ='Số dương > Số âm';
  } else if (countDuong < countAm) {
    KQ ='Số âm > Số dương';
  }else{
    KQ ='Số âm = Số dương';
  }
  document.getElementById('txtbt10').innerHTML = KQ

}
document.querySelector("#btbt10").onclick = btsosanh;
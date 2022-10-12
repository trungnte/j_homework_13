/**
 * Tính tổng 2 ký số
 * Viết chương trình nhập vào 1 số có 2 chữ số VD 12, 44, 83
 * Tính tổng 2 ký số của số vừa nhập
 * VD:
 * 12 => Tổng là 1 + 2 = 3
 * 44 => 4 + 4 = 8
 * */ 

/*
1. input
    var number = 0;

2. process
    B1: Khai báo biến và get giá trị input từ user
        number = parseInt(document.getElementById("inputNumber05").value);

    B3: Lap cong thuc tinh toan'
        var tenth = Math.floor(number / 10);
        var unit =  number % 10;
        var total = tenth + unit

3. output
    Hiển thị: 
        total
*/

function calcSumDigitsOfNumber() {
    // 1. input
    var numberStr = "";
    
    // 2. process
    // B1: Khai báo biến và get giá trị input từ user
    numberStr = document.getElementById("inputNumberE5").value;
    // console.log(numberStr)


    var number = parseInt(numberStr);
    // console.log(number);

    // B3: Lap cong thuc tinh toan'
    var tenth = Math.floor(number / 10);
    var unit =  number % 10;
    var total = tenth + unit;
    // console.log(tenth, unit, total);

    // output
    var outputDisplayELE5 = document.getElementById("output5");
    outputDisplayELE5.innerHTML = "Tổng 2 chữ số: " + total;
    outputDisplayELE5.style.color = "red";
}

document.getElementById("btnBai05").onclick = calcSumDigitsOfNumber;
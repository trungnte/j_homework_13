/**
 * Tính giá trị trung bình
 * Viết chương trình nhập vào 5 số thực
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình
*/

/*
1. input
    5 số thực: number01, number02, number03, number04, number05

2. process
    B1: Khai báo biến và get giá trị input từ user
    B2: Lap cong thuc tinh toan
        average = (parseFloat(number01) + 
                    parseFloat(number02) + 
                    parseFloat(number03) + 
                    parseFloat(number04) + 
                    parseFloat(number05)) / 5;

3. output
    Hiển thị trung bình: average
*/


function AverageRealNumbers() {
    // 1. input
    // var number01 = 0
    // var number02 = 0
    // var number03 = 0
    // var number04 = 0
    // var number05 = 0

    // 2.1 B1: Khai báo biến và get giá trị input từ user
    var number01 = document.getElementById("inputNumber01").value;
    var number02 = document.getElementById("inputNumber02").value;
    var number03 = document.getElementById("inputNumber03").value;
    var number04 = document.getElementById("inputNumber04").value;
    var number05 = document.getElementById("inputNumber05").value;

    // console.log(typeof number01);
    // console.log(typeof number02);
    // console.log(typeof number03);
    // console.log(typeof number04);
    // console.log(typeof number05);
    
    // 2.2 B2: Lap cong thuc tinh toan
    var average = (parseFloat(number01) + 
                    parseFloat(number02) + 
                    parseFloat(number03) + 
                    parseFloat(number04) + 
                    parseFloat(number05)) / 5;

    // console.log("Average:" + average);

    // 3 Hiển thị trung bình
    var outputDisplayELE = document.getElementById("output2");
    outputDisplayELE.innerHTML = "Trung Bình: " + average;
    outputDisplayELE.style.color = "red";
}

document.getElementById("btnBai02").onclick = AverageRealNumbers;

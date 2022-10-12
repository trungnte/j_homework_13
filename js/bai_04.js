/**
 * Tính diện tích và chu vi hình chữ nhật
 * Viết chương trình nhập vào 2 chiều dài và chiều rộng của HCN.
 * Tính và xuất ra diện tích, chu vi của HCN đó
 * S = dài * rộng
 * P = (dài + rộng) * 2
 * */ 

/*
1. input
    chieuDaiStr
    chieuRongStr

2. process
    B1: Khai báo biến và get giá trị input từ user
        chieuDaiStr = document.getElementById("chieuDai").value;
        chieuRongStr = document.getElementById("chieuRong").value;

    B2: Convert parameter to float
        var chieuDai = parseFloat(chieuDaiStr);
        var chieuRong = parseFloat(chieuRongStr);
    B3: Lap cong thuc tinh toan'
        dienTich = chieuDai * chieuRong;
        chuvi = (chieuDai + chieuRong)*2;

3. output
    Hiển thị: 
        Chu vi
        Dien Tich
*/

function calcRetangle() {
    // 1. input
    var chieuDaiStr = "";
    var chieuRongStr = "";
    
    // 2. process
    // B1: Khai báo biến và get giá trị input từ user
    /*  */
    chieuDaiStr = document.getElementById("chieuDai").value;
    chieuRongStr = document.getElementById("chieuRong").value;

    // B2: Convert parameter to float
    var chieuDai = parseFloat(chieuDaiStr);
    var chieuRong = parseFloat(chieuRongStr);

    // B3: Lap cong thuc tinh toan'
    var dienTich = chieuDai * chieuRong;
    var chuvi = (chieuDai + chieuRong)*2;

    // output
    var outputDisplayELE41 = document.getElementById("output41");
    outputDisplayELE41.innerHTML = "Diện tích: " + dienTich.toLocaleString();
    outputDisplayELE41.style.color = "red";

    var outputDisplayELE42 = document.getElementById("output42");
    outputDisplayELE42.innerHTML = "Chu vi: " + chuvi.toLocaleString();
    outputDisplayELE42.style.color = "red";
}

document.getElementById("btnBai04").onclick = calcRetangle;
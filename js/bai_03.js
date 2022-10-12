/**
 * Quy đổi tiền
 * Giá USD hiện nay đang là 23.500 VND
 * Viết chương trình quy đổi từ USD sang VND.
 * Cho người dùng nhập vào số tiền USD.
 * Tính và xuất ra số tiền sau quy đổi VND.
 * VD: Người dùng nhập 2USD => xuất ra 47.000 VND
*/

/*
1. input
    numberOfUSDStr

2. process
    B1: Khai báo biến và get giá trị input từ user
        RATIO = 23500
    B2: Lap cong thuc tinh toan'
        amountVND = numberOfUSD * RATIO;

3. output
    Hiển thị VND: amountVND
*/

function convertUSDtoVND() {
    const RATIO = 23500;
    // input
    var numberOfUSDStr = document.getElementById("inputDollar01").value;

    // 2. process
    var amountVND = parseInt(numberOfUSDStr) * RATIO;

    // output
    var outputDisplayELE = document.getElementById("output3");
    outputDisplayELE.innerHTML = "Số tiền: " + amountVND.toLocaleString() + " VND";
    outputDisplayELE.style.color = "red";
}

document.getElementById("btnBai03").onclick = convertUSDtoVND;
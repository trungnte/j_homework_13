/**
 * Viết chương trình tínhh tiền lương nhân viên.
 * Lương 1 ngày: 100.000
 * Cho người nhập vào số ngày làm
 * Công hức tính lương: lương 1 ngày * số ngày làm
*/

/*
1. input
    Số ngày làm việc: numberOfWorkingDay

2. process
    B1: Khai báo biến và get giá trị input từ user
    B2: Lap cong thuc tinh toan

3. output
    Hiển thị lương
*/


function CalcSalary() {
    // 1. input
    const SALARY_PER_DAY = 100000;

    // 2.1 B1: Khai báo biến và get giá trị input từ user
    var numberOfWorkingDay = document.getElementById("numberOfWorkingDay").value;
    
    // 2.2 B2: Lap cong thuc tinh toan
    var salary = SALARY_PER_DAY * Number(numberOfWorkingDay);

    // console.log("Salary:" + salary)

    // 3 Hiển thị lương
    var outputDisplayELE = document.getElementById("output1");
    outputDisplayELE.innerHTML = "Lương: " + salary.toLocaleString() + " VND";
    outputDisplayELE.style.color = "red";
}

document.getElementById("btnBai01").onclick = CalcSalary;



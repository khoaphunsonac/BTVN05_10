//7.Xây dựng hàm liệt kê các số chẵn và lớn hơn 20 trong mảng.
function listEven(arr) {
    let Res = "";
    for (let i of arr) {
        if (i % 2 == 0 && i > 20) Res += i + " ";
    }
    console.log("Các số chẵn và lớn hơn 20 trong mảng là: " + Res);
}

let arr = [21, 22, 23, 24, 25, 26];
arr = [12, 25, 30, 45, 22, 18, 50, 33, 40, 55, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
listEven(arr);
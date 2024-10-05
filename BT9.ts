//9.Xây dựng hàm tính trung bình các số trong mảng. Sau đó trả về kết quả tìm được.
function average(arr) {
    if(arr.length == 0) return 0;
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum / arr.length;
}

let arr = [1, 2, 3, 4, 5];
let result = average(arr);
console.log("Trung bình các số trong mảng là: " + result);

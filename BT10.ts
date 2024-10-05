//10.Xây dựng hàm tính trung bình các số dương trong mảng. Sau đó trả về kết quả tìm được.
function averagePositive(arr) {
    let count = 0;
    let sum = 0;
    for (let i of arr) {
        if (i > 0) {
            sum += i;
            count++;
        }
    }
    if (count == 0) return 0;
    return sum / count;
}

let arr = [1, 2, -3, -4, 5, -6];
let result = averagePositive(arr);
console.log("Trung bình các số dương trong mảng là: " + result);

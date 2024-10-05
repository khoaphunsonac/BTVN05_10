//16.Xây dựng hàm tìm số dương lớn nhất trong mảng. Trả về số dương đó.
function findMaxPositive(arr) {
    let max = -1;
    for (let i of arr) {
        if (i > max && i > 0)
            max = i;
    }
    return max;
}

let arr = [1, 2, 3, 4, 5];
let maxPositive = findMaxPositive(arr);
console.log("Số dương lớn nhất trong mảng là: " + maxPositive);
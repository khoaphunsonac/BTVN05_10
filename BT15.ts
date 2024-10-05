//15.Xây dựng hàm tính giá trị trung bình của giá trị lớn nhất và nhỏ nhất trong mảng. Trả về giá trị đó.
function findMax(arr) {
    let max = arr[0];
    for (let i of arr) {
        if (i > max)
            max = i;
    }
    return max;
}
function findMin(arr) {
    let min = arr[0];
    for (let i of arr) {
        if (i < min)
            min = i;
    }
    return min;
}
function averageMinMax(arr) {
    let max = findMax(arr);
    let min = findMin(arr);
    return (max + min) / 2;
}
let arr = [1, 2, 3, 4, 5];
let average = averageMinMax(arr);
console.log("Giá trị trung bình của giá trị lớn nhất và nhỏ nhất trong mảng là: " + average);
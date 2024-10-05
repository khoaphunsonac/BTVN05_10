//4. Xây dựng hàm có tham số là 1 mảng. Đếm có bao nhiêu số dương trong mảng. Sau đó trả về kết quả đếm được.
function countPositive(arr){
    let count = 0;
    for(let i of arr){
        if(i > 0) count++;
    }
    return count;
}

let arr = [1, 2, -3, -4, 5, -6];
let count = countPositive(arr);
console.log("Số lượng số dương trong mảng là: " + count);
//12.Xây dựng hàm kiểm tra trong mảng có số dương hay không? Nếu mảng có số dương trả kết quả về là 1. Ngược lại trả kết quả về là 0.
function checkPositive(arr) {
    for (let i of arr) {
        if (i > 0)
            return 1;
    }
    return 0;
}

let arr = [-1,2,-3,4,-5];
let result = checkPositive(arr);
if (result == 1) {
    console.log("Mảng có số dương");
} else {
    console.log("Mảng không có số dương");
}
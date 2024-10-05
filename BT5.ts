//5.Xây dựng hàm có tham số là 1 mảng. Đếm xem trong mảng có bao nhiêu số có giá trị bằng với giá trị lớn nhất của mảng. Trả về kết quả tìm được.
function countMax(arr){
    let max = arr[0];
    for(let i of arr){
        if(i > max) max = i;
    }
    let count = 0;
    for(let i of arr){
        if(i == max) count++;
    }
    return count;
}

let arr = [1, 2, 3, 4, 5, 5];
let count = countMax(arr);
console.log("Số lượng số bằng số lớn nhất trong mảng là: " + count);
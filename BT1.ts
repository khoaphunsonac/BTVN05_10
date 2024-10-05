//1.Xây dựng hàm giải phương trình bậc 1. Trả kết quả về là nghiệm của phương trình.
// Ax + B = C
function giaiPhuongTrinhBac1(A, B, C) {
    let x;
    if (A == 0) {
        if (B == C) {
            console.log("Phương trình vô số nghiệm");
        }
        else {
            console.log("Phương trình vô nghiệm");
        }
    }
    else {
        x = (C - B) / A;
        console.log("Phương trình có nghiệm x = " + x);
    }
}
let A = 5;
let B = 6;
let C = 7;
let x;
giaiPhuongTrinhBac1(A, B, C);

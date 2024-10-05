//2.Xây dựng hàm tính tổng các số từ m đến n. Kiểm tra kết quả tổng có là số nguyên tố hay không?
function checkSumisPrime(m, n) {
  let sum = 0;
  for (let i = m; i <= n; i++) {
    sum += i;
  }
  if (sum == 1) return false;
  if (sum == 2) return true;
  for (let i = 2; i < sum; i++) {
    if (sum % i == 0) return false;
  }
  return true;
}
let m = 1;
let n = 10;
let sum = checkSumisPrime(m, n);
if (sum) {
  console.log("Tổng các số từ " + m + " đến " + n + " là số nguyên tố");
} else {
  console.log("Tổng các số từ " + m + " đến " + n + " không là số nguyên tố");
}

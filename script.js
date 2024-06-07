// Câu 01: Max number (Tìm số lớn nhất)
function findMaxNumber(num1, num2) {
// Cách 1: Cú pháp dài   
//     if(num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//    }
// Cách 2: Cú pháp ngắn
// if(num1 > num2) return num1;
// else return num2;

// Cách 3: Toán tử 3 ngôi
return num1 > num2 ? num1 : num2;
}

const checkMax1 = findMaxNumber(10, 5);
console.log("Max number:",checkMax1);

const checkMax2 = findMaxNumber(10, 15);
console.log("Max number:",checkMax2);

const checkMax3 = findMaxNumber(100, 100);
console.log("Max number:",checkMax3);

// Câu 02: Bài toán FizzBuzz

function isfizzBuzz(arg){
    if (typeof arg !== "number") {
        return "Vui lòng nhập số!";
}

    if (arg % 3 === 0 && arg % 5 === 0) {
        return "FizzBuzz";
    } else if (arg % 3 === 0) {
        return "Fizz";
    } else if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return arg;
    }
}

const checkFizzBuzz1 = isfizzBuzz("one");
console.log(checkFizzBuzz1);

const checkFizzBuzz2 = isfizzBuzz(true);
console.log(checkFizzBuzz2);

const checkFizzBuzz3 = isfizzBuzz(9);
console.log(checkFizzBuzz3);

const checkFizzBuzz4 = isfizzBuzz(10);
console.log(checkFizzBuzz4);

const checkFizzBuzz5 = isfizzBuzz(30);
console.log(checkFizzBuzz5);

const checkFizzBuzz6 = isfizzBuzz(11);
console.log(checkFizzBuzz6);

// Câu 03: Tốc độ giới hạn
const SPEEDLIMIT = 70;
const KMPERPOINT = 5;
const MONEY = 30000;

function checkSpeedLimit(curSpeed) {
    if (curSpeed <= SPEEDLIMIT) {
        return "Vận tốc an toàn";
    } else {
        const penaltyPoint = Math.floor((curSpeed - SPEEDLIMIT) / KMPERPOINT);

        if (penaltyPoint < 10)
            return "Bạn đã bị phạt: " + penaltyPoint * MONEY + "đ";
        else{
            return "Bạn đã bị tước giấy phép lái xe";
        }
    }
}

const checkPoint1 = checkSpeedLimit(40);
console.log(checkPoint1); // Vận tốc an toàn

const checkPoint2 = checkSpeedLimit(70);
console.log(checkPoint2); // Vận tốc an toàn

const checkPoint3 = checkSpeedLimit(75);
console.log(checkPoint3); // Bạn đã bị phạt: 30000đ

const checkPoint4 = checkSpeedLimit(99);
console.log(checkPoint4); // Bạn đã bị phạt: 150000đ

const checkPoint5 = checkSpeedLimit(120);
console.log(checkPoint5); // Bạn đã bị tước giấy phép lái xe

console.log(checkPoint5); // Bạn đã bị tước giấy phép lái xe

// Câu 04: In ra key, value của object

function showStringProperties(curObj){
    for (let key in curObj) {
        if (typeof curObj[key] === "string") {
            console.log(key,":", curObj[key]);
}
}
}
const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
  };

  showStringProperties(person);
  console.log("----------");
  // In ra:
  // name : Le Van A
  // country : Viet Nam
  // designation : UI Developer
  // ----------
  
  const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
  };

  showStringProperties(technology);
  console.log("----------");
  // In ra:
  // name : JavaScipt
  // purpose : Scripting language for Web
  // developer : Netscape Corporation
  // ----------

//   Câu 05: Số nguyên tố
function isPrimeNumber(_number) {
    for (let factor = 2; factor < _number; factor++) {
        if (_number % factor === 0) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbers(_numberLimit) {
    for (let curNum = 2; curNum <= _numberLimit; curNum++) {
        if (isPrimeNumber(curNum)) {
            console.log("Số nguyên tố:",curNum);
        }
    }
}

showPrimeNumbers(20);

// Câu 06: 24-Hour Time
function convertTime(string) {
    const time = string.slice(0, -2);
    const ampm = string.slice(-2);
    const units = time.split(":");

    let hours = units[0];
    const minutes = units[1];
    const seconds = units[2];

    if (hours === "12"){
        hours = "00";
    }
    if (ampm === "PM") {
        hours = parseInt(hours) + 12;
    }
    
    const newString = [hours, minutes, seconds].join(":");

    return newString;
}
var test1 = convertTime("12:00:00AM");
console.log(test1);

var test2 = convertTime("12:40:22PM");
console.log(test2);

var test3 = convertTime("07:05:45PM");
console.log(test3);

// Câu 07: Kiểm tra năm nhuận

function leapYear(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

console.log(leapYear(2016)); // true
console.log(leapYear(2000)); // true
console.log(leapYear(1700)); // false
console.log(leapYear(1800)); // false
console.log(leapYear(100)); // false
function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1800)); // false
console.log(isLeapYear(100)); // false

// // Câu 08: Lấy đuôi mở rộng của một file.
// function extensionFilename(filename) {
//     return filename.includes(".")
//     ? filename.split(".").pop()
//     : "Đây không phải tên file.";
// }

// const input = prompt("Nhập tên file: ");
// if(input.length > 0) {
//     const result = extensionFilename(input);
//     console.log(result);
// }

// console.log(extensionFilename("one.js"));
// console.log(extensionFilename("one.html"));
// console.log(extensionFilename("one.css"));
// console.log(extensionFilename("one"));

// Câu 12: Lấy ra tên.

const myFriends = [1, 2, "Nam" , "Hung", 3, 4, "Hoa", 6, "Long"];
const onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}

console.log(onlyNames);

// Câu 13: Cửa hàng tiện lợi
function changeEnough(change, amountDue) {

    let totalChange = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;

    return totalChange >= amountDue;

}
console.log(changeEnough([2, 100, 0, 0], 14.11));   // Kết quả: false
console.log(changeEnough([0, 0, 20, 5], 0.75));     // Kết quả: true
console.log(changeEnough([30, 40, 20, 5], 12.55));  // Kết quả: true
console.log(changeEnough([10, 0, 0, 50], 3.85));    // Kết quả: false
console.log(changeEnough([1, 0, 5, 219], 19.99));   // Kết quả: false

// Câu 14: Máy tính cơ bản

function calculator(a, operator, b) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        if (b === 0) {
            return "Loi chia cho 0";
        }
        return a / b;
    } else {
        return "Khong hop le";
    }
}

console.log(calculator(2, "+", 2)); // Kết quả: 4
console.log(calculator(2, "*", 2)); // Kết quả: 4
console.log(calculator(4, "/", 2)); // Kết quả: 2

// Câu 15: Tính Thể Tích của Hình Nón
function coneVolume(h,r){
    let volume = (1/3) * Math.PI * Math.pow(r,2) * h;

    return Math.round(volume * 100) / 100;
}
console.log(coneVolume(3, 2)); // Kết quả: 12.57
console.log(coneVolume(15, 6)); // Kết quả: 565.49
console.log(coneVolume(18, 0)); // Kết quả: 0

// Câu 16: Tìm Giá Giảm Giá
function discount(originalPrice, discountPercentage){
    let discountedPrice = originalPrice * (1 - discountPercentage / 100);

    return Number(discountedPrice.toFixed(2));
}

console.log(discount(1500, 50)); // Kết quả: 750
console.log(discount(89, 20)); // Kết quả: 71.2
console.log(discount(100, 75)); // Kết quả: 25

// Câu 17: Trọng Lượng Của Hình Trụ
function weight(r, h){
    let volume = Math.PI * Math.pow(r, 2) * h;

    let mass = volume / 1000;

    return Number(mass.toFixed(2));
}
console.log(weight(4, 10)); // Kết quả: 0.5
console.log(weight(30, 60)); // Kết quả: 169.65
console.log(weight(15, 10)); // Kết quả: 7.07

// Câu 18: Trúng Độc Đắc
function testJackpot(result){
    // Duyệt qua tất cả các phần tử trong mảng
    for (let i = 1; i < result.length; i++) {
        // Nếu phần tử hiện tại khác phần tử trước đó, trả về false
        if (result[i] !== result[0]){
            return false;
        }
    }
    return true;
}

console.log(testJackpot(["@", "@", "@", "@"])); // Kết quả: true
console.log(testJackpot(["abc", "abc", "abc", "abc"])); // Kết quả: true
console.log(testJackpot(["SS", "SS", "SS", "SS"])); // Kết quả: true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // Kết quả: false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // Kết quả: false

// Câu 19: Instant JAZZ
function jazzify(chords){
    for (let i = 0; i < chords.length; i++) {
        if (!chords[i].endsWith("7")) {
            chords[i] += "7";
        }
    }
    return chords;
}
// Kiểm tra các trường hợp
console.log(jazzify(["G", "F", "C"])); // ➞ ["G7", "F7", "C7"]
console.log(jazzify(["Dm", "G", "E", "A"])); // ➞ ["Dm7", "G7", "E7", "A7"]
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(jazzify([])); // ➞ []

// Câu 20: Mảng Đối Xứng
function mirror(array){
    for (let i = array.length - 2; i >= 0; i--) {
        array.push(array[i]);
    }
    return array;
}
console.log(mirror([0, 2, 4, 6])); // ➞ [0, 2, 4, 6, 4, 2, 0]
console.log(mirror([1, 2, 3, 4, 5])); // ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mirror([3, 5, 6, 7, 8])); // ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

// Câu 21: Tìm Số Thiếu
function missingNumber(array){
    let arraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
    }
    // Tính tổng của các số từ 1 đến 10
    const totalSum = (10 * 11) / 2;
    // Trả về số bị thiếu bằng cách lấy tổng của các số từ 1 đến 10 trừ đi tổng của mảng đã cho
    return totalSum - arraySum;
}
console.log(missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
console.log(missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10
console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7

// Câu 22: Tính Sự Bằng Nhau của 3 Giá Trị
function equal(a, b, c){
    if(a === b && b === c){
        return 3;
    } else if(a === b || b === c || a === c){
        return 2;
    } else {
        return 0;
    }
}

// Kiểm tra các trường hợp
console.log(equal(3, 4, 3)); // ➞ 2
console.log(equal(1, 1, 1)); // ➞ 3
console.log(equal(3, 4, 1)); // ➞ 0

// Câu 23: Viết hoa tên của bạn
function capMe(names){
    const capitalizedNames = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        capitalizedNames.push(capitalized);
    }
    return capitalizedNames;

}
console.log(capMe(["mavis", "senaida", "letty"])); // ➞ ["Mavis", "Senaida", "Letty"]
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])); // ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])); // ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

// Câu 24: Ba Số Là Bộ Ba Pythago
function isTriplet(a, b, c){
    let min = Math.min(a,b,c);
    let max = Math.max(a,b,c);
    let mid = a + b + c - min - max;

    return min ** 2 + mid ** 2 === max ** 2;
}
// Kiểm tra các trường hợp
console.log(isTriplet(3, 4, 5)); // ➞ true
console.log(isTriplet(13, 5, 12)); // ➞ true
console.log(isTriplet(1, 2, 3)); // ➞ false

// Câu 25: Trả về ký tự ở giữa của chuỗi
function getMiddle(word){
    const length = word.length;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return word.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return word.charAt(middleIndex);
    }
}
// Kiểm tra các trường hợp
console.log(getMiddle("test")); // ➞ "es"
console.log(getMiddle("testing")); // ➞ "t"
console.log(getMiddle("middle")); // ➞ "dd"
console.log(getMiddle("A")); // ➞ "A"

// Câu 26: Chuyển đổi nhiệt độ
function tempConversion(celsius){
    let fahrenheit = parseFloat(((celsius * 9) / 5 + 32).toFixed(2));
    let kelvin = parseFloat((celsius + 273.15).toFixed(2));

    if (kelvin < 0){
        return "Invalid";
    } else {
        return [fahrenheit, kelvin];
    }
}

console.log(tempConversion(0)); // ➞ [32.0, 273.15]
console.log(tempConversion(100)); // ➞ [212.0, 373.15]
console.log(tempConversion(-10)); // ➞ [14.0, 263.15]
console.log(tempConversion(300.4)); // ➞ [572.72, 573.55]

// Câu 27: Độ dài đoạn thẳng
function lineLength(point1, point2){
    let x1 = point1[0];
    let y1 = point1[1];
    let x2 = point2[0];
    let y2 = point2[1];
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    
    length = parseFloat(distance.toFixed(2));

    return length;
}
console.log(lineLength([15, 7], [22, 11])); // ➞ 8.06
console.log(lineLength([0, 0], [0, 0])); // ➞ 0
console.log(lineLength([0, 0], [1, 1])); // ➞ 1.41

// Câu 28: Lọc và Sắp Xếp Duy Nhất
function uniqueSort(arr){
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    for (let i = 0 ; i < uniqueArray.length; i++) {
        for (let j = i + 1; j < uniqueArray.length; j++) {
            if (uniqueArray[i] > uniqueArray[j]) {
                let temp = uniqueArray[i];
                uniqueArray[i] = uniqueArray[j];
                uniqueArray[j] = temp;
            }
        }
    }
    return uniqueArray; 
}
console.log(uniqueSort([1, 2, 4, 3])); // ➞ [1, 2, 3, 4]
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); // ➞ [1, 2, 3, 4]
console.log(uniqueSort([6, 7, 3, 2, 1])); // ➞ [1, 2, 3, 6, 7]

// Câu 29: Chuyển đổi một câu thành chuỗi viết tắt
function chuyenChuoiVietTat(cau){
    // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    cau = cau.trim();

    // Chia chuỗi thành mảng các từ
    var mangTu = cau.split(" ");

    // Mảng chứa các chữ viết tắt
    var chuVietTat = [];

    for (var i = 0; i < mangTu.length; i++) {
        var tu = mangTu[i];
        // Loại bỏ từ 'và' và chuyển đổi các từ còn lại thành chữ viết tắt
        if (tu.toLowerCase() !== 'và'){
            var vietTat = tu.charAt(0).toUpperCase() + ".";
            chuVietTat.push(vietTat);
        } else {
            chuVietTat.push(tu);
        }
    }

    var ketQua = chuVietTat.join(" ");
    return ketQua;
}
// Test 1
var cau1 = "   Học và lập trình là thú vị   ";
var chuoiVietTat1 = chuyenChuoiVietTat(cau1);
console.log(chuoiVietTat1); // Kết quả: "H. và L. T. L. T. V."


// Test 2
var cau2 = "   Công ty Công Nghệ và Dịch Vụ DACA   ";
var chuoiVietTat2 = chuyenChuoiVietTat(cau2);
console.log(chuoiVietTat2); // Kết quả: "C. T. C. N. và D. V. D."

// Câu 30: Loại bỏ các ký tự trùng lặp trong một chuỗi
function loaiBoKyTuTrungLap(chuoi){
    chuoi = chuoi.trim().toLowerCase();

    var kyTuKhongTrungLap = [];

    for (var i = 0; i < chuoi.length; i++) {
        var kyTu = chuoi[i];

        if(kyTuKhongTrungLap.indexOf(kyTu) === -1){
            kyTuKhongTrungLap.push(kyTu);
        }
    }   

    var chuoiMoi = kyTuKhongTrungLap.join("");

    return chuoiMoi;
}

// Thử nghiệm với các chuỗi
var chuoi1 = "Hello world";
var chuoi2 = "Mississippi";
var chuoi3 = "28Tech";

console.log(chuoi1 + " => " + loaiBoKyTuTrungLap(chuoi1)); // "helo wrd"
console.log(chuoi2 + " => " + loaiBoKyTuTrungLap(chuoi2)); // "misp"
console.log(chuoi3 + " => " + loaiBoKyTuTrungLap(chuoi3)); // "28tech"

// Câu 31: Đếm số từ trong một chuỗi
function demSoTu(chuoi){
    chuoi = chuoi.trim();
    if (chuoi === ""){
        return 0;
    }
    var tu = chuoi.split(" ");
    return tu.length;
}
// Test 1
var chuoi1 = "   JavaScript là một ngôn ngữ lập trình   ";
var ketQua1 = demSoTu(chuoi1);
console.log(ketQua1); // Kết quả: 7

// Test 2
var chuoi2 = "Xin chào, mình là 28Tech!";
var ketQua2 = demSoTu(chuoi2);
console.log(ketQua2); // Kết quả: 5

// Câu 32: Tìm từ dài nhất trong chuỗi
function timTuDaiNhat(chuoi){
    chuoi = chuoi.trim();
    var mangTu = chuoi.split(" ");
    var tuDaiNhat = "";
    for (var i = 0; i < mangTu.length; i++) {
        if (mangTu[i].length > tuDaiNhat.length) {
            tuDaiNhat = mangTu[i];
        }
    }
    return tuDaiNhat;
}
// Test 1
var chuoi1 = "   JavaScript là ngôn ngữ lập trình phổ biến nhất  ";
var ketQua1 = timTuDaiNhat(chuoi1);
console.log(ketQua1); // Kết quả: "JavaScript"

// Test 2
var chuoi2 = "   Mình là Le Van A  ";
var ketQua2 = timTuDaiNhat(chuoi2);
console.log(ketQua2); // Kết quả: "Mình"

// Câu 33: Tính tổng và trung bình của các số
// var input = prompt("Nhập vào một dãy số, mỗi số cách nhau bằng dấu phẩy:");

// var numbers = input.split(",");

// var sum =0;
// var count = 0;

// for (var i = 0; i < numbers.length;i++){
//     if(!isNaN(numbers[i])){
//         sum += Number(numbers[i]);
//         count++;
//     }
// }

// if (count > 0){
//     var average = sum/count;
//     console.log("Tổng các số là: " + sum);
//     console.log("Trung bình của các số là: " + average.toFixed(2));
// } else {
//     console.log("Không có số hợp lệ để tính.");
// }
// Câu 34: Quản lý danh sách công việc
// var danhSachCongViec = [];

// while (true) {
//      var luaChon = prompt(`
//         Chọn tùy chọn:
//         1. Thêm công việc mới
//         2. Hiển thị danh sách công việc
//         3. Thoát chương trình
//         `
//      );
//      if (luaChon === "1") {
//         var tenCongViec = prompt("Nhap ten cong viec: ");
//         danhSachCongViec.push(tenCongViec);
//         console.log("Công việc đã được thêm vào danh sách.");
//      } else if (luaChon === "2") {
//         if (danhSachCongViec.length === 0){
//             console.log("Danh sách công việc đang trống.");
//         } else {
//             console.log("Danh sách công việc: ");
//             for (var i = 0; i < danhSachCongViec.length; i++) {
//                 console.log((i+1) + ". " + danhSachCongViec[i]);
//             }
//         }
//     }
//     else if (luaChon === "3") {
//         console.log("Chương trình đã kết thúc.");
//         break;
//     }
//     else{
//         console.log("Tùy chọn không hợp lệ.")
//     }
// }
// Câu 35: Giải Phương Trình
function tinhToan(bieuThuc){
    let so = [];
    let toanTu = [];
    let soHienTai = '';

    for (let kyTu of bieuThuc){
        if(!isNaN(kyTu)) {
            soHienTai += kyTu;
        } else {
            so.push(parseInt(soHienTai));
            toanTu.push(kyTu);
            soHienTai = '';
    }
    }
    so.push(parseInt(soHienTai));

    for (let i = 0; i < toanTu.length; i++){
        if (toanTu[i] === '*'){
            so[i] *= so[i+1];
            so.splice(i+1, 1);
            toanTu.splice(i, 1);
            i--;
        }
    }
    let ketQua = so[0];
    for (let i = 1; i <so.length; i++){
        if (toanTu[i - 1] === '+'){
            ketQua += so[i];
    } else if (toanTu[i - 1] === '-'){
        ketQua -= so[i];
    }
    }

    return ketQua;
}

console.log(tinhToan("1+1"));        // ➞ 2
console.log(tinhToan("7*4-2"));      // ➞ 26
console.log(tinhToan("1+1+1+1+1"));  // ➞ 5
console.log(tinhToan("6+6*6-6"));    // ➞ 36
console.log(tinhToan("15+20*6-12"));    // ➞ 123

// Câu 36: Matchstick Houses (nhà diêm)
function matchHouses(n) {
    if (n === 0) {
        return 0;
    }

    return 5* n + 1;

}
// Kiểm tra các ví dụ
console.log(matchHouses(1)); // Output: 6
console.log(matchHouses(4)); // Output: 21
console.log(matchHouses(87)); // Output: 436

// Câu 37: Sum of Cubes (Tổng các khối lập phương)

function sumOfCubes(arr) {
    var sum = 0;

    for (var i = 0; i <arr.length; i++) {

        sum += Math.pow(arr[i], 3);

    }

    return sum;

}
console.log(sumOfCubes([1, 5, 9])); // Output: 855
console.log(sumOfCubes([3, 4, 5])); // Output: 216
console.log(sumOfCubes([2])); // Output: 8
console.log(sumOfCubes([])); // Output: 0

// Câu 38: Tổng các phần tử số trong một mảng
function numbersSum(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}
// Kiểm tra các ví dụ
console.log(numbersSum([1, 2, "13", "4", "645"])); // Output: 3
console.log(numbersSum([true, false, "123", "75"])); // Output: 0
console.log(numbersSum([1, 2, 3, 4, 5, true])); // Output: 15

// Câu 39: Số lớn nhất
function largestNumbers(n, array){
    var largest = [];

    for (var i =0; i < n; i++) {

        var max = array[0];
        var maxIndex = 0;
        for (var j = 1; j < array.length; j++) {
            if (array[j] > max) {
                max = array[j];
                maxIndex = j;
            }
        }

        largest.push(max);
        array.splice(maxIndex, 1);
    }

    return largest.reverse();
}
console.log(largestNumbers(2, [4, 3, 2, 1])); // Output: [3, 4]
console.log(largestNumbers(1, [7, 19, 4, 2])); // Output: [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); // Output: [16, 18, 57]
console.log(largestNumbers(0, [1, 3, 4, 2])); // Output: []

// Câu 40: Sam có ở cùng Frodo không?
function middleEarth(names){
    for (var i = 0 ;i <names.length - 1; i ++){
        if (
            (names[i] === "Sam" && names[i + 1] === "Frodo") ||
            (names[i] === "Frodo" && names[i + 1] === "Sam")
        ) {
            return true;
        }
    }

    return false;
}
console.log(middleEarth(["Frodo", "Sam", "Gandalf"])); // Output: true
console.log(middleEarth(["Frodo", "Saruman", "Sam"])); // Output: false
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])); // Output: true
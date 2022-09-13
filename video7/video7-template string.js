//string template(var vs let)
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\n not " + (2 * a + b) + ".");
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.+++`);//template string ${} :thể hiện đây là biến
console.log(`hoi dan it check string :a=${a} b=${b},a+b= ${a+b}`)
//trong thực tế thì dùng như thế nào
//...

//bổ sung thêm var và let
// trình duyệt sẽ check lỗi biến let chặt hơn biến var
//vả là biến toàn cục
//let chỉ hoặt động vs giá trị trong khối lệnh đó
//const là háng số

// Phạm vi của biến sử dụng var là phạm vi hàm hoặc bên ngoài hàm, toàn cục.
// Phạm vi của biến sử dụng let là phạm vi một khối (block), xác định bởi cặp {}.


  
for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);//kết quả chạy từ  0-4
}

console.log("Outside the loop:", i);//vẫn hiển thị ra kết quả là 5 ,ở ngoài vòng lặp

  

for (let q = 0; q < 5; q++) {
	console.log("Inside the loop:", q);//kết quả chạy từ 0-4
}

console.log("Outside the loop:", q);//lỗi

// let counter = 10;
// let counter; // error
//không đặt trùng dc





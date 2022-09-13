
//bài 8-video thứ 12 trong chuỗi
//bài liên quan đến object
//lập trình hướng đối tượng là :chính là vc chúng ta mô phỏng  những hđ từ đười thực vào trong code
// ví dụ như con người có csac hđ như ...
// trong code thì chúng ta sẽ định nghĩa một con người và chúng ta sẽ cho nó các hành động-csac hành động ở đay thì chúng ta gọi là các function-hay là các hàm(vc chungsta lập trình hướng dối tượng chính là ánh xạ từ đời sống vào trong code-cs như nào thì code như thế)
console.log('helo')



//key:value
let a = {
    name:'phu',
    address:'vietnam'
};

// console.log ('type of a:',typeof a, ' ' ,'type of b:',typeof b)

//các cách để có thể truy cập vào dc value trong obj
console.log ('ten m la j?','ten tao la:',a.name)
console.log ('m o dau?','tao o:',a.address)
console.log(a['name'])
console.log(a[`address`])
console.log(a["name"])

// truyền động-tức là cái tham số chúng ta không hề biết chính xác tên của cái key chúng ta muốn gán giá trị ,chúng ta chỉ cần biết chúng ta sẽ truyền cho nó một cái biến động  thì như vaayh chúng ta muốn xử lý vs tk obj bắt buộc chúng ta phải dùng dấu ngoặc vuông 
//phần này hơi khó hiểu
let obj = {
    name:'phu',
    address:'vietnam'
    //ó thể khai báo keyvalue như sau 'job'='student' cũng dc
};
let b = 'name';
obj[b] = 'haaa'//khi dùng ngoạc vuông như này nó sẽ hiểu là obj[name]=haaa và nó saex thay thế cái naem = phu luôn
obj.b = '1111'// làm kiểu này thì nó sẽ ra một cập key: value là b:1111

// obj.name='aaaaaa'

console.log(obj['name'])
console.log ('ten m la j?','ten tao la:',obj['name'],obj)//lcsu này kết quả sẽ là haaa

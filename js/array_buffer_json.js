// Array
var arr = new Array();
typeof arr === 'object';
arr.length === 0;
// 增加、删除元素
for(let i=0;i<10;i++)arr.push(i);
arr.unshift(3);
arr.pop();
arr.shift();
// arr.splice(index, count[, element]);
// 排序
arr.sort((a, b)=>b-a);
arr.reverse();
// 切片
console.log(arr.slice(4, 6));
// 拼接
var arrb = ['a', 'b', 'c'];
console.log(arr.concat(arrb));
console.log(arr.join('-'));
// indexOf, lastIndexOf, includes, forEach, filter, map, some, every, find, reduce((total, currentValue, currentIndex, array)=>{}, initialValue)
console.log(arr.some(v=>v>100), arr.every(v=>v>-1), arr.find(v=>v>5));
// 利用ES6 Set去重
Array.from(new Set([1,2,3,4,5,5])).length
// 判断是否是数组
Array.isArray(arr)

// Buffer.alloc(size[, fill[, encoding]])
// Buffer.from(Array|Buffer|String|Object)
// Buffer.compare(buf1, buf2)
// Buffer.concat(list[, totalLength])
const b = Buffer.alloc(10, 1);
Buffer.isBuffer(b) == true;
b.length          // 10
b.toJSON()        // { type: 'Buffer', data: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] }
b.write('aA');    // 2
b.toString(['base64'|'hex'])      // 'aA\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001'

// JSON
var s = '{"a":1, "b":2, "c":3, "d":4, "e":5}';
var jo = JSON.parse(s);
var j = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5};
var js = JSON.stringify(j);
console.log(jo, j, js);
console.log(j.a, jo['a']);
for(let i in j)console.log(i + '-->' + j[i]);

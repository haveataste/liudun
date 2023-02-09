var s = 'abcdefghijklmn';
s.length
s.charAt(0) === 'a'
s.charCodeAt(0) === 97
String.fromCharCode(65) === 'A'
var so = new String('abcdefghijklmn')
console.log(so, so.toString(), so.valueOf())
// 查找字符串位置起始索引值，找不到返回-1
s.indexOf('efg', 0)
s.lastIndexOf('jkl', 0)
// 正则匹配
s.match(/bc/)             //[ 'bc', index: 1, input: 'abcdefghijklmn', groups: undefined ]
s.search(/cd/)            //2
s.replace(/bc/, 'qq')     //'aqqdefghijklmn'
/bc/.test(s)              //true
// 分割
s.split('').join('-')
// 截取字符串
s.substring(from[, to]) -- s.slice(start, end)
s.substr(from, length)
// 把字符串显示为下标和上标
s.sub(), s.sup()
// 大小写
s.toLowerCase(), s.toUpperCase()
// 两端补全
s.padStart(targetLength [, padString])
s.padEnd(targetLength [, padString])

// 编码字符串用escape，编码URI使用encodeURIComponent、encodeURI，并且encodeURIComponent编码的范围更大
var s = "https://user:password@abc.com/path/file?a=1&b=2#id";
escape(s)               // 'https%3A//user%3Apassword@abc.com/path/file%3Fa%3D1%26b%3D2%23id'
encodeURI(s)            // 'https://user:password@abc.com/path/file?a=1&b=2#id'
encodeURIComponent(s)   // 'https%3A%2F%2Fuser%3Apassword%40abc.com%2Fpath%2Ffile%3Fa%3D1%26b%3D2%23id'
// 解码
decodeURI(s), decodeURIComponent(s)
// base64
window.btoa(s), window.atob(s)
Buffer.from(s).toString('base64'), Buffer.from('aGVsbG93b3JsZA==', 'base64').toString()

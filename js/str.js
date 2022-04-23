var s = 'abcdefghijklmn';
s.length
s.charAt(0) === 'a'
s.charCodeAt(0) === 97
String.fromCharCode(65) === 'A'

// 查找字符串位置起始索引值，找不到返回-1
s.indexOf('efg', 0)
s.lastIndexOf('jkl', 0)

s.match(/bc/)             //[ 'bc', index: 1, input: 'abcdefghijklmn', groups: undefined ]
s.search(/cd/)            //2
s.replace(/bc/, 'qq')     //'aqqdefghijklmn'

s.split('').join('-')
// 截取字符串
// str.substring(from[, to]) -- str.slice(start, end)
// str.substr(from, length)
// 把字符串显示为下标和上标
s.sub(), s.sup()

s.toLowerCase()
s.toUpperCase()

var so = new String('abcdefghijklmn')
console.log(so, so.toString(), so.valueOf())

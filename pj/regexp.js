var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/g;
var s = "2017-09-28";
alert(s.match(reg));
reg = /^[1-9]\d{5}(19|20)\d{2}(0\d|1[0-2])([0|1|2]\d|3[0-1])\d{3}([0-9]|x|X)$/g;
reg = /((http|https|ftp):)?\/\/.+?\.(jpg|jpeg)/g;
//RE.test(str);
//str.match(RE);
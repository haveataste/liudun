var t = new Date();
t.setFullYear(2020);
t.setMonth(1); //0~11
t.setDate(12); //1-31
t.setHours(16); //0~23
t.setMinutes(16);
t.setSeconds(0);
t.setMilliseconds(0);
var dt = Date.parse(t)-Date.parse(new Date());
setTimeout(()=>console.log('ok'), dt);

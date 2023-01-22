var o = {
    a:1,
    b:2,
    f:function(m){
        console.log(this.a+this.b+m);
    }
}
var a = {
    a:100,
    b:2000
}
o.f.call(a, 100);
o.f.call(a, 1);
o.f.apply(a, [1]);
o.f.bind(a, 1)();

let Emitter = {};
Emitter.list = {};  //用来缓存事件
//监听事件
Emitter.on = function(key, fn){
    (this.list[key]||(this.list[key]=[])).push(fn);
};
//发布事件
Emitter.emit = function(key, ...args){
    let list = this.list[key];
    if(list.length == 0){
        return
    }
    list.forEach((fn) =>{
        fn.apply(this, args);
    })
};

//取消订阅
Emitter.remove = function(key, fn){
    let fns = this.list[key];
    let l = fns.length;
    if(l == 0){
        return
    }
    if(!fn){
        return this.list[key].length = 0;
    }
    for(let i=0;i<l;i++){
        if(fn == fns[i]){
            this.list[key].splice(i, 1);
        }
    }
};

let Listen1 = function(data){
    console.log("我是订阅者1");
    console.log("以下是文章内容："+data);
}
let Listen2 = function(data){
    console.log("我是订阅者2")
}

Emitter.on('公众号1', Listen1);
Emitter.on('公众号1', Listen2);
Emitter.emit('公众号1', '这是文章内容！');
Emitter.remove('公众号1', Listen2);
Emitter.emit('公众号1', '这是文章内容！');

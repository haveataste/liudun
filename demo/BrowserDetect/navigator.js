//2017-12-18
document.write(navigator.appName+'<br/>')   //浏览器名称
document.write(navigator.appVersion+'<br/>')    //浏览器版本号
document.write(navigator.userAgent+'<br/>')     //用户代理
document.write(navigator.platform+'<br/>')      //系统类型
document.write('<br/>');

document.write(BrowserDetect.browser+'<br/>')     //浏览器名称
document.write(BrowserDetect.version+'<br/>')       //浏览器版本
document.write(BrowserDetect.OS+'<br/>')              //系统类型
document.write('<br/>');

/*
if(BrowserDetect.browser == "Internet Explorer" && BrowserDetect.version < 7){
    alert("需要做IE版本的兼容！");
}else{
    alert("不需要做版本兼容!");
}
*/

//插件检测
for(var i = 0; i < navigator.plugins.length; i++){
    document.write("插件名："+navigator.plugins[i].name+'<br/>');
    document.write("文件名："+navigator.plugins[i].filename+'<br/>');
    document.write("描&nbsp;&nbsp;&nbsp;述："+navigator.plugins[i].description+'<br/>');
    document.write('<br/>');
}

//跨浏览器检测是否有Flash插件
function hasPlugin(name){
    var name = name.toLowerCase();
    for(var i = 0; i < navigator.plugins.length; i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
            return true;
        }
    }
    return false;
}
function hasIEPlugin(name){
    try{
        new ActiveXObject(name);
        return true;
    }catch(e){
        return false;
    }
}
function hasFlash(){
    var result = hasPlugin('Flash');
    if(!result){
        result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
    }
    return result;
}
alert(hasFlash());


//2017-12-19
/*
    浏览器能力检测
*/
var width = window.innerWidth;  //IE不支持
var height = window.innerHeight;
if(typeof width != "number"){
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
}
document.write("width:"+width+"<br/>height:"+height+"<br/>");


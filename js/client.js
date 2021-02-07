Util = {};

(function(){
    var userInfo = navigator.userAgent;
    var isXP     = userInfo.indexOf("Windows NT 5.1") > -1;
    var isVista  = userInfo.indexOf("Windows NT 6.0") > -1;
    var isWin7   = userInfo.indexOf("Windows NT 6.1") > -1;
    var _screen  = screen.width + 'x' + screen.height;
    Util.isXP      = isXP;
    Util.isVista   = isVista;
    Util.isWin7    = isWin7;
    Util.screen    = _screen;
})(); 

var s = document.createElement("script");
s.setAttribute("src","https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
document.head.appendChild(s);

// 删除前100条微博
function d(){
    for(var i=0;i<100;i++){
        $('a[action-type="fl_menu"]')[i].click();
        $('a[title="删除此条微博"]')[i].click();
        $('a[action-type="ok"]')[0].click();
    }
}

// 删除已不可见的转发微博
!(()=>{
    for(var i=0;i<$('div.WB_feed_detail.clearfix').length;i++){
        if($($('div.WB_feed_detail.clearfix')[i]).find('p').length!=0){
            $($('div.WB_feed_detail.clearfix')[i]).find('a[action-type="fl_menu"]')[0].click();
            $($('div.WB_feed_detail.clearfix')[i]).find('a[title="删除此条微博"]')[0].click();
            $($('div.WB_feed_detail.clearfix')[i]).find('a[action-type="ok"]')[0].click();
        }
    }
})()

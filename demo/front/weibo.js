var sn = document.createElement('script');
//sn.setAttribute("src","https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
//document.getElementsByTagName('head')[0].appendChild(sn);
sn.src = "https://cdn.staticfile.org/jquery/3.4.1/jquery.js";
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

// 相册中下载大图 https://wx3.sinaimg.cn/large/
$('img.photo_pict').each((k,v)=>console.log($(v).attr('src').split('?')[0].split('/').pop()))

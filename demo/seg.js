// 百度网盘资源分享真实地址
$.ajax({
    type: "POST",
    url: "/api/sharedownload?sign="+yunData.SIGN+"&timestamp="+yunData.TIMESTAMP,
    data: "encrypt=0&product=share&uk="+yunData.SHARE_UK+"&primaryid="+yunData.SHARE_ID+"&fid_list=%5B"+yunData.FS_ID+"%5D",
    dataType: "json",
    success: function(d){
        console.log(d.list[0].dlink);
    }
});


// 武汉人才市场, 添加附属表格,模仿form提交
$(".query_btn").click(function () {
    $(".QueryList").html($(".QueryListloading").html());
    var box = $(this).parents(".ajaxfrom");
    var prm = "";
    $(box).find(".ajaxinput").each(function (i) {
        prm += $(this).attr("name") + "=" + $(this).val() + "&";
    });
    $.ajax({
        type: "POST",
        url: "/templates/_Common/Query/Utils.ashx",
        data: prm,
        success: function (msg) {
            setTimeout(function () {
                $(".QueryList").html(msg);
            }, 500);
        }
    });
});
// 翻页控件
$(".pager a").live("click", function () {
    var box = $(".ajaxfrom");
    var tp = $(this);
    var page = tp.attr("p");
    var prm = "";
    $(".QueryList").html($(".QueryListloading").html());
    $(box).find(".ajaxinput").each(function (i) {
        prm += $(this).attr("name") + "=" + $(this).val() + "&";
    });
    prm += "CurrentPageIndex=" + page;
    $.ajax({
        type: "POST",
        url: "/templates/_Common/Query/Utils.ashx",
        data: prm,
        success: function (msg) {
            setTimeout(function () {
                $(".QueryList").html(msg);
            }, 500);
        }
    });
});

$.ajax({
    type: "POST",
    url: "http://www.job98.com/templates/_Common/Query/Utils.ashx",
    data: "tName=QueryFlow&txtName=someone&txtPerId=1234567890",
    success: function(msg){
        setTimeout(function(){console.log(msg);}, 500);
    }
});


// 读者信息查询, http://222.22.255.106:8089/common/ajax/ajaxcommon.js
getResponse("http://222.22.255.106:8089/opac/dzxmjsjg.jsp","dzxm="+escape("无名"));



<html>
<head>
<title>读者姓名检索</title>
<link href="css/css.css" rel="stylesheet" type="text/css">
</head>
<script language="JavaScript" src="\common\ajax\ajaxcommon.js"></script>
<script language="javascript" src="\common\checkdata.js"></script>
<script language="JavaScript">
  function dzxmcx(){
    var dzxm = document.form1.dzxm.value;
    if(G_CheckEmpty(dzxm)){
	  alert("请输入读者姓名！");
	  document.form1.dzxm.focus();
	  return false;
	}	
	var thtml = "dzxmjsjg.jsp"; 
	var data = "dzxm="+escape(dzxm);
    var tmpresult = getResponse(thtml,data);    
    document.all.resultdiv.innerHTML=tmpresult;
    return false;  
  }
  function mset(dztmparm) {
	window.returnValue = dztmparm;
	window.close();
  }
</script>
<body>
<br><br><br>
<form name="form1" method="post" action="" onsubmit="return dzxmcx();">
<table width=99% align=center border="0" cellspacing="0" cellpadding="0">
<tr><td nowrap align=center>
读者姓名：&nbsp; 
<input type=text name=dzxm class=textinput style="height:25px;width:170px">
<input type="submit" name=button1 value="查询"  class=button>
<br><br>
</td>
</tr>
<tr align=center><td nowrap>&nbsp;&nbsp;点击结果,条码号会装入<br><br></td>
</tr>
<tr><td align=center nowrap>
<div id="resultdiv">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="bordermain">    
<tr align="center">
<td nowrap class=borderhead>读者条码</td>
<td nowrap class=borderhead>姓名</td>
<td nowrap class=borderhead>性别</td>
<td nowrap class=borderhead>读者类型</td>
<td nowrap class=borderhead>一级单位</td>
<td nowrap class=borderhead>二级单位</td>
<td nowrap class=borderhead>办证单位</td>
</tr>
</table>
</div> 
</td>
</tr>
</table>
</form>
</body>
</html>
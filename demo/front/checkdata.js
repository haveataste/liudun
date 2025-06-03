<!--
var M_FirstDate=new Array(1900,1,1,0,0,0,0);
var M_LastDate=new Array(2050,12,31,23,59,59);

//liuheng.200712.27: 判断日期时间格式(2008-01-00 00:00:00)
function checkDateTime(str)
{
var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
var r = str.match(reg);
if(r==null)return false;
var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}

function M_RemoveWP(str)
{
	var rstr = "";
	
	if (str == null) return "";

	var firstpos = 0;
	while ( (str.charAt(firstpos) == " ") && (firstpos <= str.length -1) )
		firstpos = firstpos + 1;
	
	var endpos = str.length -1;
	while ( (str.charAt(endpos) == " ") && (endpos >= 0 ) )
		endpos = endpos - 1;
	
	var i;
	for (i=firstpos;i<=endpos;i++)
	{
		rstr = rstr + str.charAt(i);
	}
	return rstr;
}

//判断chkstr是否在minvalue - maxvalue之间
//如果不在其中，返回 -1
//否则返回 chkstr对应的数字
function G_CheckNum(chkstr,minvalue,maxvalue) 
{
	var tmpvalue;
	tmpvalue =M_RemoveWP(chkstr);
	var x;
	if (isNaN(tmpvalue)) return -1;
	if (tmpvalue == "") return -1;
	x = parseInt(tmpvalue,10);
	if (x < minvalue) return -1;
	if (x > maxvalue) return -1;
	return x;
}


//判断chkstr是否在minvalue - maxvalue之间
//如果不在其中，返回 -1
//否则返回 chkstr对应的数字
function G_CheckDouble(chkstr,minvalue,maxvalue) 
{
	var tmpvalue;
	tmpvalue =M_RemoveWP(chkstr);
	var x;
	if (isNaN(tmpvalue)) return -1;
	if (tmpvalue == "") return -1;
	x = parseFloat(tmpvalue,10);
	if (x < minvalue) return -1;
	if (x > maxvalue) return -1;
	return x;
}

//如果chkstr为空,返回 1
function G_CheckEmpty(chkstr) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(chkstr);
	if (tmpvalue == "") return 1;
	return 0;
}


function M_splitField(str){	//以第一个非数字的字符分隔字符串成数组；
	//var breakStr="-";
	var breakArray=new Array();
	var strArray=new Array();
	var j=0;
	for(i=0;i<str.length;i++){
		if (isNaN(str.charAt(i))){
			breakArray[j]=str.charAt(i);
			j++;
		}
	}
	if (breakArray.length==0) return str;
	var breakStr=breakArray[0];
	for (i=0;i<breakArray.length;i++){
		if(breakArray[i]!=breakStr)	
			return breakStr;
	}
	//if (!(checkNum(escape(breakStr),0,9))) return 
	strArray=str.split(breakStr);
	return strArray;
}

function M_splitField_full(str){	//以非数字的字符分隔字符串成数组；
	var breakStr="-";
	var rstr = "";
	
	var strArray=new Array();
	
	if (str == null) return strArray;

	var i;
	for (i=0;i<str.length;i++)
	{
		if ((str.charAt(i)==" ")) {
			rstr=rstr + breakStr;
		}else{
			if ( isNaN(str.charAt(i)) ) rstr=rstr + breakStr;
			else	rstr = rstr + str.charAt(i);
		}
	}
	
	strArray=rstr.split(breakStr);
	return strArray;
}

function G_CheckDate(mdate) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(mdate);
	var strArray=new Array();
	strArray=M_splitField(tmpvalue);
	
	if (strArray.length != 3){
		return false;			
	}
	var i;
	for (i=0;i<strArray.length;i++){

		if (G_CheckNum(strArray[i],M_FirstDate[i],M_LastDate[i])==-1){
			return false;
		}
	}
	if (!isDate(strArray[0],strArray[1],strArray[2]))
	{		
		return false;
	}		
	return true;
}

function G_CheckDate_full(mdate) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(mdate);//除去前后空格 
	
	var strArray=new Array();
	
	strArray=M_splitField_full(tmpvalue);
	
	if ( (strArray.length != 6) && (strArray.length != 3)) {
		return false;			
	}
	
	var i;
	for (i=0;i<strArray.length;i++){
		if (G_CheckNum(strArray[i],M_FirstDate[i],M_LastDate[i])==-1){
			return false;
		}
	}
	
	return true;
}

function G_FormatDate(mdate) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(mdate);
	var strArray=new Array();
	strArray=M_splitField(tmpvalue);
	if (strArray.length != 3){
		return "";			
	}
	var i;
	for (i=0;i<strArray.length;i++){
		if (G_CheckNum(strArray[i],M_FirstDate[i],M_LastDate[i])==-1){
			return "";
		}
	}
	return strArray[0] + "-" + strArray[1] + "-" + strArray[2];
}

function G_FormatDate_full(mdate) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(mdate);
	var strArray=new Array();
	strArray=M_splitField_full(tmpvalue);
	if ( (strArray.length != 6) && (strArray.length != 3) ) {
		return "";			
	}
	var i;
	for (i=0;i<strArray.length;i++){
		if (G_CheckNum(strArray[i],M_FirstDate[i],M_LastDate[i])==-1){
			return "";
		}
	}
	
	if (strArray.length == 3)
		return strArray[0] + "-" + strArray[1] + "-" + strArray[2] + " " + "00:00:00";
	
	if (strArray.length == 6)
		return strArray[0] + "-" + strArray[1] + "-" + strArray[2] + " " + 
			strArray[3] + ":" + strArray[4] + ":" + strArray[5];
}

function G_FormatDate_full_Last(mdate) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(mdate);
	var strArray=new Array();
	strArray=M_splitField_full(tmpvalue);
	if ( (strArray.length != 6) && (strArray.length != 3) ) {
		return "";			
	}
	var i;
	for (i=0;i<strArray.length;i++){
		if (G_CheckNum(strArray[i],M_FirstDate[i],M_LastDate[i])==-1){
			return "";
		}
	}
	
	if (strArray.length == 3)
		return strArray[0] + "-" + strArray[1] + "-" + strArray[2] + " " + "23:59:59";
	
	if (strArray.length == 6)
		return strArray[0] + "-" + strArray[1] + "-" + strArray[2] + " " + 
			strArray[3] + ":" + strArray[4] + ":" + strArray[5];
}


function M_GetDateFromStr(mdate) {
	var tmpvalue;
	tmpvalue =M_RemoveWP(mdate);
	var strArray=new Array();
	strArray=M_splitField(tmpvalue);
	if (strArray.length != 3){
		return null;			
	}
	var i;
	for (i=0;i<strArray.length;i++){
		if (G_CheckNum(strArray[i],M_FirstDate[i],M_LastDate[i])==-1){
			return null;
		}
	}

	var a = new Date(parseInt(strArray[0],10),parseInt(strArray[1],10) - 1,parseInt(strArray[2],10) );
	return a;
}


//检查日期是否大于当前值
function G_CheckDateAfterNow(mdate) {
	var mdate;
	m_date = M_GetDateFromStr(mdate)
	if (m_date == null) return false;
	var today = new Date();
	if (m_date <= today)
		return false;
	return true;
}

function LTrim(str)
{
	if (str.charAt(0) == " ")
	{
		//如果字串左边第一个字符为空格
		str = str.slice(1);//将空格从字串中去掉
		//这一句也可改成 str = str.substring(1, str.length);
		str = LTrim(str); //递归调用
	}
	return str;
}

//去掉字串右边的空格
function RTrim(str)
{
	var iLength;
	iLength = str.length;
	if (str.charAt(iLength - 1) == " ")
	{
		//如果字串右边第一个字符为空格
		str = str.slice(0, iLength - 1);//将空格从字串中去掉
		//这一句也可改成 str = str.substring(0, iLength - 1);
		str = RTrim(str); //递归调用
	}
	return str;
}

//去掉字串两边的空格
function trim(str)
{
	return LTrim(RTrim(str));
}

function isDate(theYear,theMonth,theDay)
{
	//定义年,月,日变量,赋值
	var selYear;
	var selMonth;
	var selDay;
	
	selYear=parseInt(theYear,10);
	selMonth=parseInt(theMonth,10);
	selDay=parseInt(theDay,10);
				
	//定义12月的天数数组,赋值
	var arrMonthDay;
	arrMonthDay=new Array(12);
	arrMonthDay[0]=31;
	arrMonthDay[1]=28;
	arrMonthDay[2]=31;
	arrMonthDay[3]=30;
	arrMonthDay[4]=31;
	arrMonthDay[5]=30;
	arrMonthDay[6]=31;
	arrMonthDay[7]=31;
	arrMonthDay[8]=30;
	arrMonthDay[9]=31;
	arrMonthDay[10]=30;
	arrMonthDay[11]=31;
	
	//判断所选的日期是否合法
	if (arrMonthDay[selMonth-1]>=selDay)
	{
		return(true);
	}
	else
	{				
		//判断是否选为润年的二月			
		if ((selMonth==2)&&(selYear % 4 ==0 ))		
		{			
			if (selDay<=29)
				return(true) ;
			else
				return(false) ;
		}
		else
		{			
			return(false);
		}
	}
}
-->
  // JavaScript Document
  /*var oBao = new ActiveXObject("Microsoft.XMLHTTP");
  oBao.open("POST","Server.asp?sel="+str,false);
  oBao.send();
  //服务器端处理返回的是经过escape编码的字符串.
  //通过XMLHTTP返回数据,开始构建Select.
  BuildSel(unescape(oBao.responseText),document.all.sel2)
  */
  var MESSAGE_TIMEOUT = 500;
  function clearAJAXMessage(){
    if(document.all.m_messagediv!=null){
      document.all.m_messagediv.style.display="none";
      document.all.m_messagediv.innerHTML = "";
    }
  }
  /**
  clear the message div 
  */
  function showAJAXMessage(dispmessage){   
    if(document.all.m_messagediv==null){
    }else{
      document.all.m_messagediv.style.display="block";
      document.all.m_messagediv.innerHTML=dispmessage;
    }
  }
  
  function getResponse(url,data){     
    var oReq = null;
    try{
    oReq = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(ex){     
    oReq = null;
    }
    if(oReq==null){
    	oReq = new XMLHttpRequest();
    	oReq.overrideMimeType('text/xml'); 
    }
    
    oReq.open("POST", url ,false);
    oReq.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded;charset=UTF-8");
    oReq.send(data);
    return oReq.responseText;
    
  }
  
  var cmdspliter = "&";
function  getvalue(parm, key){
             var keyv = cmdspliter+key;
			 var pos1 = parm.indexOf(keyv);
            if (pos1 != -1)
            {
                 var footer = parm.substring(pos1 + keyv.length+1);
                 pos2 = footer.indexOf(this.cmdspliter);
                if (pos2 != -1)
                {
                    return footer.substring(0, pos2);
                }
                else {
                    return footer;
                }
            }
            else {
                return "";
            }
        }
  
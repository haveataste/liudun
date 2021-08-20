(function(){
    var content = document.getElementsByTagName('html')[0].innerHTML;
    var a = document.createElement('a');
    var blob = new Blob([content]);
    a.href = URL.createObjectURL(blob);
    a.download = document.getElementsByTagName('title')[0].innerHTML + '.html';
    //document.body.appendChild(a);
    a.click();
    //document.body.removeChild(a);
})();

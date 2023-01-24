<script>
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    var fs = null, msg = "";

    if(window.requestFileSystem){initFs();}

    function initFs(){
        window.requestFileSystem(
            window.TEMPORARY,
            1024 * 10,
            function(filesystem){
                fs = filesystem;
                document.getElementById("result").innerHTML = "xxx";
            },
            erroHandler
        );
    }

    function erroHandler(e){
        switch(e.code){
            case FileError.NOT_FOUND_ERR:
                msg = "NOT_FOUND_ERR";
                break;
            case FileError.SECURITY_ERR:
                msg = "SECURITY_ERR";
                break;
        };
        document.getElementById("result").innerHTML = "xxx";
    }

    function createFile(){
        var size = document.getElementById("FileSize").value;
        window.webkitRequestFileSystem(
            PERSISTENT,
            size,
            function(fs){
                var fileName = document.getElementById("FileName").value;
                fs.root.getFile(
                    fileName,
                    {create: true},
                    function(fileEntry){
                        var text = "file full path:" + fileEntry.fullPath + '<br>' + "filename:" + fileEntry.name + "<br>";
                        document.getElementById("result").innerHTML = text;
                    }
                )
            }
        )
    }
</script>
<form>
    <input type="text" id="FileSize" value="1024">
    <br>
    <input type="text" id="FileName" value="file.txt">
    <br>
    <input type="button" value="create_file" onclick="createFile()">
</form>

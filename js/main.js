// Check for the various File API support.
if ( !(window.File && window.FileReader && window.FileList && window.Blob ) ) {
  alert('The File APIs are not fully supported in this browser.');
}
if ( !FileReader ){
    alert("sorry, no filereader!");
}

$(document).ready( function() {
    var settings, videoFiles;

    $("#btnBrowse").click( function() {
        console.log("button was clicked");
    } );

    $("input[type=file]").change( function(e){
        var fileList, currentFile, fileName, fileType;
        

        fileList = $(this)[0].files;
        for ( index in fileList ) {
            currentFile = fileList[index];
            fileName    = currentFile.name;
            fileType    = currentFile.type;

            if( fileName && fileType ){
                //console.log( fileList[index] );
                if ( fileType.indexOf("video") > -1 ) {
                    console.log("video found: " + fileName);
                }
                
                if ( fileType.indexOf("xml") > -1 && fileName.indexOf("settings") > -1 ){
                    readSettingsFile( currentFile );
                }
            }
        }
    } );

} );

function readSettingsFile( fileRef ) {
    console.log("readSettingsFile()");
    var xmlText = "";
    var reader  = new FileReader();
    reader.onload = function(e) {
        console.log(e.target.result);
        readSettingsXml( e.target.result );
    }
    reader.readAsText(fileRef);

}

function readSettingsXml( xmlContent ) {
    var xmlDoc = $.parseXML( xmlContent);
    console.log( xmlDoc );
}
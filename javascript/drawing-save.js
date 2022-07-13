
$("#drawing-save").click(function () {
    $("#canvas-real").get(0).toBlob(function (blob) {
        saveAs(blob, "myIMG.png");
    });
});
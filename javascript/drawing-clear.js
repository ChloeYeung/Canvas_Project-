$("#clear").on("click", function () {
    history.saveState(canvasReal);
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    document.querySelector("#canvas-real").style.backgroundImage = ``
})
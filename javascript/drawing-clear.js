$("#clear").on("click", function(){
    history.saveState(canvasReal);
    // contextReal.clearRect(0,0,canvasReal.width,canvasReal.height);
    // contextDraft.clearRect(0,0,canvasReal.width,canvasReal.height);



    contextReal.save();

// Use the identity matrix while clearing the canvas
contextReal.setTransform(1, 0, 0, 1, 0, 0);
contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);

// Restore the transform
contextReal.restore();
})
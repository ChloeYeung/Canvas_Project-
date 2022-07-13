class DrawingDottedLine extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event){
        history.saveState(canvasReal);
        this.contextDraft.lineWidth = $("#lineWidth").val();
        this.contextDraft.strokeStyle = $("#colorStroke").val();
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event){
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height); //To erase the pixels after its called or will cause uninteded side effects.
        this.contextDraft.setLineDash([20,5]);
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
       
    }
    onMouseMove() {}

    onMouseUp(coord,event) {
        this.contextReal.lineWidth = $("#lineWidth").val();
        this.contextReal.strokeStyle = $("#colorStroke").val();
        this.contextReal.beginPath();
         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height); //Can set to clear the pixels after its called
        this.contextReal.setLineDash([20,5]);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
        


    }
    onMouseLeave() {}
    onMouseEnter() {}
}
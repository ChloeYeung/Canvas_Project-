class DrawingQuadraticCurve extends PaintFunction{
    constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.onClick = 0;
  }

  onMouseDown(coord, event) {
    history.saveState(canvasReal);
    if (this.onClick === 0) {
      this.contextReal.strokeStyle = strokeColor;
      this.contextDraft.strokeStyle = strokeColor;
      this.contextReal.lineWidth = $("#lineWidth").val();
      this.contextDraft.lineWidth = $("#lineWidth").val();
      this.origX = coord[0];
      this.origY = coord[1];
      this.contextReal.beginPath();
      this.contextDraft.setLineDash([]);
      this.contextReal.setLineDash([]);
      this.contextReal.moveTo(this.origX, this.origY);
      console.log("on click 0");
     
    }
    else if (this.onClick === 1) {
        console.log("on click 1");
    }
  }

  onDragging(coord, event) {

    if (this.onClick === 0) {
      this.endX = coord[0];
      this.endY = coord[1];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(this.origX, this.origY, this.endX, this.endY);
      this.contextDraft.stroke();
      console.log("when 0")
    } else if (this.onClick === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.contextDraft.stroke();
      console.log("when 1")
    }
  }

  onMouseUp(coord, event) {
    if (this.onClick === 0) {
      this.onClick = 1;
      console.log("on mouse up 0")
    } else if (this.onClick === 1) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.contextReal.stroke();
      this.onClick = 0;
      console.log("on mouse up 1")
    }
  }
}

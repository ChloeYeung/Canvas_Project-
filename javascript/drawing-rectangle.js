/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 * This class extends the PaintFunction class, which you can find in canvas-common
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    history.saveState(canvasReal);
    this.contextDraft.fillStyle = fillColor;
    this.contextDraft.strokeStyle = strokeColor;
    this.contextDraft.lineWidth = $("#lineWidth").val();
    this.contextDraft.setLineDash([]);
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    // Manipulating the context draft
    
    // Allows you to actually draw out your squares
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
    this.contextDraft.fillRect(this.origX,this.origY,coord[0] - this.origX, coord[1] - this.origY);
    this.contextDraft.strokeRect(this.origX,this.origY,coord[0] - this.origX, coord[1] - this.origY);
  }

  onMouseMove() {}

  // Committing the element to the canvas
  onMouseUp(coord) {
    // Clearing the rectangle first
    this.contextReal.fillStyle = fillColor;
    this.contextReal.strokeStyle = strokeColor;
    this.contextReal.lineWidth = $("#lineWidth").val();
    this.contextReal.setLineDash([]);
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    // Commit that drawing to context real
    // Without this commit, it won't actually draw
    this.contextReal.fillRect(this.origX,this.origY,coord[0] - this.origX,coord[1] - this.origY);
    this.contextReal.strokeRect(this.origX,this.origY,coord[0] - this.origX, coord[1] - this.origY);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}

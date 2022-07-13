class DrawingEraser extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

    }

    onMouseDown(coord, event) {
        history.saveState(canvasReal);

        this.contextDraft.lineWidth = 5;
        this.contextReal.fillStyle = "white";
        this.origX = coord[0];
        this.origY = coord[1];

        this.contextDraft.fillStyle = "white";
        this.contextDraft.strokeStyle = "black";
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, 50, 0, 2 * Math.PI, false);
        this.contextDraft.fill();
        this.contextDraft.stroke();

        this.contextReal.beginPath();
        this.contextReal.arc(coord[0], coord[1], 50, 0, 2 * Math.PI, false);
        this.contextReal.fill();

    }

    onDragging(coord, event) {

        // Manipulating the context draft
        // Allows you to actually draw out your squares
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
        // Pass in the original x and y coordinates, followed by the new coordinates that we get for position x and y
        //   this.contextDraft.fillRect(
        //     this.origX,
        //     this.origY,
        //     coord[0] - this.origX,
        //     coord[1] - this.origY
        //   );
        this.contextDraft.beginPath();
        this.contextDraft.arc(coord[0], coord[1], 50, 0, 2 * Math.PI, false);
        this.contextDraft.stroke();



        this.contextReal.beginPath();
        this.contextReal.arc(coord[0], coord[1], 50, 0, 2 * Math.PI, false);
        this.contextReal.fill();


    }


    // Committing the element to the canvas
    onMouseUp(coord) {

        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );


    }

    onMouseLeave(coord) {
        this.contextDraft.clearRect(
            0,
            0,
            canvasDraft.width,
            canvasDraft.height
        );
    }

}

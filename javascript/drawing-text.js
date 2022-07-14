class DrawingText extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.org_x_textBox;
        this.org_y_textBox;
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.canvas_text = document.getElementById('canvas-draft'),
            this.ctx_text = this.canvas_text.getContext('2d');
        this.font;
    }

    addInput(x, y) {
        var input = document.createElement('input');

        input.type = 'text';
        input.style.position = "absolute"; // fixes el relative to page. Could use absolute.
        input.style.left = (x - (window.innerWidth - canvasReal.width) + 300) + "px";
        input.style.top = (y - (window.innerHeight - canvasReal.height) + 250) + "px";

        input.onkeydown = handleEnter;

        document.body.appendChild(input);

        this.input.focus();

        hasInput = true;

        history.saveState(canvasReal);


        function handleEnter(e) {
            var keyCode = e.keyCode;
            if (keyCode === 13) {
                let ctx_text = document.getElementById('canvas-real').getContext('2d');
                // this.font = `40px sans-serif`,
                const size_text = ($("#lineWidth").val()) * 5;
                ctx_text.font = `${size_text}px Verdana`;
                ctx_text.fillStyle = fillColor;
                ctx_text.fillText(this.value, x, y);
                document.body.removeChild(this);
                hasInput = false;
            }
        }
    }

    onMouseDown(coord, event) {
        history.saveState(canvasReal);

        this.hasInput = false;

        this.org_x_textBox = coord[0];
        this.org_y_textBox = coord[1];

        if (this.hasInput) return;
        this.addInput(coord[0], coord[1]);
    }
}

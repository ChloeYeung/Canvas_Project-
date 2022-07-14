/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
// HEIGHT & WIDTH OF CANVAS REAL
canvasReal.width = 1200;
canvasReal.height = 800;
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
// HEIGHT & WIDTH OF CANVAS DRAFT
canvasDraft.width = 1200;
canvasDraft.height = 800;
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;

let dragging = false;
//Fill Color Section
let fillColor = "red";
function change_color(element) {
  fillColor = element.style.background;
}
//Fill Color but with the spectrum input
function change_color_by_spectrum() {
  fillColor = $("#colorFill").val();
}

let blue = "blue";
let red = "red";
let grey = "grey";
//End of Fill Color



$("#canvas-draft").mousedown(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

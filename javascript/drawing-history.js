class DrawingHistory {
    constructor() {
      this.redo_list = [];
      this.undo_list = [];
    }

    saveState = function (canvasReal, list, keep_redo) {
      keep_redo = keep_redo || false;
      if (!keep_redo) {
        this.redo_list = [];
      }

      (list || this.undo_list).push(canvasReal.toDataURL());
    };

    undo = function (canvasReal, contextReal) {
      this.restoreState(canvasReal, contextReal, this.undo_list, this.redo_list);
    };

    redo = function (canvasReal, contextReal) {
      this.restoreState(canvasReal, contextReal, this.redo_list, this.undo_list);
    };

    restoreState = function (canvasReal, contextReal, pop, push) {
      if (pop.length) {
        this.saveState(canvasReal, push, true);
        var restore_state = pop.pop();
 
        var img = document.createElement('img');
        img.src = restore_state;

        img.onload = function () {
          contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
          contextReal.drawImage(img, 0, 0, canvasReal.width, canvasReal.height, 0, 0, canvasReal.width, canvasReal.height);
        }
      }
    };
  }
  let history = new DrawingHistory();
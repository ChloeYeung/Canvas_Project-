



$('#icon-upload').click(function () { $('#image_input').trigger('click'); });

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
    let background = new Image();


    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
       
        var image = new Image();
        image.src = reader.result;

        image.onload = function () {
            history.saveState(canvasReal);
            // for (let i = 0; i < history.undo_list.length; i++)
            //     history.undo(canvasReal, contextReal);

            contextReal.drawImage(image, 0, 0);

            // for (let i = 0; i < history.undo_list.length; i++)
            //     history.redo(canvasReal, contextReal);
        };

        background.src = reader.result;
        uploaded_image = reader.result;
        // document.querySelector("#canvas-real").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);




});

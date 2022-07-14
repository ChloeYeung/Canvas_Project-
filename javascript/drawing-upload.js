$('#icon-upload').click(function(){ $('#image_input').trigger('click'); });

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#canvas-real").style.backgroundImage = `url(${uploaded_image})`
    });
    reader.readAsDataURL(this.files[0]);
});

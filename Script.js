window.onload = function () {
    initColorPicker();

};

function initColorPicker(){
    let colorbox = document.getElementById("color-box")
    let rgb = {
        red : document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")

    };
    let colopickers = document.getElementsByClassName("picker")
    setcolorpickereventlisteners(colorbox, rgb, colopickers);
}

function setcolorpickereventlisteners (element, colors, pickerElements) {

       let pickerlen = pickerElements.length;

        for (let i = 0; i < pickerlen ; i++) {
            pickerElements[i].addEventListener('change', () => {
                let red = colors.red.value;
                let green = colors.green.value;
                let blue = colors.blue.value;
                setelementBGcolor(element, red, green, blue)
                setdisplayvalues(red, green, blue)


            })


            function setelementBGcolor(bgelement, red, green, blue) {
               let rgbVal = [red, green, blue].join(',');
                bgelement.style.backgroundColor = "rgb(" + rgbVal + ")";
            }
        }

function setdisplayvalues(red, green, blue) {
    let redVal = document.getElementById("redVal")
    let greenVal = document.getElementById("greenVal")
    let blueVal = document.getElementById("blueVal")
    redVal.innerText = red;
        greenVal.innerText = green;
            blueVal.innerText = blue;
}






}


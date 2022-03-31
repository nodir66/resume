//name
let name1 = document.getElementById("name1");
let namee = document.getElementById("namee");

function display(source, destination) {
    destination.textContent = source;
}

namee.onkeyup = function () {
    display(this.value, name1);
};

//year

let data1 = document.getElementById("data1");
let data = document.getElementById("data");

function display(source, destination) {
    destination.textContent = source;
}

data.onkeyup = function () {
    display(this.value, data1);
};

//adreas

let adreas1 = document.getElementById("adreas1");
let adreas = document.getElementById("adreas");

function display(source, destination) {
    destination.textContent = source;
}

adreas.onkeyup = function () {
    display(this.value, adreas1);
};

//radio

$(".radio").change(function () {
    if (this.value == "Orta maxsus") {
        $(".radio2").show();
        $(".radio3").hide();
    } else if (this.value == "Oliy") {
        $(".radio2").hide();
        $(".radio3").show();
    }
});

//institute

let std1 = document.getElementById("std1");
let std = document.getElementById("std");

function display(source, destination) {
    destination.textContent = source;
}

std.onkeyup = function () {
    display(this.value, std1);
};

//facultet

let fkl1 = document.getElementById("fkl1");
let fkl = document.getElementById("fkl");

function display(source, destination) {
    destination.textContent = source;
}

fkl.onkeyup = function () {
    display(this.value, fkl1);
};

//study year

let year1 = document.getElementById("year1");
let year = document.getElementById("year");

function display(source, destination) {
    destination.textContent = source;
}

year.onkeyup = function () {
    display(this.value, year1);
};

//work

let workk1 = document.getElementById("workk1");
let work1 = document.getElementById("work1");

function display(source, destination) {
    destination.textContent = source;
}

work1.onkeyup = function () {
    display(this.value, workk1);
};

let workk2 = document.getElementById("workk2");
let work11 = document.getElementById("work11");

function display(source, destination) {
    destination.textContent = source;
}

work11.onkeyup = function () {
    display(this.value, workk2);
};

//interesting

let interest1 = document.getElementById("interest1");
let interest = document.getElementById("interest");

function display(source, destination) {
    destination.textContent = source;
}

interest.onkeyup = function () {
    display(this.value, interest1);
};

//information

let info1 = document.getElementById("info1");
let info = document.getElementById("info");

function display(source, destination) {
    destination.textContent = source;
}

info.onkeyup = function () {
    display(this.value, info1);
};

//tell

let tel1 = document.getElementById("tel1");
let tel = document.getElementById("tel");

function display(source, destination) {
    destination.textContent = source;
}

tel.onkeyup = function () {
    display(this.value, tel1);
};

//foto

function previewImage(input) {
    let preview = document.getElementById("preview");
    let imgForm = document.getElementById("filehandler");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            let imgPrevieww = document.getElementById("imgprevieww");
            let imgPreview = document.getElementById("imgpreview");
            imgPrevieww.setAttribute("src", e.target.result);
            imgPreview.setAttribute("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        imgPreview.setAttribute(
            "src",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftanzolymp.com%2F%3Fattachment_id%3D4420&psig=AOvVaw2qk090WUcsPhiWWC8Hb49P&ust=1647100788130000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjv_ty2vvYCFQAAAAAdAAAAABAD"
        );
    }
}

// download pdf

$("#downloadPDF").click(function () {
    // $("#content2").addClass('ml-215'); // JS solution for smaller screen but better to add media queries to tackle the issue
    getScreenshotOfElement(
        $("div#content2").get(0),
        0,
        0,
        $("#content2").width() + 45, // added 45 because the container's (content2) width is smaller than the image, if it's not added then the content from right side will get cut off
        $("#content2").height() + 300, // same issue as above. if the container width / height is changed (currently they are fixed) then these values might need to be changed as well.
        function (data) {
            var pdf = new jsPDF("l", "pt", [
                $("#content2").width(),
                $("#content2").height(),
            ]);

            pdf.addImage(
                "data:image/png;base64," + data,
                "PNG",
                0,
                0,
                $("#content2").width(),
                $("#content2").height()
            );
            pdf.save("azimuth-certificte.pdf");
        }
    );
});

// this function is the configuration of the html2cavas library (https://html2canvas.hertzen.com/)
// $("#content2").removeClass('ml-215'); is the only custom line here, the rest comes from the library.
function getScreenshotOfElement(element, posX, posY, width, height, callback) {
    html2canvas(element, {
        onrendered: function (canvas) {
            // $("#content2").removeClass('ml-215');  // uncomment this if resorting to ml-125 to resolve the issue
            var context = canvas.getContext("2d");
            var imageData = context.getImageData(
                posX,
                posY,
                width,
                height
            ).data;
            var outputCanvas = document.createElement("canvas");
            var outputContext = outputCanvas.getContext("2d");
            outputCanvas.width = width;
            outputCanvas.height = height;

            var idata = outputContext.createImageData(width, height);
            idata.data.set(imageData);
            outputContext.putImageData(idata, 0, 0);
            callback(
                outputCanvas.toDataURL().replace("data:image/png;base64,", "")
            );
        },
        width: width,
        height: height,
        useCORS: true,
        taintTest: false,
        allowTaint: false,
    });
}

// <!--begin:: QR CODE JS -->

/* JS comes here */
var qr;
(function() {
    document.getElementById("qr-code").style.display = "none";
    qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 500,
        value: ''
    });
})();

function generateQRCode() {
    var loc = window.location;
    // var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    var qrtext = loc.href;
    if (loc.host != null) {
        document.getElementById("qr-code").style.display = "block";
        // document.getElementById("qr-text").innerHTML = "QR code for :" + qrtext + ".";
        qr.set({
            foreground: 'black',
            size: 500,
            value: qrtext
        });
    } else {
        document.getElementById("qr-code").style.display = "block";
        document.getElementById("qr-code").innerHTML = "Internet ERROR! Please check your internet";

    }
}

// <!--end:: QR CODE JS -->
// <!-- Download image QR_Code -->

// Convert canvas to image
(function() {
    document.getElementById('btn-download').addEventListener("click", function(e) {
        //qr code
        var canvas = document.querySelector('#qr-code');
        var dataURL = canvas.toDataURL("image/png", 1.0);
        downloadImage(dataURL, 'QR_Code.png');
    });
})();

// Save | Download image
function downloadImage(data, filename = 'QR_Code.png') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}

// <!-- Download image QR_Code -->
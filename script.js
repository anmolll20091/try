document.addEventListener("DOMContentLoaded", function () {
    var upiId = "anmolmalik2024@ybl";
    var qrCodeContainer = document.getElementById("qrcode");

    // Clear any existing QR code
    qrCodeContainer.innerHTML = "";

    // Generate QR code for UPI payment with updated design
    var qrCode = new QRCode(qrCodeContainer, {
        text: "upi://pay?pa=" + encodeURIComponent(upiId) + "&pn=Payee",
        width: 220,
        height: 220,
        colorDark: "#4a90e2",  // modern blue color
        colorLight: "#f0f4f8", // light background color
        correctLevel: QRCode.CorrectLevel.H
    });

    // Add event listeners for specific UPI app buttons
    var phonePeBtn = document.getElementById("phonePeBtn");
    var googlePayBtn = document.getElementById("googlePayBtn");
    var paytmBtn = document.getElementById("paytmBtn");

    phonePeBtn.addEventListener("click", function () {
        var phonePeUrl = "phonepe://pay?pa=" + encodeURIComponent(upiId);
        window.location.href = phonePeUrl;
    });

    googlePayBtn.addEventListener("click", function () {
        var googlePayUrl = "tez://upi/pay?pa=" + encodeURIComponent(upiId);
        window.location.href = googlePayUrl;
    });

    paytmBtn.addEventListener("click", function () {
        var paytmUrl = "paytmmp://pay?pa=" + encodeURIComponent(upiId);
        window.location.href = paytmUrl;
    });
});

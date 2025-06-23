document.addEventListener("DOMContentLoaded", function () {
    var upiId = "anmolmalik2024@ybl";
    var qrCodeContainer = document.getElementById("qrcode");
    var amountInput = document.getElementById("amountInput");
    var errorMessage = document.getElementById("errorMessage");
    var bankAmountLimit = 10000; // Example bank amount limit

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

    function handlePaymentClick(baseUrl) {
        var amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            errorMessage.textContent = "Please enter a valid amount.";
            return;
        }
        if (amount > bankAmountLimit) {
            errorMessage.textContent = "Bank amount limit exceeds.";
            return;
        }
        errorMessage.textContent = "";
        var paymentUrl = baseUrl + "?pa=" + encodeURIComponent(upiId) + "&am=" + amount.toFixed(2);
        window.location.href = paymentUrl;
    }

    phonePeBtn.addEventListener("click", function () {
        handlePaymentClick("phonepe://pay");
    });

    googlePayBtn.addEventListener("click", function () {
        handlePaymentClick("tez://upi/pay");
    });

    paytmBtn.addEventListener("click", function () {
        handlePaymentClick("paytmmp://pay");
    });
});

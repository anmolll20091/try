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

    // Add event listener for Pay by App button
// Get the button element
var payByAppBtn = document.getElementById("payByAppBtn");

// Add click event listener
payByAppBtn.addEventListener("click", function () {
    var upiId = "anmolmalik2024@ybl"; // Your UPI ID
    var payeeName = "Anmol Malik"; // Replace with your name (optional)
    
    // Generate UPI URL with encoded parameters
    var upiUrl = "upi://pay?pa=" + encodeURIComponent(upiId) + 
                "&pn=" + encodeURIComponent(payeeName) + 
                 "&cu=INR"; // Currency (INR for Indian Rupees)
    
    // Redirect to UPI URL (opens supported apps like GPay/PhonePe)
    window.location.href = upiUrl;
    
    // Fallback for browsers that don't support UPI links
    setTimeout(function() {
        alert("If the UPI app didn't open, please manually enter this UPI ID: " + upiId);
    }, 1000);
    });
});

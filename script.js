document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('qrForm');
    const textInput = document.getElementById('textInput');
    const qrcodeContainer = document.getElementById('qrcode');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const text = textInput.value.trim();
        if (text) {
            qrcodeContainer.innerHTML = ''; // Clear previous QR code
            new QRCode(qrcodeContainer, {
                text: text,
                width: 256,
                height: 256
            });
        } else {
            alert('Please enter some text.');
        }
    });
});

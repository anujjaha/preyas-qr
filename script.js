// DOM Elements
const urlInput = document.getElementById('url-input');
const generateBtn = document.getElementById('generate-btn');
const qrDisplay = document.getElementById('qr-display');
const qrcodeDiv = document.getElementById('qrcode');
const actionsDiv = document.getElementById('actions');
const generatedLinkDiv = document.getElementById('generated-link');
const redirectUrlInput = document.getElementById('redirect-url');
const downloadBtn = document.getElementById('download-btn');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');

let qrCode = null;

// Validate URL
function isValidUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
        return false;
    }
}

// Generate QR Code
function generateQRCode() {
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a URL');
        return;
    }

    if (!isValidUrl(url)) {
        alert('Please enter a valid URL (must start with http:// or https://)');
        return;
    }

    // Clear previous QR code
    qrcodeDiv.innerHTML = '';
    
    // Get current base URL
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
    const redirectUrl = `${baseUrl}redirect.html?url=${encodeURIComponent(url)}`;

    // Generate new QR code
    qrCode = new QRCode(qrcodeDiv, {
        text: redirectUrl,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Update UI
    document.querySelector('.info-text').style.display = 'none';
    actionsDiv.style.display = 'flex';
    generatedLinkDiv.style.display = 'block';
    redirectUrlInput.value = redirectUrl;
}

// Download QR Code
function downloadQRCode() {
    const canvas = qrcodeDiv.querySelector('canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL();
        link.click();
    } else {
        // Fallback to image if canvas not available
        const img = qrcodeDiv.querySelector('img');
        if (img) {
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = img.src;
            link.click();
        }
    }
}

// Clear QR Code
function clearQRCode() {
    qrcodeDiv.innerHTML = '';
    urlInput.value = '';
    actionsDiv.style.display = 'none';
    generatedLinkDiv.style.display = 'none';
    document.querySelector('.info-text').style.display = 'block';
    qrCode = null;
}

// Copy to Clipboard
function copyToClipboard() {
    redirectUrlInput.select();
    redirectUrlInput.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(redirectUrlInput.value).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        alert('Failed to copy: ' + err);
    });
}

// Event Listeners
generateBtn.addEventListener('click', generateQRCode);
downloadBtn.addEventListener('click', downloadQRCode);
clearBtn.addEventListener('click', clearQRCode);
copyBtn.addEventListener('click', copyToClipboard);

// Allow Enter key to generate QR code
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateQRCode();
    }
});

# Preyas QR - QR Code Redirection System

A simple and elegant QR code generator with URL redirection functionality.

## Features

- **QR Code Generation**: Create QR codes for any URL
- **Automatic Redirection**: QR codes redirect users through a custom redirection page
- **Download QR Codes**: Save generated QR codes as PNG images
- **Copy Links**: Easy copy-to-clipboard functionality for redirect URLs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## Usage

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/anujjaha/preyas-qr.git
   cd preyas-qr
   ```

2. Open `index.html` in your web browser, or serve it using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

### How to Use

1. **Generate QR Code**:
   - Open the application in your browser
   - Enter the URL you want to redirect to (must start with http:// or https://)
   - Click "Generate QR Code"
   - Your QR code will appear on the screen

2. **Download QR Code**:
   - After generating a QR code, click the "Download QR Code" button
   - The QR code will be saved as `qrcode.png`

3. **Share Redirect Link**:
   - Copy the generated redirect link using the "Copy" button
   - Share this link directly or use the QR code

4. **Clear and Start Over**:
   - Click the "Clear" button to reset and generate a new QR code

### How It Works

The system consists of two main pages:

1. **index.html** - The main page where users generate QR codes
   - Users enter their target URL
   - A QR code is generated with a redirect link
   - The redirect link points to `redirect.html` with the target URL as a parameter

2. **redirect.html** - The redirection page
   - Validates the URL parameter
   - Shows a loading animation
   - Automatically redirects users to the target URL after 3 seconds
   - Provides a manual link if automatic redirection fails

## Files

- `index.html` - Main QR code generator page
- `redirect.html` - Redirection page for QR code scanning
- `styles.css` - Styling for both pages
- `script.js` - JavaScript logic for QR code generation and interaction
- `README.md` - This file

## Technologies Used

- HTML5
- CSS3 (with gradients and animations)
- JavaScript (ES6+)
- QRCode.js library (included locally)

## License

This project is open source and available for use.

## Author

Anuj Jaha

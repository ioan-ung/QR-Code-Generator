# 🔲 QR Code Generator

A simple, elegant web application for generating QR codes from text or URLs. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Simple Input**: Enter any text or URL to generate a QR code
- **Beautiful UI**: Modern gradient design with smooth animations
- **Instant Generation**: Generate QR codes on demand using QR Server API
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Easy Navigation**: Quick back button to generate new codes

## 🚀 Live Demo

Open `index.html` in your browser to start generating QR codes!

## 📋 How to Use

1. **Enter Text/URL**: Type any text or URL in the input field
2. **Generate**: Click the "Generate QR Code" button
3. **View Result**: Your QR code will appear with the entered text displayed
4. **Generate Another**: Click the back button to return to the input screen

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: QR Server API (`https://api.qrserver.com/`)
- **Styling**: CSS Grid & Flexbox with gradient backgrounds

## 📁 Project Structure

```
.
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # QR code generation logic
└── back.svg        # Back button icon
```

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/ioan-ung/QR-Code-Generator.git
```

2. Navigate to the directory:
```bash
cd QR-Code-Generator
```

3. Open `index.html` in your browser

## 🎨 Features Breakdown

### User Interface
- **Card Layout**: Clean input form with modern styling
- **Gradient Background**: Purple-to-violet gradient for visual appeal
- **Smooth Animations**: Fade-in effects when switching between screens
- **Responsive Input**: Focus states and hover effects for better UX

### Functionality
- Converts user input into encoded QR code URL
- Displays QR code via QR Server API
- Toggle between input and QR display screens
- Clear input field when returning to home screen

## 🔧 Configuration

The QR code size can be adjusted in `script.js`:
```javascript
const path = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
```
Change `150x150` to your desired dimensions (e.g., `200x200`, `300x300`)

## 📱 Browser Support

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid & Flexbox
- Fetch API

## 📝 License

Feel free to use, modify, and distribute this project.

## 🤝 Contributing

Found a bug or have an idea? Feel free to open an issue or submit a pull request!

---

**Created by:** [ioan-ung](https://github.com/ioan-ung)

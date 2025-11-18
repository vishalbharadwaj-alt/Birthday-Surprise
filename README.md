# Birthday Surprise 🎂💫

A heartfelt interactive birthday celebration website featuring an animated cake, floating hearts, and a personalized message with instrumental background music.

## Features

✨ **Interactive Cake** — Click the cake to cut it and reveal a heart with the birthday person's name.

💖 **Beating Heart Animation** — A vibrant red heart beats in the center of the screen with the recipient's name centered and upright.

🎵 **Background Instrumental Music** — An instrumental "Happy Birthday" plays in the background, with fallback to synthesized melody if MP3 is unavailable.

❤️ **Floating Hearts** — Animated floating hearts appear when you send love or click the surprise button.

✨ **Particle Effects** — Beautiful particles float across the screen creating a festive atmosphere.

📱 **Responsive Design** — Fully responsive and works on desktop, tablet, and mobile browsers.

🎁 **Special Surprise** — A heartfelt message appears when you click the "Click for a Special Surprise" button.

## Project Structure

```
Birthday-Surprise/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main stylesheet
│   ├── cake.css              # Cake animation styles
│   └── heart-animation.css   # Heart and cake reveal styles
├── js/
│   └── script.js             # All interactive functionality
├── assets/
│   └── happy-birthday-instrumental.mp3  # (Optional) Place your instrumental here
├── README.md                  # This file
└── .gitignore                # Git ignore file
```

## How to Use

### Local Preview
1. Open `index.html` in your browser directly, or
2. Run a local HTTP server:
   ```bash
   python -m http.server 5500
   ```
   Then visit `http://localhost:5500`

### Add Custom Music
Place your instrumental MP3 at:
```
assets/happy-birthday-instrumental.mp3
```

If no MP3 is present, the site automatically falls back to a synthesized instrumental melody.

### Customize the Name
Edit `index.html` and change the text in the `.heart-text` span:
```html
<span class="heart-text">Your Name Here</span>
```

## Features in Detail

### The Cake
- Click anywhere on the cake to cut it in half.
- After cutting, the cake halves animate outward, revealing a beating heart.
- Sparkles and decorative elements appear throughout the animation.

### The Heart
- The heart beats in place (centered, no drift).
- The name inside the heart is upright and centered.
- Appears after the cake is cut with a smooth scale-in animation.

### The Music
- Click **"Send More Love"** or **"Play Song ▶️"** to start the music.
- If the browser blocks autoplay, manual player controls appear.
- If no MP3 file is provided, a synthesized "Happy Birthday" melody plays automatically.

### The Surprise
- Click **"Click for a Special Surprise"** to reveal a heartfelt message.
- Floating hearts animate upward as the message appears.

## Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Animations, gradients, flexbox, grid
- **JavaScript (Vanilla)** — No dependencies; interactive elements and synthesizer
- **Web Audio API** — Synthesized instrumental fallback
- **Particles.js** — Particle effects background

## Browser Support

Works on all modern browsers:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Customize

### Colors
Edit `css/style.css`, `css/cake.css`, and `css/heart-animation.css` to change colors, animations, and sizes.

### Timing
Adjust animation durations in CSS (e.g., `1.2s`, `0.8s`) or JavaScript timeouts.

### Message
Edit the birthday wishes in `index.html` within the `.birthday-wishes` div.

## Live Demo

Once GitHub Pages is enabled, visit:
```
https://vishalbharadwaj-alt.github.io/Birthday-Surprise/
```

## License

This project is open source. Feel free to customize and share!

---

Made with ❤️ for special occasions.

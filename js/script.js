document.addEventListener('DOMContentLoaded', function() {
    // Cake animation
    const cake = document.getElementById('cake');
    let isCut = false;

    cake.addEventListener('click', function() {
        if (!isCut) {
            const cakeElement = cake.querySelector('.cake');
            const heartReveal = cake.querySelector('.heart-reveal');
            const heart = cake.querySelector('.heart');
            const heartText = cake.querySelector('.heart-text');
            
            // Add cutting animation
            cakeElement.classList.add('cut');
            
            // Create sparkles
            for (let i = 0; i < 20; i++) {
                createSparkle();
            }
            
            // Reveal heart after cake splits
            setTimeout(() => {
                heartReveal.classList.add('visible');
                heart.classList.add('visible');
                
                // Add sparkles around the heart
                const interval = setInterval(() => {
                    createSparkle(true);
                }, 200);
                
                setTimeout(() => {
                    clearInterval(interval);
                }, 2000);
                
                // Show the name
                setTimeout(() => {
                    heartText.classList.add('visible');
                }, 500);
            }, 800);
            
            isCut = true;
        }
    });
    
    function createSparkle(aroundHeart = false) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkles';
        
        if (aroundHeart) {
            sparkle.style.left = 50 + Math.random() * 200 + 'px';
            sparkle.style.top = 50 + Math.random() * 200 + 'px';
        } else {
            sparkle.style.left = Math.random() * 200 + 'px';
            sparkle.style.top = Math.random() * 200 + 'px';
        }
        
        cake.appendChild(sparkle);
        
        setTimeout(() => {
            cake.removeChild(sparkle);
        }, 1000);
    }
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: false,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                outModes: { default: 'bounce' },
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onHover: { enable: true, mode: 'grab' },
                onClick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, lineLinked: { opacity: 1 } },
                push: { quantity: 4 }
            }
        },
        retina_detect: true
    });

    // Birthday countdown
    const birthdayDate = new Date('November 26, 2025 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (document.getElementById('countdown')) {
            document.getElementById('countdown').innerHTML = 
                `${days}d ${hours}h ${minutes}m ${seconds}s until your special day!`;
        }
    }

    // Add surprise button functionality
    const surpriseBtn = document.getElementById('surpriseBtn');
    const wishes = document.getElementById('wishes');
    let isWishesVisible = false;

    surpriseBtn.addEventListener('click', function() {
        if (!isWishesVisible) {
            wishes.classList.remove('hidden');
            setTimeout(() => {
                wishes.classList.add('visible');
                // Add animation delays to each paragraph
                const paragraphs = wishes.querySelectorAll('.heartfelt-message p');
                paragraphs.forEach((p, index) => {
                    p.style.setProperty('--i', index + 1);
                });
            }, 100);
            
            // Add floating hearts animation
            createFloatingHearts();
            
            surpriseBtn.textContent = 'Send More Love ❤️';
            isWishesVisible = true;
        } else {
            createFloatingHearts();
        }
    });

    function createFloatingHearts() {
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animation = `floating ${Math.random() * 2 + 3}s ease-in forwards`;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                document.body.removeChild(heart);
            }, 5000);
        }
    }

    // Start the countdown
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Add styles for the floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floating {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Audio and "Send More Love" handling with explicit controls and debug logs
const birthdayAudio = document.getElementById('birthdayAudio');
const sendLoveBtn = document.getElementById('sendLoveBtn');
const audioToggleBtn = document.getElementById('audioToggleBtn');
const loveMessage = document.getElementById('loveMessage');

function updateAudioButton() {
    if (!birthdayAudio || !audioToggleBtn) return;
    audioToggleBtn.textContent = birthdayAudio.paused ? 'Play Song ▶️' : 'Pause ⏸️';
}

if (birthdayAudio) {
    birthdayAudio.addEventListener('play', () => {
        console.log('birthdayAudio: play event');
        updateAudioButton();
    });
    birthdayAudio.addEventListener('pause', () => {
        console.log('birthdayAudio: pause event');
        updateAudioButton();
    });
    birthdayAudio.addEventListener('error', (e) => {
        console.error('birthdayAudio: error', e);
    });
    console.log('birthdayAudio element found:', birthdayAudio.src);
} else {
    console.warn('birthdayAudio element not found — check `index.html`');
}

if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
        if (!birthdayAudio) {
            alert('No audio file found. Please add `assets/happy-birthday-instrumental.mp3`.');
            return;
        }
        console.log('audioToggleBtn clicked — paused:', birthdayAudio.paused);
        if (birthdayAudio.paused) {
            const p = birthdayAudio.play();
            if (p && p.catch) p.catch(err => {
                console.warn('Play blocked:', err);
                birthdayAudio.controls = true;
                alert('Browser blocked playback. Use the player controls to start the song.');
            });
        } else {
            birthdayAudio.pause();
        }
    });
}

if (sendLoveBtn) {
    sendLoveBtn.addEventListener('click', function() {
        console.log('sendLoveBtn clicked');
        if (birthdayAudio) {
            birthdayAudio.currentTime = 0;
            const playPromise = birthdayAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn('Autoplay blocked when clicking Send More Love:', err);
                    // Autoplay blocked: show controls so user can start playback
                    birthdayAudio.controls = true;
                    if (audioToggleBtn) audioToggleBtn.textContent = 'Play Song ▶️';
                    alert('Playback was blocked by the browser — use the Play button to start the song.');
                });
            }
        } else {
            alert('No audio file found. Please add `assets/happy-birthday-instrumental.mp3` to the `assets/` folder.');
        }

        if (loveMessage) {
            loveMessage.textContent = 'Sent more love ❤️';
            loveMessage.classList.add('visible');
            setTimeout(() => loveMessage.classList.remove('visible'), 3000);
        }

        // Add floating hearts as confirmation
        createFloatingHearts();
    });
}

// Try to play audio once when the surprise button is clicked (fallback)
if (typeof surpriseBtn !== 'undefined' && surpriseBtn && birthdayAudio) {
    surpriseBtn.addEventListener('click', function tryPlayAudio() {
        console.log('surpriseBtn first click triggering audio try');
        const p = birthdayAudio.play();
        if (p !== undefined && p.catch) {
            p.catch((err) => { 
                console.warn('surpriseBtn playback blocked:', err);
                birthdayAudio.controls = true; 
            });
        }
    }, { once: true });
}

// Initialize button state
updateAudioButton();

// Detect whether the MP3 file is available; if not, fall back to a synthesized melody
let useSynthFallback = false;
if (birthdayAudio && birthdayAudio.src) {
    // Try a HEAD request to check the file
    fetch(birthdayAudio.src, { method: 'HEAD' }).then(response => {
        if (!response.ok) {
            console.warn('Instrumental file not found on server, using synthesized fallback.');
            useSynthFallback = true;
        } else {
            console.log('Instrumental file found, will use audio element playback.');
            useSynthFallback = false;
        }
    }).catch(err => {
        console.warn('Could not fetch instrumental file, using synthesized fallback.', err);
        useSynthFallback = true;
    });
} else {
    useSynthFallback = true;
}

// Synthesizer: simple instrumental rendition of "Happy Birthday"
function playSynthMelody() {
    return new Promise((resolve) => {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioCtx();
            const gain = ctx.createGain();
            gain.gain.value = 0.0;
            gain.connect(ctx.destination);

            const osc = ctx.createOscillator();
            osc.type = 'triangle';
            osc.connect(gain);
            osc.start();

            const now = ctx.currentTime + 0.05;
            let t = now;

            const N = (f, d) => ({ freq: f, dur: d });
            const notes = [
                N(392, 0.45), N(392, 0.45), N(440, 0.9), N(392, 0.9), N(523, 0.9), N(494, 1.2),
                N(392, 0.45), N(392, 0.45), N(440, 0.9), N(392, 0.9), N(587, 0.9), N(523, 1.2),
                N(392, 0.45), N(392, 0.45), N(784, 0.9), N(659, 0.9), N(523, 0.9), N(494, 0.9), N(440, 1.2),
                N(698, 0.45), N(698, 0.45), N(659, 0.9), N(523, 0.9), N(587, 0.9), N(523, 1.6)
            ];

            // Ramp gain and schedule notes
            notes.forEach(n => {
                osc.frequency.setValueAtTime(n.freq, t);
                gain.gain.cancelScheduledValues(t - 0.01);
                gain.gain.setValueAtTime(0.0, t - 0.01);
                gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
                // decay toward end of note
                gain.gain.linearRampToValueAtTime(0.001, t + n.dur - 0.02);
                t += n.dur;
            });

            // Stop oscillator shortly after last note
            osc.stop(t + 0.05);
            setTimeout(() => {
                try { ctx.close && ctx.close(); } catch (e) {}
                resolve();
            }, (t - now + 0.1) * 1000);
        } catch (e) {
            console.error('Synth playback error:', e);
            resolve();
        }
    });
}

// Wrap play action to choose MP3 or synth
function playInstrumental() {
    if (!useSynthFallback && birthdayAudio) {
        const p = birthdayAudio.play();
        if (p && p.catch) p.catch(err => {
            console.warn('Playback blocked, falling back to synth:', err);
            useSynthFallback = true;
            playSynthMelody();
        });
    } else {
        console.log('Using synthesized instrumental fallback');
        return playSynthMelody();
    }
}

// Ensure Send Love and toggle use the unified playInstrumental function
if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', async () => {
        if (useSynthFallback) {
            await playSynthMelody();
            updateAudioButton();
        } else if (birthdayAudio) {
            if (birthdayAudio.paused) {
                await birthdayAudio.play().catch(e => { console.warn(e); });
            } else {
                birthdayAudio.pause();
            }
            updateAudioButton();
        }
    });
}

if (sendLoveBtn) {
    // replace existing behavior: play chosen instrumental
    sendLoveBtn.addEventListener('click', function() {
        console.log('sendLoveBtn clicked (playInstrumental)');
        playInstrumental();
        if (loveMessage) {
            loveMessage.textContent = 'Sent more love ❤️';
            loveMessage.classList.add('visible');
            setTimeout(() => loveMessage.classList.remove('visible'), 3000);
        }
        createFloatingHearts();
    });
}
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const elements = {
    ctaBtn: document.querySelector('.cta-btn'),
    introScreen: document.querySelector('.intro-screen'),
    mainScreen: document.querySelector('.main-screen'),
    introText: document.getElementById('intro-text'),
    syringe: document.querySelector('.syringe'),
    dna: document.querySelector('.dna'),
    skull: document.querySelector('.skull'),
    testTube: document.querySelector('.test-tube'),
    cakeBtn: document.querySelector('.cake-btn'),
    cake: document.querySelector('.cake'),
    body: document.body
  };

  console.log('Nightmare script loaded!');

  // -----------------------
  // Sound effect functions
  // -----------------------
  function playGlitchSound(frequency) {
    console.log(`Playing glitch sound at ${frequency}Hz`);
    try {
      const glitchSound = document.getElementById('glitch-sound');
      // Adjust playback rate for different frequencies
      glitchSound.playbackRate = 0.5 + (frequency / 300);
      glitchSound.volume = 0.3;
      glitchSound.currentTime = 0;
      glitchSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playScreamSound() {
    console.log('Playing scream sound');
    try {
      const screamSound = document.getElementById('scream-sound');
      screamSound.volume = 0.4;
      screamSound.currentTime = 0;
      screamSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playHeartbeatSound() {
    console.log('Playing heartbeat sound');
    try {
      const heartbeatSound = document.getElementById('heartbeat-sound');
      heartbeatSound.volume = 0.3;
      heartbeatSound.loop = true;
      heartbeatSound.play().catch(e => console.log('Audio play failed:', e));
      
      // Stop looping after 10 seconds
      setTimeout(() => {
        heartbeatSound.loop = false;
      }, 10000);
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playScarySound() {
    console.log('Playing random scary sound');
    try {
      // Randomly select one of the scary sounds
      const soundIndex = Math.floor(Math.random() * 3) + 1;
      const scarySound = document.getElementById(`scary-sound-${soundIndex}`);
      scarySound.volume = 0.35;
      scarySound.currentTime = 0;
      scarySound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playInjectionSound() {
    console.log('Playing injection sound');
    try {
      const injectionSound = document.getElementById('injection-sound');
      injectionSound.volume = 0.4;
      injectionSound.currentTime = 0;
      injectionSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playMutationSound() {
    console.log('Playing mutation sound');
    try {
      const mutationSound = document.getElementById('mutation-sound');
      mutationSound.volume = 0.4;
      mutationSound.currentTime = 0;
      mutationSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playDemonicSound() {
    console.log('Playing demonic sound');
    try {
      const demonicSound = document.getElementById('demonic-sound');
      demonicSound.volume = 0.4;
      demonicSound.currentTime = 0;
      demonicSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playBubblingSound() {
    console.log('Playing bubbling sound');
    try {
      const bubblingSound = document.getElementById('bubbling-sound');
      bubblingSound.volume = 0.3;
      bubblingSound.currentTime = 0;
      bubblingSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }
  
  function playSlicingSound() {
    console.log('Playing slicing sound');
    try {
      const slicingSound = document.getElementById('slicing-sound');
      slicingSound.volume = 0.45;
      slicingSound.currentTime = 0;
      slicingSound.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
      console.log('Audio not available:', error);
    }
  }

  // -----------------------
  // Text and effect functions
  // -----------------------

  // Generate random glitch character
  function getRandomChar() {
    const glitchChars = 'ψФж¥ⓧ◊фΣ█▓▒░█▓▒░█▓▒░■■■█▓▒░';
    return glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
  }

  // Enhanced typing effect with glitching
  function glitchTypeWriter(text, element, delay = 30) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
      if (i < text.length) {
        // Random chance to glitch
        if (Math.random() < 0.1) {
          // Add a glitched character
          const glitchChar = getRandomChar();
          element.innerHTML += glitchChar;
          
          // Remove the glitched character after a short delay
          setTimeout(() => {
            element.innerHTML = element.innerHTML.slice(0, -1) + text.charAt(i);
            playGlitchSound(50 + Math.random() * 100);
            i++;
            
            // Apply random transform to create jittery effect
            element.style.transform = `translate(${Math.random() * 5 - 2.5}px, ${Math.random() * 5 - 2.5}px) skew(${Math.random() * 5 - 2.5}deg)`;
            
            setTimeout(type, delay + Math.random() * 80);
          }, 50 + Math.random() * 100);
        } else {
          // Normal typing
          element.innerHTML += text.charAt(i);
          
          // Apply random transform for subtle jitter
          element.style.transform = `translate(${Math.random() * 3 - 1.5}px, ${Math.random() * 3 - 1.5}px)`;
          
          i++;
          setTimeout(type, delay + Math.random() * 30);
        }
      } else {
        // Finished typing, add continuous glitch effect
        setInterval(() => {
          if (Math.random() < 0.1) {
            // Randomly glitch some text
            const position = Math.floor(Math.random() * text.length);
            const originalChar = element.innerHTML.charAt(position);
            
            // Replace with glitch char
            const beforeText = element.innerHTML.slice(0, position);
            const afterText = element.innerHTML.slice(position + 1);
            element.innerHTML = beforeText + getRandomChar() + afterText;
            
            // Restore after short delay
            setTimeout(() => {
              element.innerHTML = beforeText + originalChar + afterText;
            }, 50 + Math.random() * 200);
            
            playGlitchSound(Math.random() * 100);
          }
          
          // Random transform for continuous jitter
          element.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px) skew(${Math.random() * 2 - 1}deg)`;
        }, 2000);
      }
    }
    
    type();
  }

  // Add horror effects to the page
  function addHorrorEffects() {
    // Add scanlines effect
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);
    
    // Add VHS effect
    const vhsEffect = document.createElement('div');
    vhsEffect.className = 'vhs-effect';
    document.body.appendChild(vhsEffect);
    
    // Add noise effect
    const noise = document.createElement('div');
    noise.className = 'noise';
    document.body.appendChild(noise);
    
    // Add static effect
    const staticEffect = document.createElement('div');
    staticEffect.className = 'static';
    document.body.appendChild(staticEffect);
    
    // Add horror flash
    const horrorFlash = document.createElement('div');
    horrorFlash.className = 'horror-flash';
    document.body.appendChild(horrorFlash);
    
    // Add glitch transition
    const glitchTransition = document.createElement('div');
    glitchTransition.className = 'glitch-transition';
    document.body.appendChild(glitchTransition);
    
    // Add heartbeat effect to body
    elements.body.classList.add('heartbeat');
    
    // Random horror flashes
    setInterval(() => {
      if (Math.random() < 0.1) {
        horrorFlash.style.animation = 'horror-flash 0.5s';
        setTimeout(() => {
          horrorFlash.style.animation = '';
        }, 500);
        
        playScarySound();
      }
    }, 8000);
    
    // Increase number of sparks
    const particles = document.querySelector('.particles');
    if (particles) {
      for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.style.top = `${Math.random() * 100}%`;
        spark.style.left = `${Math.random() * 100}%`;
        spark.style.animationDelay = `${Math.random() * 2}s`;
        particles.appendChild(spark);
      }
    }
  }

  // Create random blood splatter
  function createBloodSplatter() {
    const splatter = document.createElement('div');
    splatter.className = 'blood-splatter';
    splatter.style.top = `${Math.random() * 100}%`;
    splatter.style.left = `${Math.random() * 100}%`;
    splatter.style.width = `${30 + Math.random() * 70}px`;
    splatter.style.height = `${30 + Math.random() * 70}px`;
    document.body.appendChild(splatter);
    
    // Remove after animation completes
    setTimeout(() => {
      if (document.body.contains(splatter)) {
        document.body.removeChild(splatter);
      }
    }, 1000);
  }

  // Add hover effects to experiment elements
  function addHoverEffects(experiment) {
    experiment.addEventListener('mouseenter', () => {
      // Random chance for extreme effect
      if (Math.random() < 0.3) {
        // Make the whole screen glitch
        const horrorFlash = document.querySelector('.horror-flash');
        horrorFlash.style.animation = 'horror-flash 0.2s';
        
        setTimeout(() => {
          horrorFlash.style.animation = '';
        }, 200);
        
        // Play sound effect
        playGlitchSound(100 + Math.random() * 200);
      }
      
      // Add blood splatter
      if (Math.random() < 0.3) {
        createBloodSplatter();
      }
    });
  }

  // Create random screen glitch
  function createScreenGlitch() {
    const glitch = document.createElement('div');
    glitch.style.position = 'fixed';
    glitch.style.top = `${Math.random() * 100}%`;
    glitch.style.left = `${Math.random() * 100}%`;
    glitch.style.width = `${50 + Math.random() * 200}px`;
    glitch.style.height = `${10 + Math.random() * 30}px`;
    glitch.style.background = '#00ff00';
    glitch.style.opacity = '0.5';
    glitch.style.zIndex = '999';
    glitch.style.pointerEvents = 'none';
    glitch.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    
    document.body.appendChild(glitch);
    
    // Flicker the glitch
    let visible = true;
    
    const flickerInterval = setInterval(() => {
      glitch.style.opacity = visible ? '0.5' : '0';
      visible = !visible;
    }, 50);
    
    // Remove after animation
    setTimeout(() => {
      clearInterval(flickerInterval);
      if (document.body.contains(glitch)) {
        document.body.removeChild(glitch);
      }
    }, 300 + Math.random() * 500);
  }

  // Get random whisper text
  function getRandomWhisper() {
    const whispers = [
      "پشت سرتو نگاه کن...",
      "من اینجام...",
      "تنها نیستی...",
      "مریم...",
      "تولد مبارک...",
      "می‌بینمت...",
      "روحت مال منه...",
      "فرار نکن..."
    ];
    return whispers[Math.floor(Math.random() * whispers.length)];
  }

  // Ultra scary mode - triggered by secret code
  function triggerUltraScaryMode() {
    console.log("ULTRA SCARY MODE ACTIVATED");
    
    // Play demonic sound
    playDemonicSound();
    
    // Create massive blood splatter
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createBloodSplatter();
      }, i * 100);
    }
    
    // Flash screen rapidly
    const horrorFlash = document.querySelector('.horror-flash');
    let flashCount = 0;
    
    const flashInterval = setInterval(() => {
      horrorFlash.style.animation = 'horror-flash 0.1s';
      setTimeout(() => {
        horrorFlash.style.animation = '';
      }, 100);
      
      flashCount++;
      if (flashCount >= 10) {
        clearInterval(flashInterval);
      }
    }, 200);
    
    // Make all experiment items animate
    document.querySelectorAll('.experiment').forEach(exp => {
      exp.style.animation = 'pulse-horror 0.5s infinite';
      
      // Trigger all effects
      const icons = exp.querySelectorAll('i');
      icons.forEach(icon => {
        icon.style.animation = 'extreme-horror 1s infinite';
      });
    });
    
    // Show demonic message
    setTimeout(() => {
      const demonicMessage = document.createElement('div');
      demonicMessage.className = 'demonic-message';
      demonicMessage.textContent = "روحـــت مـــال مـنــه...";
      document.body.appendChild(demonicMessage);
      
      playScreamSound();
      
      setTimeout(() => {
        if (document.body.contains(demonicMessage)) {
          document.body.removeChild(demonicMessage);
        }
        
        // Return to normal after the scare
        document.querySelectorAll('.experiment').forEach(exp => {
          exp.style.animation = '';
          
          const icons = exp.querySelectorAll('i');
          icons.forEach(icon => {
            icon.style.animation = '';
          });
        });
      }, 3000);
    }, 2000);
  }

  // Add creepy cursor trailer
  function addCreepyCursor() {
    document.addEventListener('mousemove', (e) => {
      // Only create trailer with small probability to avoid too many elements
      if (Math.random() < 0.1) {
        const trailer = document.createElement('div');
        trailer.className = 'cursor-trailer';
        trailer.style.left = e.pageX + 'px';
        trailer.style.top = e.pageY + 'px';
        document.body.appendChild(trailer);
        
        // Remove after animation completes
        setTimeout(() => {
          if (document.body.contains(trailer)) {
            document.body.removeChild(trailer);
          }
        }, 1000);
      }
    });
  }

  // Add special creepy Easter eggs
  function addCreepyEasterEggs() {
    // Secret button press combination
    let keySequence = [];
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    
    document.addEventListener('keydown', (e) => {
      keySequence.push(e.key);
      
      // Keep only the last 8 keys
      if (keySequence.length > 8) {
        keySequence.shift();
      }
      
      // Check if sequence matches
      if (keySequence.join(',') === secretCode.join(',')) {
        triggerUltraScaryMode();
      }
    });
    
    // Random whispers in the background
    setInterval(() => {
      if (Math.random() < 0.02) {
        const whisper = document.createElement('div');
        whisper.className = 'whisper';
        whisper.textContent = getRandomWhisper();
        whisper.style.top = `${Math.random() * 100}%`;
        whisper.style.left = `${Math.random() * 100}%`;
        document.body.appendChild(whisper);
        
        setTimeout(() => {
          if (document.body.contains(whisper)) {
            document.body.removeChild(whisper);
          }
        }, 2000);
      }
    }, 30000);
  }

  // Setup random scares
  function setupRandomScares() {
    setInterval(() => {
      if (Math.random() < 0.05) {
        // Random scare effect
        const scareType = Math.floor(Math.random() * 8);
        
        switch (scareType) {
          case 0:
            // Screen glitch
            createScreenGlitch();
            playGlitchSound(100 + Math.random() * 200);
            break;
          case 1:
            // Blood splatter
            createBloodSplatter();
            playScarySound();
            break;
          case 2:
            // Flash
            const horrorFlash = document.querySelector('.horror-flash');
            horrorFlash.style.animation = 'horror-flash 0.2s';
            setTimeout(() => {
              horrorFlash.style.animation = '';
            }, 200);
            break;
          case 3:
            // Text glitch on random element
            const texts = document.querySelectorAll('p, h1');
            const randomText = texts[Math.floor(Math.random() * texts.length)];
            if (randomText) {
              const originalText = randomText.textContent;
              
              // Replace with glitched text
              randomText.textContent = originalText.split('').map(char => 
                Math.random() < 0.3 ? getRandomChar() : char
              ).join('');
              
              // Restore original text
              setTimeout(() => {
                randomText.textContent = originalText;
              }, 500);
            }
            break;
          case 4:
            // Screen shake
            document.body.style.animation = 'shake 0.5s';
            setTimeout(() => {
              document.body.style.animation = '';
            }, 500);
            playGlitchSound(80);
            break;
          case 5:
            // Whisper sound
            playScarySound();
            break;
          case 6:
            // Heartbeat acceleration
            playHeartbeatSound();
            // Pulse screen
            elements.body.classList.add('heartbeat-fast');
            setTimeout(() => {
              elements.body.classList.remove('heartbeat-fast');
            }, 3000);
            break;
          case 7:
            // Demonic face flash
            const demonicFace = document.createElement('div');
            demonicFace.className = 'demonic-face';
            document.body.appendChild(demonicFace);
            
            playDemonicSound();
            
            setTimeout(() => {
              if (document.body.contains(demonicFace)) {
                document.body.removeChild(demonicFace);
              }
            }, 200);
            break;
        }
      }
    }, 15000); // Every 15 seconds chance of random scare
  }

  // Add shake animation to document style if not already defined
  function addKeyframeStyles() {
    if (!document.querySelector('style#horror-keyframes')) {
      const style = document.createElement('style');
      style.id = 'horror-keyframes';
      style.textContent = `
        @keyframes shake {
          0%, 100% { transform: translate(0, 0) rotate(0); }
          10%, 30%, 50%, 70%, 90% { transform: translate(-5px, 0) rotate(-1deg); }
          20%, 40%, 60%, 80% { transform: translate(5px, 0) rotate(1deg); }
        }
        
        @keyframes pulse-horror {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); filter: brightness(1.5); }
        }
        
        @keyframes extreme-horror {
          0% { transform: scale(1) rotate(0); filter: brightness(1); }
          25% { transform: scale(1.2) rotate(10deg); filter: brightness(1.5) hue-rotate(90deg); }
          50% { transform: scale(0.8) rotate(-10deg); filter: brightness(0.8) hue-rotate(180deg); }
          75% { transform: scale(1.2) rotate(10deg); filter: brightness(1.5) hue-rotate(270deg); }
          100% { transform: scale(1) rotate(0); filter: brightness(1) hue-rotate(360deg); }
        }
        
        @keyframes pulse-red {
          0%, 100% { background: #000000; }
          50% { background: #330000; }
        }
        
        .heartbeat-fast {
          animation: heartbeat-fast 0.5s infinite;
        }
        
        @keyframes heartbeat-fast {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        
        .demonic-face {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="30" cy="30" r="10" fill="%23ff0000"/><circle cx="70" cy="30" r="10" fill="%23ff0000"/><path d="M30,70 Q50,90 70,70" stroke="%23ff0000" fill="none" stroke-width="5"/></svg>');
          background-size: cover;
          background-position: center;
          z-index: 9999;
          pointer-events: none;
          opacity: 0.7;
        }
        
        .whisper {
          position: fixed;
          color: #ff0000;
          font-family: 'Creepster', cursive;
          font-size: 24px;
          opacity: 0;
          text-shadow: 0 0 10px #ff0000;
          z-index: 9998;
          pointer-events: none;
          animation: whisper-appear 2s forwards;
        }
        
        @keyframes whisper-appear {
          0% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.7; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(0.8); }
        }
        
        .demonic-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ff0000;
          font-family: 'Creepster', cursive;
          font-size: 72px;
          text-shadow: 0 0 20px #ff0000;
          z-index: 9999;
          animation: demon-message 3s forwards;
        }
        
        @keyframes demon-message {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.1); }
          10% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
          20% { transform: translate(-50%, -50%) scale(0.9) rotate(5deg); }
          30% { transform: translate(-50%, -50%) scale(1.1) rotate(-5deg); }
          40% { transform: translate(-50%, -50%) scale(0.95) rotate(3deg); }
          50% { transform: translate(-50%, -50%) scale(1.05) rotate(-3deg); }
          90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
        }
        
        .cursor-trailer {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #00ff00;
          border-radius: 50%;
          filter: blur(2px);
          pointer-events: none;
          z-index: 9997;
          opacity: 0.7;
          animation: cursor-fade 1s forwards;
        }
        
        @keyframes cursor-fade {
          0% { transform: scale(0.5); opacity: 0.7; }
          100% { transform: scale(2); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // -----------------------
  // Event Listeners
  // -----------------------

// Enhanced entrance animation
elements.ctaBtn.addEventListener('click', () => {
  console.log('CTA Button clicked! Unleashing horror...');
  
  // Play scary transition sound immediately
  playScreamSound();
  
  // Apply glitch transition effect
  const glitchTransition = document.querySelector('.glitch-transition');
  glitchTransition.style.animation = 'glitch-out 1s forwards';
  
  // Hide intro screen immediately
  elements.introScreen.style.display = 'none';
  
  // Show main screen immediately but with opacity 0
  elements.mainScreen.classList.remove('hidden');
  elements.mainScreen.style.display = 'grid'; // مطمئن شویم که نمایش داده می‌شود
  
  // Add blood splatters randomly across the screen
  for (let i = 0; i < 5; i++) {
    createBloodSplatter();
  }
  
  // Slightly delayed visibility for dramatic effect
  setTimeout(() => {
    elements.mainScreen.classList.add('visible');
    
    // Play heartbeat sound
    playHeartbeatSound();
    
    // Add bubbles to all experiments
    document.querySelectorAll('.experiment').forEach(exp => {
      addHoverEffects(exp);
    });
  }, 200);
});

  // Enhanced syringe animation
  elements.syringe.addEventListener('click', () => {
    console.log('Syringe clicked! Injecting...');
    
    // Play injection sound
    playInjectionSound();
    
    // Show liquid with delay
    const liquid = elements.syringe.querySelector('.liquid');
    liquid.classList.remove('hidden');
    
    // Make screen pulse red
    elements.body.style.animation = 'pulse-red 0.5s';
    setTimeout(() => {
      elements.body.style.animation = '';
    }, 500);
    
    // Create blood splatters
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createBloodSplatter();
      }, i * 200);
    }
    
    // Hide after animation completes
    setTimeout(() => {
      liquid.classList.add('hidden');
    }, 2500);
  });

  // Enhanced DNA animation
  elements.dna.addEventListener('click', () => {
    console.log('DNA clicked! Mutating...');
    
    // Play mutation sound
    playMutationSound();
    
    // Add radiation class for full effect
    elements.dna.classList.add('active');
    
    // Screen distortion effect
    const staticEffect = document.querySelector('.static');
    staticEffect.style.opacity = '0.3';
    
    // Create random glitches across the screen
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createScreenGlitch();
      }, i * 300);
    }
    
    // Reset after animation
    setTimeout(() => {
      elements.dna.classList.remove('active');
      staticEffect.style.opacity = '0.1';
    }, 3000);
  });

  // Enhanced skull animation
  elements.skull.addEventListener('click', () => {
    console.log('Skull clicked! Possessing...');
    
    // Play demonic sound
    playDemonicSound();
    
    // Show eyes
    const eyes = elements.skull.querySelector('.eyes');
    eyes.classList.remove('hidden');
    
    // Add soul escape effect
    elements.skull.classList.add('active');
    
    // Screen pulse effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const horrorFlash = document.querySelector('.horror-flash');
        horrorFlash.style.animation = 'horror-flash 0.3s';
        
        setTimeout(() => {
          horrorFlash.style.animation = '';
        }, 300);
      }, i * 1000);
    }
    
    // Reset after animation
    setTimeout(() => {
      eyes.classList.add('hidden');
      elements.skull.classList.remove('active');
    }, 3000);
  });

  // Enhanced test tube animation
  elements.testTube.addEventListener('mouseover', () => {
    console.log('Test tube hovered! Bubbling...');
    
    // Play bubbling sound
    playBubblingSound();
    
    // Show bubbles with enhanced effect
    const bubbles = elements.testTube.querySelector('.bubbles');
    bubbles.classList.remove('hidden');
    
// Increase the number of bubbles dynamically
if (bubbles.children.length < 7) {
  for (let i = 0; i < 7; i++) {
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    bubble.style.animationDelay = `${Math.random() * 0.5}s`;
    bubbles.appendChild(bubble);
  }
}
});

elements.testTube.addEventListener('mouseout', () => {
const bubbles = elements.testTube.querySelector('.bubbles');
bubbles.classList.add('hidden');
});

// Enhanced cake button animation
elements.cakeBtn.addEventListener('click', () => {
console.log('Cake button clicked! Bleeding...');

// Play slicing sound
playSlicingSound();

// Show cake with enhanced blood effect
elements.cake.classList.remove('hidden');

// Create blood splatters around the cake
for (let i = 0; i < 8; i++) {
  setTimeout(() => {
    createBloodSplatter();
  }, i * 200);
}

// Add intense flashing
for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    const horrorFlash = document.querySelector('.horror-flash');
    horrorFlash.style.animation = 'horror-flash 0.3s';
    
    setTimeout(() => {
      horrorFlash.style.animation = '';
    }, 300);
  }, i * 800);
}

// Reveal cake text with delay
const cakeText = elements.cake.querySelector('.cake-text');
setTimeout(() => {
  cakeText.classList.remove('hidden');
  playScreamSound();
}, 1000);

// Hide after extended animation
setTimeout(() => {
  elements.cake.classList.add('hidden');
  cakeText.classList.add('hidden');
}, 5000);
});

// -----------------------
// Initialization
// -----------------------

// Add horror effects
addHorrorEffects();

// Start with enhanced typing effect
glitchTypeWriter(elements.introText.textContent, elements.introText);

// Setup random scares
setupRandomScares();

// Add creepy Easter eggs (like the Konami code and whispering texts)
addCreepyEasterEggs();

// Add creepy cursor effects
addCreepyCursor();

// Add dynamic keyframe styles
addKeyframeStyles();

console.log('Horror initialization complete. Happy haunting!');
});
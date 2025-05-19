VANTA.CELLS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  color1: 0x5c31e8,
  color2: 0x2c2ce3,
  speed: 2.00
});

new Typed('#typed-output', {
  strings: [
    "Hi there!",
    "I like creating responsive website.",
    "Very passionate about design and coding.",
    "Interested?",
    "Feel free to reach me out.",
    "Thanks for visiting my site.",
  ],
  typeSpeed: 40,       
  backSpeed: 25,       
  backDelay: 1500,     
  loop: true           
});

const typedOutput = document.getElementById('typed-output');
if (typedOutput) {
  typedOutput.style.fontStyle = 'italic';
  typedOutput.style.fontSize = '0.98em'; // adjusted this for slightly smaller display
}


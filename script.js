// Select elements
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const celebration = document.getElementById('celebration');

let noClickCount = 0;

// Add event listener for "Yes" button
yesButton.addEventListener('click', () => {
    celebration.classList.remove('hidden'); // Show celebration message
  
    // Trigger confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });

// Add event listener for "No" button
noButton.addEventListener('click', () => {
  noClickCount++;

  // Move the "No" button to a random position
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // After 6 clicks, hide the "No" button
  if (noClickCount >= 6) {
    noButton.style.display = 'none';
  }
});

document.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('cursor-heart');
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    document.body.appendChild(heart);
  
    // Remove the heart after the animation ends
    setTimeout(() => {
      heart.remove();
    }, 500);
  });


  // Function to create random flowers
function createFlower() {
    const flower = document.createElement('img');
    flower.classList.add('flower');
  
    // Randomly select a flower image
    const flowerImages = ['images/flower1.png', 'images/flower2.png', 'images/flower3.png'];
    flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  
    // Randomize position
    const maxX = window.innerWidth - 50; // Subtract flower width
    const maxY = window.innerHeight - 50; // Subtract flower height
    flower.style.left = `${Math.random() * maxX}px`;
    flower.style.top = `${Math.random() * maxY}px`;
  
    // Randomize animation duration
    const duration = Math.random() * 3 + 2; // Duration between 2s and 5s
    flower.style.animationDuration = `${duration}s`;
  
    // Append the flower to the body
    document.body.appendChild(flower);
  }
  
  // Create multiple flowers on page load
  for (let i = 0; i < 14; i++) {
    createFlower();
  }

  // Add flowers every 2 seconds
setInterval(createFlower, 2000);

// Select the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

// Play audio after user interaction
document.addEventListener('click', () => {
  backgroundMusic.play().catch((error) => {
    console.log('Autoplay was prevented:', error);
  });
});

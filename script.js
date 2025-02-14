 // Create floating hearts
 function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

// Section animations
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        section.classList.toggle('flipped');
    });
});

// Audio control
const audioControl = document.getElementById('audioControl');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

audioControl.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        audioControl.innerHTML = '♬';
    } else {
        bgMusic.play();
        audioControl.innerHTML = '♪';
    }
    isPlaying = !isPlaying;
});

// Background effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelector('.background-effects').style.background = 
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
        rgba(255, 107, 107, 0.1) 0%, 
        transparent 70%)`;
});
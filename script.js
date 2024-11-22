window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

//objects 3d
function generate3DObjects() {
    const container = document.getElementById('3d-objects-container');
    const numberOfObjects = 10; // Number of 3D objects to generate
    const objectImages = [
    'assets/obj-4.png', // Replace with your actual image paths
    'assets/obj-5.png',
    'assets/obj-3.png',
    'assets/obj-6.png',
    // Add more image paths as necessary
];

for (let i = 0; i < numberOfObjects; i++) {
    const object = document.createElement('div');
    object.classList.add('object');
    
    // Randomize position and animation duration
    const size = Math.random() * 250 + 100; 
    const xPos = Math.random() * 100; // Random horizontal position
    const yPos = Math.random() * 100; // Random vertical position
    const animationDuration = Math.random() * 20 + 20; // Random animation duration between 5s and 10s

    // Randomize which object image to use
    const randomImage = objectImages[Math.floor(Math.random() * objectImages.length)];

    // Set the image, size, position, and animation of the object
    object.style.width = `${size}px`;
    object.style.height = `${size}px`;
    object.style.left = `${xPos}%`;
    object.style.top = `${yPos}%`;
    object.style.backgroundImage = `url('${randomImage}')`;
    object.style.backgroundSize = 'contain';
    object.style.backgroundPosition = 'center';
    object.style.backgroundRepeat = 'no-repeat';

    // Apply animation (move and rotate the objects)
    object.style.animation = `moveAndRotate ${animationDuration}s infinite linear`;

    container.appendChild(object);
    }
}

window.onload = generate3DObjects;

const scrollDownIcon = document.getElementById('scroll-down');

// Add event listener for the scroll down click
scrollDownIcon.addEventListener('click', function () {
    // Scroll to the next section smoothly
    const nextSection = document.getElementById('section-2'); // Update this based on your section IDs
    nextSection.scrollIntoView({ behavior: 'smooth' });
});

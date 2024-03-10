document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.image-scroll-container');
    const images = document.querySelectorAll('.image-scroll-container img');

    let currentIndex = Math.floor(images.length / 2); // Inicia con la imagen de en medio

    function updateActiveImage() {
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    // Función para manejar el clic en una imagen
    function handleImageClick(event) {
        const clickedImage = event.target;
        window.open(clickedImage.src, '_blank');
    }

    setTimeout(() => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateActiveImage();
        }, 2000); // Cambia de imagen cada 2 segundos
    }, 500);

    updateActiveImage();

    // Agrega el evento de clic a todas las imágenes
    images.forEach((img) => {
        img.addEventListener('click', handleImageClick);
    });
});



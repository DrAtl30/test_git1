


document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            ride: 'carousel'
        });
    }
});

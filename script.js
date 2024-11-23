document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelector('.features');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                features.classList.add('animate');
                observer.unobserve(features);
            }
        });
    });

    observer.observe(features);
});

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('animate');
                observer.unobserve(footer);
            }
        });
    });

    observer.observe(footer);
});

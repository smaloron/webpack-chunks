
document.addEventListener('DOMContentLoaded', () => {
    const loadProductDetails = document.querySelector('#loadProductDetails');
    loadProductDetails.addEventListener('click', () => {
        import('./productDetails')
            .then(module => {
                const loadProductDetails = module.default;
                loadProductDetails();
            })
            .catch(err => {
                console.error('Failed to load product details:', err);
            });
    });
});


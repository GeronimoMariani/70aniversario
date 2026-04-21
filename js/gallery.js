// ============================================
// GALLERY - GALERÍA CON CARRUSEL Y LIGHTBOX
// ============================================

class GalleryCarousel {
    constructor() {
        this.container = document.getElementById('gallery-container');
        this.track = document.querySelector('.gallery-track');
        this.prevBtn = document.getElementById('carousel-prev');
        this.nextBtn = document.getElementById('carousel-next');
        this.indicatorsContainer = document.getElementById('carousel-indicators');
        
        this.currentIndex = 0;
        this.itemsPerView = 3;
        this.itemWidth = 0;
        this.gap = 20;
        
        // Variables para el lightbox
        this.lightboxCurrentIndex = 0;
        
        this.init();
    }
    
    init() {
        this.renderGallery();
        this.setupEventListeners();
        this.updateItemsPerView();
        this.createIndicators();
        this.updateIndicators();
        window.addEventListener('resize', () => this.handleResize());
    }
    
    renderGallery() {
        this.container.innerHTML = '';
        
        galleryData.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-index', index);
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            img.className = 'gallery-image';
            img.style.cursor = 'pointer';
            
            img.addEventListener('click', () => this.openLightbox(index));
            
            galleryItem.appendChild(img);
            this.container.appendChild(galleryItem);
        });
    }
    
    openLightbox(index) {
        this.lightboxCurrentIndex = index;
        this.updateLightboxImage();
        const modal = document.getElementById('image-modal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeLightbox() {
        const modal = document.getElementById('image-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    updateLightboxImage() {
        const modalImage = document.getElementById('modal-image');
        const modalCounter = document.getElementById('modal-counter');
        
        modalImage.src = galleryData[this.lightboxCurrentIndex].image;
        modalCounter.textContent = `${this.lightboxCurrentIndex + 1} / ${galleryData.length}`;
    }
    
    nextLightboxImage() {
        if (this.lightboxCurrentIndex < galleryData.length - 1) {
            this.lightboxCurrentIndex++;
        } else {
            this.lightboxCurrentIndex = 0; // Vuelve al inicio
        }
        this.updateLightboxImage();
    }
    
    prevLightboxImage() {
        if (this.lightboxCurrentIndex > 0) {
            this.lightboxCurrentIndex--;
        } else {
            this.lightboxCurrentIndex = galleryData.length - 1; // Va al final
        }
        this.updateLightboxImage();
    }
    
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        if (this.indicatorsContainer) {
            this.indicatorsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('indicator')) {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    this.goToSlide(index);
                }
            });
        }
        
        // Eventos del modal
        const modalCloseBtn = document.getElementById('modal-close');
        const modalPrevBtn = document.getElementById('modal-prev');
        const modalNextBtn = document.getElementById('modal-next');
        const modal = document.getElementById('image-modal');
        
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => this.closeLightbox());
        }
        
        if (modalPrevBtn) {
            modalPrevBtn.addEventListener('click', () => this.prevLightboxImage());
        }
        
        if (modalNextBtn) {
            modalNextBtn.addEventListener('click', () => this.nextLightboxImage());
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeLightbox();
                }
            });
        }
        
        // Cerrar con tecla Escape y navegar con flechas
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('image-modal');
            if (modal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    this.closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    this.prevLightboxImage();
                } else if (e.key === 'ArrowRight') {
                    this.nextLightboxImage();
                }
            }
        });
    }
    
    updateItemsPerView() {
        const width = window.innerWidth;
        
        if (width <= 768) {
            this.itemsPerView = 1;
        } else if (width <= 1024) {
            this.itemsPerView = 2;
        } else {
            this.itemsPerView = 3;
        }
    }
    
    createIndicators() {
        this.indicatorsContainer.innerHTML = '';
        const totalSlides = Math.ceil(galleryData.length / this.itemsPerView);
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.setAttribute('data-index', i);
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    calculateTranslate() {
        // En lugar de calcular por ítem individual, calculamos el ancho de un "paso"
        // que es igual al ancho del contenedor visible.
        const containerWidth = document.querySelector('.gallery-carousel').offsetWidth;
        const translate = -(this.currentIndex * (containerWidth + this.gap));
        return translate;
    }
    
    updateTrackPosition() {
        const translate = this.calculateTranslate();
        this.track.style.transform = `translateX(${translate}px)`;
    }
    
    nextSlide() {
        const totalSlides = Math.ceil(galleryData.length / this.itemsPerView);
        
        if (this.currentIndex < totalSlides - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Vuelve al inicio (carrusel infinito)
        }
        
        this.updateTrackPosition();
        this.updateIndicators();
    }
    
    prevSlide() {
        const totalSlides = Math.ceil(galleryData.length / this.itemsPerView);
        
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = totalSlides - 1; // Va al final (carrusel infinito)
        }
        
        this.updateTrackPosition();
        this.updateIndicators();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateTrackPosition();
        this.updateIndicators();
    }
    
    handleResize() {
        const previousItemsPerView = this.itemsPerView;
        this.updateItemsPerView();
        
        if (previousItemsPerView !== this.itemsPerView) {
            this.currentIndex = 0; // Reinicia al cambiar el tamaño
            this.createIndicators();
            this.updateTrackPosition();
            this.updateIndicators();
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new GalleryCarousel();
});

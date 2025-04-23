import React from 'react';

const Gallery = () => {
    const images = [
        { id: 1, src: '/images/aa.jpg', alt: 'Photo 1' },
        { id: 2, src: '/images/abc.png', alt: 'Photo 2' },
        { id: 3, src: '/images/lines.png', alt: 'Photo 3' },
        { id: 4, src: '/images/aa.jpg', alt: 'Photo 4' },
    ];

    return (
        <div style={styles.galleryContainer}>
            {images.map((image) => (
                <div key={image.id} style={styles.imageWrapper}>
                    <img src={image.src} alt={image.alt} style={styles.image} />
                </div>
            ))}
        </div>
    );
};

const styles = {
    galleryContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px',
    },
    imageWrapper: {
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
};

export default Gallery;
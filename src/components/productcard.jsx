// write product card here
import React from 'react';
import ViewProductButton from '../components/button'; // Adjust the path as necessary

const ProductCard = () => {
    // Static product details
    const productImage = 'image.png'; // Replace with actual image URL
    const productName = 'T-shirt';
    const productPrice = '$29.99';

    return (
        <div style={styles.card}>
            <img src={productImage} alt={productName} style={styles.image} />
            <h2 style={styles.productName}>{productName}</h2>
            <p style={styles.price}>{productPrice}</p>
            <ViewProductButton />
        </div>
    );
};

// Styles for the ProductCard
const styles = {
    card: {
        backgroundColor: '#2c3e50',  // Dark background
        color: '#ecf0f1',            // Light text color for contrast
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        maxWidth: '300px',
        margin: '20px auto',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
        },
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
    },
    productName: {
        fontSize: '22px',
        margin: '15px 0',
        fontWeight: '600',
        lineHeight: '1.4',
        color: '#ecf0f1',  // Light text for product name
    },
    price: {
        fontSize: '20px',
        color: '#e67e22',  // Warm color for price to stand out
        fontWeight: '500',
        margin: '10px 0',
        textTransform: 'uppercase',
    },
    button: {
        marginTop: '15px',
        padding: '10px 20px',
        backgroundColor: '#3498db',  // Blue button
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#2980b9',  // Darker blue on hover
        },
    },
};

export default ProductCard;

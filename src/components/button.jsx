// write button card here
import React from 'react';

const ViewProductButton = () => {
    const handleClick = () => {
        // Logic for viewing the product can be added here
        alert('Viewing product details...');
    };

    return (
        <button onClick={handleClick} style={styles.button}>
            View Product
        </button>
    );
};

// Styles for the button
const styles = {
    button: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '4px',
        padding: '12px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s, transform 0.2s',
        fontWeight: 'bold',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    },
};

// Adding hover effect
styles.buttonHover = {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
};

export default ViewProductButton; 
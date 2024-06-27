/* eslint-disable react/prop-types */
import { useState } from 'react';

const DisplayComponent = ({ shoe, addToCart }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedImage, setSelectedImage] = useState('jordan black.jpg');

    const colors = shoe.availableColors;
    const colorToImageMap = {
        Black: '/jordan black.jpg',
        Red: '/jordan red.jpg',
        Orange: '/jordan orange.jpg',
    };

    const changeBgColorAndImage = (color) => {
        setSelectedColor(color);
        setSelectedImage(colorToImageMap[color]);
    };

    return (
        <div className="Card" style={{ backgroundColor: selectedColor }}>
            <img src={selectedImage} width={400} alt={shoe.title} />
            <h1>{shoe.title}</h1>
            <h3>{shoe.collection}</h3>
            <p>{shoe.description}</p>
            <b>Available Colors:</b>
            <p>
                {colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => changeBgColorAndImage(color)}
                        style={{
                            backgroundColor: color,
                            padding: '10px',
                            borderRadius: '100%',
                            border: 'none',
                            margin: '5px'
                        }}
                    ></button>
                ))}
            </p>
            <p>Price: Kshs {shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
    );
};

export default DisplayComponent;

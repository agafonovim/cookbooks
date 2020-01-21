import React from 'react';
import './Image.scss';

const Image = ({title, image}) => (
    <div className="image">
        <span>{title}</span>
        {image ? <img src={image} alt="preview_image" height={250} /> : <p>Image not found</p>}
    </div>
);

export default Image;

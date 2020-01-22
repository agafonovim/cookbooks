import React from 'react';

import './Image.scss';

/*
    Вывод картинки или текста ошибки в модальное окно просмотра книги
*/

const Image = ({title, image}) => (
    <div className="image">
        <span>{title}</span>
        {image ? <img src={image} alt="preview_image" height={250} /> : <p>Image not found</p>}
    </div>
);

export default Image;

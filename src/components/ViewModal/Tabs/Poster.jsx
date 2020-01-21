import React from 'react';
import Image from "../Main/Image/Image";

const Poster = ({title, poster_image}) => {
    return (
        <>
            <Image title="Poster" image={poster_image} />
        </>
    )
};

export default Poster;
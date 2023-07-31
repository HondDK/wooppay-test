import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (<div className={"slider-container"}>
        <Slider  {...settings}>
            {images && images.map((imageUrl, index) => (<div key={index}>
                <img className="slider-image" src={imageUrl} alt={`Слайд ${index}`}/>
            </div>))}
        </Slider>
    </div>);
}

export default ImageSlider

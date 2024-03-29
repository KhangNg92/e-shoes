import React from 'react';
import Slider from 'react-slick';
import MyButton from '../utils/button';

const HomeSlider = (props) => {

    const slides = [

        {
            img: '/images/README.jpg',
            lineOne: 'Huge Sales',
            lineTwo: 'Awesome discounts',
            linkTitle: 'View offers',
            linkTo: '/shop'
        },
        {
            img: '/images/nike-slider.jpg',
            lineOne: 'Nike-Addidas',
            lineTwo: 'Custom shop',
            linkTitle: 'Shop now',
            linkTo: '/shop'
        },

    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const generateSlides = () => (
        slides ?
            slides.map((item, i) => (
                <div key={i}>
                    <div className="featured_image"
                        style={{
                            background: `url(${item.img})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                        <div className="featured_action">
                            <div className="tag title">{item.lineOne}</div>
                            <div className="tag low_title">{item.lineTwo}</div>
                            <div>
                                <MyButton
                                    type="default"
                                    title={item.linkTitle}
                                    linkTo={item.linkTo}
                                    addStyles={{
                                        margin: '10px 0 0 0'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))
            : null
    )



    return (
        <div className="featured_container">
            <Slider {...settings}>
                {generateSlides()}
            </Slider>
        </div>
    );
};

export default HomeSlider;
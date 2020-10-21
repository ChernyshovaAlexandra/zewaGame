import React from 'react'
import './index.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Selection from '../SelectionComponent'



export default class Comix extends React.Component {
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
        };
        const { comics } = this.props
        const desktop = comics.desktop
        const mobile = comics.mobile
        const buttons = [{ name: comics.button }]
        console.log(comics, buttons)
        return (
            <div className="comixContainer">
                <div className="comix desktop">
                    <Slider {...settings} ref={ref => this.slider = ref}>
                        {desktop.map((item, index) => (
                            <a data-fancybox="gallery" href={item} key={index} >
                                <img src={item} alt='' />
                            </a>
                        ))}
                    </Slider>
                </div>
                <div className="comix mobile">
                    <Slider {...settings} ref={ref => this.slider = ref}>
                        {mobile.map((item, index) => (
                            <a data-fancybox="gallery" href={item} key={index} >
                                <img src={item} alt='' />
                            </a>
                        ))}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <Selection buttons={buttons} />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="row desktop">
                    <div className="col-lg-12 animate__animated animate__fadeIn animate__delay-5s">
                        <Selection buttons={buttons} />
                    </div>
                </div>
            </div>
        )
    }
}
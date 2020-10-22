import React from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Selection from "../SelectionComponent";

export default class Comix extends React.Component {
    componentDidMount() {
        document.getElementsByClassName("slick-next")[0].innerHTML = "Далее";
        document.getElementsByClassName("slick-next")[1].innerHTML = "Далее";
        document.getElementsByClassName("slick-prev")[0].innerHTML = "Назад";
        document.getElementsByClassName("slick-prev")[1].innerHTML = "Назад";
    }
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 0,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        const { comics } = this.props;
        const last = comics.desktop[comics.desktop.length - 1];
        const last2 = comics.mobile[comics.mobile.length - 1]
        const desktop = comics.desktop.slice(0, comics.desktop.length - 1);
        const mobile = comics.mobile.slice(0, comics.mobile.length - 1);;
        const buttons = comics.buttons;
        const final = comics.final;
        console.log(desktop, last);

        return (
            <div className="comixContainer">
                <div className="comix desktop">
                    <Slider {...settings} ref={(ref) => (this.slider = ref)}>
                        {desktop.map((item, index) => (
                            <img src={item} alt="" key={index} />
                        ))}
                        <>
                            <img src={last} alt="" />
                            <div className="row desktop">
                                <div className="col-lg-12">
                                    <Selection buttons={buttons} final={final} />
                                </div>
                            </div>
                        </>
                    </Slider>
                </div>
                <div className="comix mobile">
                    <Slider {...settings} ref={(ref) => (this.slider = ref)}>
                        {mobile.map((item, index) => (
                            <img src={item} alt="" />
                        ))}
                        <>
                            <img src={last2} alt="" />
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <Selection buttons={buttons} />
                                </div>
                            </div>
                        </>
                    </Slider>
                </div>
            </div>
        );
    }
}

import React from "react";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Selection from "../SelectionComponent";

export default class Comix extends React.Component {
  componentDidMount() {
    if (document.getElementsByClassName("slick-next")) {
      let next = document.getElementsByClassName("slick-next");
      for (let i = 0; i < next.length; i++) {
        next[i].innerHTML = "Далее";
      }
    }
    if (document.getElementsByClassName("slick-prev")) {
      let prev = document.getElementsByClassName("slick-prev");
      for (let i = 0; i < prev.length; i++) {
        prev[i].innerHTML = "Далее";
      }
    }
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
    console.log(comics);
    const last = comics.desktop[comics.desktop.length - 1];
    const last2 = comics.mobile[comics.mobile.length - 1];
    const desktop = comics.desktop.slice(0, comics.desktop.length - 1);
    const mobile = comics.mobile.slice(0, comics.mobile.length - 1);
    const buttons = comics.buttons
      ? comics.buttons
      : [{ name: comics.button, node_id: 0 }];
    const final = comics.final;

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
              <img src={item} alt="" key={index} />
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

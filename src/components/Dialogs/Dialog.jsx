import React from 'react'
import './index.scss'
// import anime from 'animejs/lib/anime.es.js';


export default class Dialog extends React.Component {

    componentDidMount() {
        // var textWrapper = document.querySelector('.ml3');
        // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // anime.timeline({ loop: true })
        //     .add({
        //         targets: '.ml3 .letter',
        //         opacity: [0, 1],
        //         easing: "easeInOutQuad",
        //         duration: 1050,
        //         delay: (el, i) => 150 * (i + 1)
        //     }).add({
        //         targets: '.ml3',
        //         opacity: 0,
        //         duration: 800,
        //         easing: "easeOutExpo",
        //         delay: 1000
        //     });
    }
    render() {
        const { data } = this.props
        return (
            <div className={"dialog row animate__animated animate__fadeIn animate__delay-" + (3+data.index) + 's'} >
                <div className="col-md-auto">
                    <div className="roundImg">
                        <img src={data.img} alt="" />
                    </div>
                </div>
                <div className="col-md-10 ">
                    <p><b>{data.name}: </b><span className='ml3'>{data.text}</span></p>
                </div>
            </ div>
                )
                }
}
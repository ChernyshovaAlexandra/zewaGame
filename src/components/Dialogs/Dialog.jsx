import React from 'react'
import './index.scss'
import anime from 'animejs/lib/anime.es.js';


export default class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shown: false,
        }
        this.setAnim()
    }
    init = async () => {
        
        this.showWords()
    }

    showWords = () => {
        var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '.ml3 .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 500,
                delay: (el, i) => 50 * (i + 1)
            })
            .add({
                targets: '.ml3',
                opacity: 1,
                duration: 500,
                easing: "easeOutExpo",
                delay: 1
            });
    }

    componentWillReceiveProps(props) {
        // this.setAnim()
    }
    setAnim = () => {
        this.setState({
            shown: false
        })
        setTimeout(() => {
            this.setState({
                shown: true
            })
            this.init()
        }, 10)
    }

    render() {
        const { data, index, hints } = this.props
       
        return (
            <>
                {this.state.shown && 
                <div 
                className=
                {hints ? "hint " + "dialog row animate__animated animate__fadeIn animate__delay-" + index * 2 + 's' :
                 "dialog row animate__animated animate__fadeIn animate__delay-" + index * 2 + 's'} >
                    <div className="col-md-2">
                        <div className="roundImg">
                            <img src={data.avatar} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <p><b>{data.name}: </b><span className='ml3'>{data.message}</span></p>
                    </div>
                </ div>}
            </>
        )
    }
}

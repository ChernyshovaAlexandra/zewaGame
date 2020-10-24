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
        var textWrapper = document.getElementsByClassName('ml3');

        for (let i = 0; i < textWrapper.length; i++) {
            textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>")

            anime.timeline({ loop: false })
                .add({
                    targets: '.dialog .letter',
                    opacity: [0, 1],
                    easing: "easeInOutQuad",
                    duration: 500,
                    delay: (el, i) => 15 * (i + 1)
                })
        }
    }

    componentWillReceiveProps(props) {
        if (props.buttons.length !== 0) {
            this.setAnim()
        }
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
        const { data, hints, buttons } = this.props

        return (
            <>
                {this.state.shown &&
                    <div
                        className=
                        {hints ? "hint dialog row" : "dialog row"
                        }>
                        {data.avatar !== '' &&
                            <>
                                <div className="col-md-2 letter">
                                    <div className="roundImg">
                                        <img src={data.avatar} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-10 ">
                                    <p className="letter"><b>{data.name}: </b><span className='ml3'>{data.message}</span></p>
                                </div>
                            </>
                        }
                        {
                            data.avatar === '' &&
                            <div className="control-point ml3">
                                {data.message}
                            </div>
                        }
                    </ div>}
            </>
        )
    }
}

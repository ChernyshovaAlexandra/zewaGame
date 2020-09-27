import React from 'react'
import './index.scss'
import Dialog from './Dialog'
import utka from '../../img/4.jpg'
import pepa from '../../img/5.jpg'




const dialogs = [
    [{
        index: 0,
        img: pepa,
        name: 'свинка пепа',
        text: 'привет уточка кря-кря, как дела'
    },
    {
        index: 1,
        img: utka,
        name: 'уточка',
        text: 'привет свинка пепа, я хуево, бухнуть бы мне чего'
    }],
    [{
        index: 0,
        img: pepa,
        name: 'свинка пепа',
        text: 'ну ты даешь! Пить эт очень вредно, как и курить. Давай лучше поучим джаваскрипт'
    },
    {
        index: 1,
        img: utka,
        name: 'уточка',
        text: 'Я утка, я не хочу ничего решать, я хочу купаться и кря-кря'
    }],
    [
        {
            index: 0,
            img: utka,
            name: 'уточка',
            text: 'кря-кря'
        }
    ]
]



export default class Dialogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curDialog: 0,
            dL: dialogs.length - 1
        }

    }
    showPrev = () => {
        this.setState({
            curDialog: (this.state.curDialog -= 1)
        })
    }
    showNext = () => {
        this.setState({
            curDialog: (this.state.curDialog += 1)
        })
    }
    render() {
        console.log(this.state)
        return (
            <>
                <div className="dialogs row">
                    <div className="col-lg-12">
                        {/* <h2>dialogs</h2> */}
                        <div className="row justify-content-center">
                            <div className="col-md-12 dialogs-container">
                                {dialogs[this.state.curDialog] && dialogs[this.state.curDialog].map((item, index) => (
                                    <Dialog key={index} data={item} />
                                ))}
                            </div>
                            <div className="col-md-12">
                                {dialogs[this.state.curDialog] &&
                                    <div className="row">
                                        {this.state.curDialog > 0 && <div className="col-md-6">
                                            <button className="btn selectionBtn" onClick={() => this.showPrev()}><span>Назад</span></button>
                                        </div>}
                                        {this.state.curDialog < this.state.dL && <div className="col-md-6">
                                            <button className="btn selectionBtn" onClick={() => this.showNext()}><span>Вперед</span></button>
                                        </div>}
                                    </div>
                                }
                            </div>

                        </div>

                    </div>
                </div >
                {this.state.curDialog === this.state.dL ? 
                <div className="selection row justify-content-center">
                    <div className="col-lg-6">
                        <button type='button' className="btn selectionBtn pink">Вариант 1</button>
                    </div>
                    <div className="col-lg-6">
                        <button type='button' className="btn selectionBtn pink">Вариант 2</button>
                    </div>
                    <div className="col-lg-6">
                        <button type='button' className="btn selectionBtn pink">Вариант 3</button>
                    </div>
                    <div className="col-lg-6">
                        <button type='button' className="btn selectionBtn pink">Вариант 4</button>
                    </div>
                </div>
                : <></>}
            </>
        )
    }
}
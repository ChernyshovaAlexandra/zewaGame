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


    render() {
        const { messages, hints } = this.props
        console.log('hints', hints)
        return (
            <>
                <div className="dialogs row">
                    <div className="col-lg-12">
                        <div className="row justify-content-center">
                            <div className="col-md-12 dialogs-container">
                                {messages && messages.map((item, index) => (
                                    <Dialog key={index} data={item} index={index} />
                                ))}
                                {hints && hints.map((item, index) => (
                                    <Dialog key={index} data={item} index={index} hints="hint"/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div >

            </>
        )
    }
}


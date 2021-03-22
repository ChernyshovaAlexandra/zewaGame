import React from 'react';
import present from '../../img/present-icon.png'
import ozon from '../../img/logos/ozon.png'
import zewa from '../../img/zewa.png'
import AllQuestsFinished from './AllQuestsFinished'
const cards = [
    {
        id: 0,
    },
    {
        id: 1
    }, {
        id: 2,
    }
]



const Back = ({ amount, logo, company }) => {
    return (
        <>
            <div>
                <div className="navRow">
                    <img src={logo} />
                    <img src={zewa} />
                </div>
                {company && <div className="contentText">Вы {!amount && 'уже'} получили подарочный
                    промокод на покупку продукции Zewa {company}</div>}
                {amount && <div className="promocode">Промокод {amount + '%'}</div>}
                <div className="icon">
                    <img src={present} alt="" />
                </div>
                {amount && <a href='https://vk.com/im?sel=-137564571' target="_blank" style={{ 'textDecoration': 'none' }}>
                    <div className="btn selectionBtn">Забрать подарок</div>
                </a>}
            </div>
        </>
    )
}


export const WinBlocks = ({ logo, flipped, toggleCard, canClick, selected, amount }) => {


    if (selected) {
        let item = cards[flipped]
        return (
            <div
                className={`${selected ? 'selected ' : ''}win-blocks-container`}
            >
                <div
                    onClick={canClick && (() => toggleCard(item.id))}
                    className={`block-win ${flipped === item.id ? 'flipped' : ''}`}
                    key={item.id}>
                    <div className="front">
                        <div className="logo-company">
                            <img src={logo.logo} />
                        </div>
                    </div>
                    <div className="back">
                        <div className="backContainer">
                            <div className="content-inner">
                                <Back
                                    amount={amount}
                                    logo={logo.logo}
                                    company={logo.company}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>{amount ? <div className='win-blocks-container'>
            {cards.map(item => (
                <div
                    onClick={canClick && (() => toggleCard(item.id))}
                    className={`block-win ${flipped === item.id ? 'flipped' : ''}`}
                    key={item.id}>
                    <div className="front">
                        <div className="logo-company">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="back">
                        <div className="backContainer">
                            <div className="content-inner">
                                <Back />
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
            :
            <AllQuestsFinished />}
        </>
    )
}
import React from 'react';


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


export const WinBlocks = ({ logo, flipped, toggleCard }) => {


    return (
        <div className='win-blocks-container'>
            {cards.map(item => (
                <div
                    onClick={() => toggleCard(item.id)}
                    className={`block-win ${flipped === item.id ? 'flipped' : ''}`}
                    key={item.id}>
                    <div className="front">
                        <div className="logo-company">
                            <img src={logo} />
                        </div>
                    </div>
                    <div className="back">
                        ВЫ выиграли 
                    </div>
                </div>))}
        </div>
    )
}
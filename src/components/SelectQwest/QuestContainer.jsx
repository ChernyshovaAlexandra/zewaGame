import React from 'react';

export const QuestContainer = ({ item, onClick, personalQuest }) => {
    return (
        <div
            className={`{${personalQuest ? 'personalQuest' : ''} quest-inner-content`}
            key={item.id}>
            <div className="quest-inner">
                <div className="imgContainer"><img src={item.img} alt='' /></div>
                <div className="dataConainer">
                    <h4>{item.name}</h4>
                    <p className="descriptionText">Проходи квест и получай призы от {item.name}</p>
                    <button className="playBtn selectionBtn" onClick={() => onClick(item.id)}>Играть</button>
                </div>
            </div>
        </div>
    )
}
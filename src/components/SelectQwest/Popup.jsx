import React from 'react';
import cancel from "../../img/cancel.png";




export const Popup = ({ setReady, cancelClick, popup }) => {
    return (
        <div className="modal-popup ">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-9 modal-Popup__content-inner">
                    <div className="cancelBut" onClick={cancelClick}   >
                        <img src={cancel} alt="" />
                    </div>
                    <div className="modal-container-popup">
                        Кажется, вы уже начали проходить этот квест. Хотите
                        продолжить?
                         <div className="row justify-content-center buttonsSet">
                            <div className="col-lg-auto">
                                <button
                                    className="playBtn selectionBtn againBut"
                                    onClick={() => setReady(popup, true)}
                                >
                                    Продолжить
                                </button>
                            </div>
                            <div className="col-lg-auto">
                                <button
                                    className="playBtn selectionBtn"
                                    onClick={() => setReady(popup, false)}
                                >
                                    Заново
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import bridge from '@vkontakte/vk-bridge';
import { connect } from 'react-redux'
import { showWinQModal } from '../../store/actions'
import Zewa from '../../img/zewa.png'
import logoGame from '../../img/logoGame.png'
import vk from '../../img/vk-social-network-logo.png'

class QuestWinModal extends React.Component {
    share = () => {
        bridge.send("VKWebAppShare", { "link": "https://vk.com/app7573089" });
    }
    render() {
        return (
            <section className="menu">
                <div className="row justify-content-center nav">
                    <div className="col-lg-3">
                        <img src={Zewa} alt="" />
                    </div>
                    <div className="col-lg-7">
                        <img src={logoGame} alt="" />
                    </div>
                </div>
                <div className="row justify-content-center "
                    style={{ 'marginTop': '2rem' }}
                >
                    <div className="col-lg-auto">
                        <p>Ура! Квест пройден</p>
                    </div>

                </div>
                <div className="row justify-content-center "
                    style={{ 'marginTop': '2rem' }}
                >
                    <div className="col-lg-5">
                        <button className="selectionBtn"
                            onClick={() => { this.share() }}>
                            Поделиться <img src={vk} alt="" style={{ 'max-height': '1.5rem' }} /></button>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = state => {
    return {
        questWin: state.store.questWin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showWinQModal: (quest) => dispatch(showWinQModal(quest))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestWinModal)
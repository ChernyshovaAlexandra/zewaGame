import React from 'react'
import './index.scss'
import zewa from '../../img/zewa.png'
import delo from '../../img/logoGame.png'
import magnit from '../../img/magnit-wh.png'
import QuestSelect from '../QuestWindows/QuestSelect'
import QuestInput from '../QuestWindows/QuestInput'

import { connect } from 'react-redux'
import { startGame, showRules, showRes } from '../../store/actions'



class Main extends React.Component {
    render() {
        const { questData } = this.props
        console.log(questData.answer)
        return (
            <section className="selectQwest mainBG container">
                <div className="row justify-content-between nav">
                    <div className="col-lg-2">
                        <img src={zewa} />
                    </div>
                    <div className="col-lg-3">
                        <img src={delo} />
                    </div>
                    <div className="col-lg-3">
                        <img src={magnit} />
                    </div>
                </div>
                <div className="row justify-content-center nav-mob">
                    <div className="col-lg-5">
                        <img src={delo} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={zewa} alt="" />
                    </div>
                    <div className="col-lg-4">
                        <img src={magnit} alt="" />
                    </div>
                </div>
                {questData.answer ?
                    <QuestInput  questData={questData}/> : <QuestSelect questData={questData} />}

            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        questData: state.store.questData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => dispatch(startGame()),
        showRules: () => dispatch(showRules()),
        showRes: () => dispatch(showRes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
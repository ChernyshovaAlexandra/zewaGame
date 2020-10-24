import React from 'react'
import Materials from '../Materials'
import Dialogs from '../Dialogs'
import './index.scss'
import { connect } from 'react-redux'
import { showWinQModal, showSelected, setNextMessage } from '../../store/actions'

class QuestInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hints: false,
            curHint: 0
        }
    }
    checkAnswer = (e, answer) => {
        const { questData, userData, setNextMessage } = this.props
        if (this.state.fomVal === questData.answer) {
            setNextMessage(userData.vk_id, questData.answered_node_id)
        }
        else {
            this.setState({
                hints: true
            })
        }
        e.preventDefault()
    }
    onChangeLogin = (e) => {
        e.preventDefault()
        this.setState({
            fomVal: (e.target.value).toString().toLowerCase()
        })
    }
    render() {
        const { questData } = this.props;

        return (
            <div className="inputArea">
                <Materials image={questData.image} />
                {this.state.hints ? <Dialogs hints={questData.hints} /> : <Dialogs messages={questData.messages} />}
                <div className="row justify-content-center answerBlock">
                    <div className="col-lg-auto">
                        <div className="row justify-content-center">
                            <div className="col-md-auto">
                                <b>Введите свой ответ</b>
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <form className="submitForm" onSubmit={(e) => { this.checkAnswer(e, this.value) }}>
                                    <input type="text" name="answer" id="answer" onChange={(e) => this.onChangeLogin(e)} />
                                    <label htmlFor="answer"></label>
                                    <button className="btn selectionBtn pink" type="submit" style={{ 'margin': 'auto' }}>
                                        {this.state.hints ? 'Попробуй еще раз' : 'Готово'}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questWin: state.store.questWin,
        userData: state.store.userData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showWinQModal: (quest) => dispatch(showWinQModal(quest)),
        showSelected: (quest) => dispatch(showSelected(quest)),
        setNextMessage: (vk_id, quest_id) => dispatch(setNextMessage(vk_id, quest_id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestInput)
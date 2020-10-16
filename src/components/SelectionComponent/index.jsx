import React from 'react'
import { connect } from 'react-redux'
import { showWinQModal, showSelected, setNextMessage } from '../../store/actions'




const variants = [
    {
        name: 'Конец квеста',
        action: true
    },
    {
        name: 'Вариант 2',
        action: false
    },
    {
        name: 'Вариант 3',
        action: false
    },
    {
        name: 'Вариант 4',
        action: false
    }
]

class Selection extends React.Component {
    checkClick = (id) => {
        const { setNextMessage } = this.props
        setNextMessage(0, id)

    }
    render() {
        const { buttons } = this.props
        console.log(buttons)
        return (
            <div className="selection row">
                {buttons && buttons.map((item, index) => (
                    <div
                        className={
                            buttons.length <= 2 ? "col-lg-12" : "col-lg-6"}

                        key={index}>
                        <button type='button'
                            className="btn selectionBtn pink"
                            onClick={() => { this.checkClick(item.node_id) }}
                        >{item.name}</button>
                    </div>
                ))}

            </div>
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
        showWinQModal: (quest) => dispatch(showWinQModal(quest)),
        showSelected: (quest) => dispatch(showSelected(quest)),
        setNextMessage: (vk_id, quest_id) => dispatch(setNextMessage(vk_id, quest_id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Selection)
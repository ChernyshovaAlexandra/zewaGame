import React from 'react'
import Materials from '../Materials'
import Dialogs from '../Dialogs'
import Selection from '../SelectionComponent'



export default class QuestSelect extends React.Component {
    render() {
        const { questData } = this.props
        return (
            <>
                <Materials image={questData.image} />
                <Dialogs messages={questData.messages} buttons={questData.buttons} />
                <Selection buttons={questData.buttons} />
            </>
        )
    }
}
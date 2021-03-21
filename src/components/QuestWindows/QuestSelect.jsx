import React from 'react'
import Materials from '../Materials'
import Dialogs from '../Dialogs'
import Selection from '../SelectionComponent'
import img from '../../img/img.jpg'


export default class QuestSelect extends React.Component {
    render() {
        const { questData, comics } = this.props

        return (
            <>
                { questData &&
                    <>
                        <Materials image={questData.image ? questData.image : img} />
                        <Dialogs messages={questData.messages} buttons={questData.buttons} />
                        <Selection buttons={questData.buttons} />
                    </>
                }
                { comics &&
                    <>
                        <Materials image={comics.desktop[0]} />

                    </>
                }
            </>
        )
    }
}
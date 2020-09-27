import React from 'react'
import './index.scss'
import Materials from '../Materials'
import Dialogs from '../Dialogs'

export default class Main extends React.Component {
    render() {
        return (
            <section className="container">
                <Materials />
                <Dialogs />
                
            </section>
        )
    }
}
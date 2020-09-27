import React from 'react'
import './index.scss'

export default class LoadingComponent extends React.Component {
    render() {
        return (
            <div className="loader">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
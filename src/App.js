import React from 'react'
import Main from './components/Main/Main'
import LoadingComponent from './components/LoadingComponent'
import './App.scss'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false
		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			})
		}, 1000)
	}
	render() {
		return (
			<div className="gameContainer">
				{this.state.loaded ? <Main /> : <LoadingComponent />}
			</div>
		)

	}
}
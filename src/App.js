import React from 'react'
import Menu from './components/MenuComponent'
import SelectQwest from './components/SelectQwest'
import Main from './components/Main'
import QuestWinModal from './components/QuestWinModal'
import LoadingComponent from './components/LoadingComponent'
import Rules from './components/Rules'
import Results from './components/Results'
import './App.scss'
import { connect } from 'react-redux'
import { startGame, showRules, showRes, setUserData, getQuestList, userLoadingFailed } from './store/actions'



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			body_to_send: null,
			nameForH2: 'user'
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			})

		}, 3000)

	}


	render() {
		const { start, selected, questWin, rules, results, hash } = this.props
		const { loaded } = this.state
		return (
			<div className="gameContainer">

				{
					rules ?
						<Rules /> :
						results ?
							<Results /> :
							questWin ?
								<QuestWinModal /> :
								selected ?
									<Main /> :
									start ?
										<SelectQwest hash={hash} /> :
										loaded ?
											<Menu name={this.state.nameForH2} /> :
											<LoadingComponent />
				}
				<small className="ligal">Количество купонов ограничено</small>
			</div>
		)

	}
}
const mapStateToProps = state => {
	return {
		rules: state.store.rules,
		start: state.store.start,
		results: state.store.results,
		selected: state.store.selected,
		questWin: state.store.questWin,
		userData: state.store.userData,
		userDataFailed: state.store.userDataFailed
	}
}

const mapDispatchToProps = dispatch => {
	return {
		startGame: () => dispatch(startGame()),
		showRules: () => dispatch(showRules()),
		showRes: () => dispatch(showRes()),
		setUserData: (data) => dispatch(setUserData(data)),
		getQuestList: (data) => dispatch(getQuestList(data)),
		userLoadingFailed: () => dispatch(userLoadingFailed())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
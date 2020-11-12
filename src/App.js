import React from 'react'
import Menu from './components/MenuComponent'
import SelectQwest from './components/SelectQwest'
import Main from './components/Main'
import QuestWinModal from './components/QuestWinModal'
import LoadingComponent from './components/LoadingComponent'
import Rules from './components/Rules'
import './App.scss'
import { connect } from 'react-redux'
import { startGame, showRules, showRes, setUserData, getQuestList, userLoadingFailed } from './store/actions'
import bridge from '@vkontakte/vk-bridge';


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			body_to_send: null,
			nameForH2: 'user'
		}

	}
	// getUserInfo = () => {
	// 	const { setUserData } = this.props
	// 	bridge.subscribe((e) => {
	// 		if (e.detail.type === 'VKWebAppGetUserInfoResult') {
	// 			this.setState({
	// 				name: e.detail.data.first_name,
	// 				body_to_send: {
	// 					vk_id: e.detail.data.id,
	// 					name: e.detail.data.first_name + " " + e.detail.data.last_name,
	// 				},
	// 				loaded: true,
	// 				nameForH2: e.detail.data.first_name,
	// 				modalTxt: false
	// 			})
	// 			setUserData(this.state.body_to_send)
	// 		}
	// 	})
	// 	bridge.send("VKWebAppGetUserInfo")

	// }




	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			})

		}, 3000)
	}


	render() {
		const { start, selected, questWin, rules } = this.props
		const { loaded } = this.state
		return (
			<div className="gameContainer">

				{
					rules ?
						<Rules /> :
						questWin ?
							<QuestWinModal /> :
							selected ?
								<Main /> :
								start ?
									<SelectQwest /> :
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
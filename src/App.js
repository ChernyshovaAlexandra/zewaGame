import React from 'react'
import Menu from './components/MenuComponent'
import SelectQwest from './components/SelectQwest'
import Main from './components/Main'
import QuestWinModal from './components/QuestWinModal'
import LoadingComponent from './components/LoadingComponent'
import './App.scss'
import { connect } from 'react-redux'
import { startGame, showRules, showRes, setUserData } from './store/actions'
import bridge from '@vkontakte/vk-bridge';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			body_to_send: null
		}
		this.getUserInfo()

	}
	getUserInfo = () => {

		bridge.subscribe((e) => {

			if (e.detail.type === 'VKWebAppGetUserInfoResult') {
				this.setState({
					name: e.detail.data.first_name,
					body_to_send: {
						vk_id: e.detail.data.id,
						name: e.detail.data.first_name + " " + e.detail.data.last_name
					}
				})
				this.login()
			}
		
		})
		bridge.send("VKWebAppGetUserInfo")
	}



	login = async () => {
		const { setUserData } = this.props
		let th = this
		if (this.state.body_to_send) {
			let response = await fetch('https://back.zewaquests.ru/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest'
				},
				body: JSON.stringify(th.state.body_to_send)

			})
			let jsR = await response.json()

			setUserData(this.state.body_to_send)
		}
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loaded: true
			})
		}, 30)
	}
	render() {
		const { start, selected, questWin } = this.props
		const { loaded } = this.state
		return (
			<div className="gameContainer">
				{selected ?
					<Main /> :
					questWin ?
						<QuestWinModal /> :
						start ?
							<SelectQwest /> :
							loaded ?
								<Menu /> :
								<LoadingComponent />
				}
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
		userData: state.store.userData
	}
}

const mapDispatchToProps = dispatch => {
	return {
		startGame: () => dispatch(startGame()),
		showRules: () => dispatch(showRules()),
		showRes: () => dispatch(showRes()),
		setUserData: (data) => dispatch(setUserData(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
import {
    START_GAME,
    SHOW_RULES,
    SHOW_RESULTS,
    SHOW_SELECTED,
    SET_QUEST_READY,
    SHOW_QUEST_WIN_MODAL,
    SET_QUEST_LIST,
    GET_QUEST,
    SET_USER_DATA
} from './actionTypes'
import { defaultState } from './reducers'



export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data
})
export const startGame = () => ({
    type: START_GAME,
    payload: true
})
export const showRules = () => ({
    type: SHOW_RULES,
    payload: true
})
export const showRes = () => ({
    type: SHOW_RESULTS,
    payload: true
})
export const showSelected = () => ({
    type: SHOW_SELECTED,
    payload: true
})
export const setQuestReady = (newListOfQuests) => ({
    type: SET_QUEST_READY,
    payload: newListOfQuests
})

export const showWinQModal = (quest) => ({
    type: SHOW_QUEST_WIN_MODAL,
    payload: quest
})

export const getQuest = (vk_id, quest_id) => {

    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/quest/' + (quest_id) + '/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                vk_id: vk_id
            })
        })
        let jsR = await response.json()

        if (!jsR.error) {
            dispatch({
                type: GET_QUEST,
                payload: jsR
            })
            // setQuestReady()
        }
    }
}

export const setNextMessage = (vk_id, quest_id) => {

    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/node/' + (quest_id) + '/click',
            // 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                    vk_id: vk_id
                })
            })
        let jsR = await response.json()

        if (!jsR.error) {
            dispatch({
                type: GET_QUEST,
                payload: jsR
            })
        }
    }
}


export const getQuestList = () => {
    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/quests', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }

        })
        let jsR = await response.json()
        console.log(jsR)
        let quests = jsR.map((item, index) => {
            return {
                name: item.name,
                isActive: true,
                // index==2 ? true : false
                sale: 30 + 10 * index,
                // img: defaultState.quests[index].img,
                img: item.image,
                isReady: false
            }
        })

        if (!jsR.error) {
            dispatch({
                type: SET_QUEST_LIST,
                payload: quests
            })
        }
    }
}

export const getKupon = (vk_id) => {
    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/promocode',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({
                    vk_id: vk_id
                })
            })
        let jsR = await response.json()

        if (!jsR.error) {
            dispatch({
                type: GET_QUEST,
                payload: jsR
            })
        }
    }
}


// POST /api/promocode
// передать vk_id
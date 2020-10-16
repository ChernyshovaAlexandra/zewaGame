import {
    START_GAME,
    SHOW_RULES,
    SHOW_RESULTS,
    SHOW_SELECTED,
    SET_QUEST_READY,
    SHOW_QUEST_WIN_MODAL,
    GET_QUEST
} from './actionTypes'


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

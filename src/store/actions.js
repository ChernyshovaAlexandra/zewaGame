import {
    START_GAME,
    SHOW_RULES,
    SHOW_RESULTS,
    SHOW_SELECTED,
    SET_QUEST_READY,
    SHOW_QUEST_WIN_MODAL,
    SET_QUEST_LIST,
    GET_QUEST,
    SET_USER_DATA,
    GET_COMICS,
    SET_HINT,
    SET_DISCOUNT,
    DID_REPOST,
    SET_CUR_REQDY_QUEST
} from './actionTypes'



export const getComics = (comics) => ({
    type: GET_COMICS,
    payload: comics
})
export const setHint = (hint) => ({
    type: SET_HINT,
    payload: hint
})
export const setUserData = (data) => ({
    type: SET_USER_DATA,
    payload: data
})
export const startGame = (action) => ({
    type: START_GAME,
    payload: action
})
export const showRules = (action) => ({
    type: SHOW_RULES,
    payload: action
})
export const showRes = () => ({
    type: SHOW_RESULTS,
    payload: true
})
export const showSelected = (action) => ({
    type: SHOW_SELECTED,
    payload: action
})
export const setQuestReady = (newListOfQuests) => ({
    type: SET_QUEST_READY,
    payload: newListOfQuests
})

export const showWinQModal = (vk_id, quest) => (
    {
        type: SHOW_QUEST_WIN_MODAL,
        payload: quest
    })

export const getQuest = (vk_id, quest_id, isReady) => {

    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/quest/' + (quest_id) + '/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify({
                vk_id: vk_id,
                isContinue: isReady
            })
        })
        let jsR = await response.json()
        if (!jsR.error) {
            if (jsR.desktop) {

                dispatch({
                    type: GET_COMICS,
                    payload: jsR
                })
            }
            else {
                dispatch({
                    type: GET_COMICS,
                    payload: false
                })
                dispatch({
                    type: GET_QUEST,
                    payload: jsR
                })
            }
            dispatch({
                type: SET_CUR_REQDY_QUEST,
                payload: quest_id
            })
        }
    }
}

export const setNextMessage = (vk_id, quest_id) => {
    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/node/' + (quest_id) + '/click',
            // let response = await fetch('https://back.zewaquests.ru/api/node/177/click',
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
            if (jsR.desktop) {
                dispatch({
                    type: GET_COMICS,
                    payload: jsR
                })
            }
            if (jsR.finished_quests_count) {
                dispatch({
                    type: SET_QUEST_READY,
                    payload: jsR.finished_quests_count
                })
            }
            if (jsR.discount_amount) {
                dispatch({
                    type: SET_DISCOUNT,
                    payload: jsR.discount_amount
                })
            }
            if (jsR.final) {
                dispatch({
                    type: SET_CUR_REQDY_QUEST,
                    payload: quest_id
                })
            }
            else {
                dispatch({
                    type: GET_COMICS,
                    payload: false
                })
                dispatch({
                    type: GET_QUEST,
                    payload: jsR
                })
            }
        }
    }
}


export const getQuestList = (vk_id) => {
    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/quests', {
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

        let quests = jsR.questsList.map((item, index) => {
            return {
                name: item.name,
                id: item.id,
                isActive: index <= jsR.finished_quests_count ? true : false,
                sale: 20 + 10 * index,
                continue: item.continue ? item.continue : false,
                img: item.image,
                isReady: item.isFinished ? item.isFinished : false
            }
        })
        if (jsR.finished_quests_count) {
            dispatch({
                type: SET_QUEST_READY,
                payload: jsR.finished_quests_count
            })
        }
        if (jsR.discount_amount) {
            dispatch({
                type: SET_DISCOUNT,
                payload: jsR.discount_amount
            })
        }
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
export const didRepost = (vk_id) => {
    return async dispatch => {
        let response = await fetch('https://back.zewaquests.ru/api/repost',
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
                type: DID_REPOST,
                payload: jsR.success
            })
        }
    }
}

// POST /api/promocode
// передать vk_id
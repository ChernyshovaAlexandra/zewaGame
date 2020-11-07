import {
    START_GAME,
    SHOW_RULES,
    SHOW_RESULTS,
    SHOW_SELECTED,
    SET_QUEST_READY,
    SET_QUEST_LIST,
    SHOW_QUEST_WIN_MODAL,
    GET_QUEST,
    SET_USER_DATA,
    GET_COMICS,
    SET_HINT,
    SET_DISCOUNT,
    DID_REPOST,
    SET_CUR_REQDY_QUEST
} from './actionTypes'
import { combineReducers } from 'redux'

export const defaultState =
{
    rules: false,
    start: false,
    selected: false,
    results: false,
    quests: false,
    curHint: 0,
    questWin: true,
    questData: [],
    userData: {
        name: 'user',
        vk_id: 9801302
    },
    questsReady: 0,
    discount: '70',
    curReadyQuest: 1
}


export const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case START_GAME:
            return { ...state, start: action.payload }
        case SHOW_RULES:
            return { ...state, rules: action.payload }
        case SHOW_RESULTS:
            return { ...state, results: action.payload }
        case SHOW_SELECTED:
            return { ...state, selected: action.payload }
        case SET_QUEST_READY:
            return { ...state, questsReady: action.payload < 5 ? action.payload : 4 }
        case SHOW_QUEST_WIN_MODAL:
            return { ...state, questWin: action.payload }
        case GET_QUEST:
            return { ...state, questData: action.payload }
        case SET_QUEST_LIST:
            return { ...state, quests: action.payload }
        case SET_USER_DATA:
            return { ...state, userData: action.payload }
        case GET_COMICS:
            return { ...state, comics: action.payload }
        case SET_HINT:
            return { ...state, curHint: action.payload }
        case SET_DISCOUNT:
            return { ...state, discount: action.payload }
        case DID_REPOST:
            return { ...state, repost: action.payload }
        case SET_CUR_REQDY_QUEST:
            return { ...state, curReadyQuest: action.payload }

    }

    return state
}

export const rootReducer = combineReducers({
    store: mainReducer
})







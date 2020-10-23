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
    GET_COMICS
} from './actionTypes'
import { combineReducers } from 'redux'
import image1 from '../img/quest1.jpg'
import image2 from '../img/quest2.jpg'
import image3 from '../img/quest3.jpg'
import image4 from '../img/quest4.jpg'
import image5 from '../img/quest5.jpg'

export const defaultState =
{
    rules: false,
    start: false,
    selected: false,
    results: false,
    quests: [
        {
            name: 'Название первого<br/>квеста Зева',
            isActive: true,
            sale: '20',
            img: image1,
            isReady: false
        },
        {
            name: 'Название второго<br/>квеста Зева',
            isActive: true,
            sale: '30',
            img: image2,
            isReady: true
        },
        {
            name: 'Название третьего<br/>квеста Зева',
            isActive: true,
            sale: '40',
            img: image3,
            isReady: false
        },
        {
            name: 'Название четвертого<br/>квеста Зева',
            isActive: true,
            sale: '50',
            img: image4,
            isReady: false
        },
        {
            name: 'Название пятого<br/>квеста Зева',
            isActive: false,
            sale: '60',
            img: image5,
            isReady: false
        }
    ],
    questWin: false,
    questData: [],
    userData: {
        name: 'user',
        vk_id: 9801302
    }
}


export const mainReducer = (state = defaultState, action) => {
    // eslint-disable-next-line default-case
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
            return { ...state, quests: action.payload }
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
    }

    return state
}

export const rootReducer = combineReducers({
    store: mainReducer
})







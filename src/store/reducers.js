import {
    START_GAME,
    SHOW_RULES,
    SHOW_RESULTS,
    SHOW_SELECTED,
    SET_QUEST_READY,
    SHOW_QUEST_WIN_MODAL,
    GET_QUEST
} from './actionTypes'
import { combineReducers } from 'redux'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'
import image5 from '../img/image5.png'

const defaultState =
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
            isActive: false,
            sale: '30',
            img: image2,
            isReady: false
        },
        {
            name: 'Название третьего<br/>квеста Зева',
            isActive: false,
            sale: '40',
            img: image3,
            isReady: false
        },
        {
            name: 'Название четвертого<br/>квеста Зева',
            isActive: false,
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
    questData: []
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
    }

    return state
}

export const rootReducer = combineReducers({
    store: mainReducer
})







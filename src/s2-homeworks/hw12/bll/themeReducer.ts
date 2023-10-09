import {legacy_createStore} from "redux";
import store from "../../hw10/bll/store";

type changeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state:ThemeReducerType = initState, action: changeThemeIdAT): ThemeReducerType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeIdAC = (id: number): changeThemeIdAT => ({type: 'SET_THEME_ID', id}) // fix any

// export const store = legacy_createStore(themeReducer)
export type ThemeReducerType = { themeId: number }
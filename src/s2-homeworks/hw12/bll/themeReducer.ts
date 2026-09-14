const initState = {
    themeId: 1,
}

type StateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: themeIdActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type themeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): themeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

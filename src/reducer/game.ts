export const MESSAGE_GAME = "MESSAGE_GAME"


const initialState = {
    message:""
}

export function theGame(state = initialState, action: any) {
    switch (action.type) {
        case MESSAGE_GAME:
            return Object.assign({}, state, {
                message: action.message
            })
        default:
            return state
    }
}
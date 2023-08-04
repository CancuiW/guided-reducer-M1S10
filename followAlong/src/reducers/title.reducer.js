import { SET_TITLE, TOGGLE_EDITING, SET_NEW_TEXT_TITLE } from './../actions/title.action'



export const initialState = { title: 'Hello earthlings!', editing: false, newTitleText: "" }

const reducer = (state, action) => {
    switch(action.type){
        case (SET_TITLE):
            return ({ editing: false, title: action.payload, newTitleText: "" })
        case (TOGGLE_EDITING):
            return ({ ...state, editing:!state.editing})
        case (SET_NEW_TEXT_TITLE):
            return ({ ...state, newTitleText:action.payload})
        default:
            return state
    };
        
        

    
}
export default reducer
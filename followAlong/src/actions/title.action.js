


export const SET_TITLE ='SET_TITLE';
export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const SET_NEW_TEXT_TITLE = 'SET_NEW_TEXT_TITLE';

//const [state, dispatch] = useReducer(reducer, initialState)
export const setTitle=(title)=>{
        return { type: SET_TITLE,payload:title }
}

export const setNewTitleText = (newText) => {
    return { type: SET_NEW_TEXT_TITLE,payload:newText}
}
export const toggleEditing=()=>{
    return {type: TOGGLE_EDITING}
}


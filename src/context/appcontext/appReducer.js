import {ADD_CONTENT} from '../../types'

export default (state, action) => {
    switch(action.type){
        case ADD_CONTENT: 
            return {
                ...state, 
                content: [...state.content, action.payload]
            };
        default: 
            return state
    }
}
import { SET_INDEX } from "../actions/Header";

const initialState = {
    indexHeader : 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_INDEX :
            return Object.assign({}, state, {
                indexHeader: action.result
            });
        default :
            return state;
    }
}


export function getIndex(state) {
    return state.header.indexHeader;
}
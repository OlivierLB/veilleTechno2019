export const SET_INDEX = "SET_INDEX";

export const setIndex = (result) => {
    return { type: SET_INDEX, result}
}

export function addIndex(value) {
    return(dispatch) =>{
        dispatch(setIndex(value));
    }
}
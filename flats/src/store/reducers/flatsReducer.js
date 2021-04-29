import {LIKE_TOGGLE, SET_FLATS} from "../actions/flatsActions";

let initialState = {

    flats: [],
}

const flatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLATS:
            return {
                ...state, flats: action.flats
            }
        case LIKE_TOGGLE:
            return {
                ...state, flats: state.flats.map((val) => {
                    if (val.id === action.flatsId) {
                        return {...val, like: !val.like}
                    }
                    return val
                })
            }

        default:
            return state
    }
}

export default flatsReducer;
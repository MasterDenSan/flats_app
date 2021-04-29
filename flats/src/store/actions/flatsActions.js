import {flatsAPI} from "../../api/api";

export const SET_FLATS = "SET_FLATS";
export const LIKE_TOGGLE = "LIKE_TOGGLE";

//ActionCreators
export const setFlats = (flats) => ({type: SET_FLATS, flats})
export const likeToggle = (flatsId) => ({type: LIKE_TOGGLE, flatsId})


//Thunks
export const getFlatsThunk = () => {
    return async (dispatch) => {
        const data = await flatsAPI.getFlats();
        dispatch(setFlats(data));
    }
}

export const likeToggleThunk = (id) => {
    return async (dispatch) => {
        await flatsAPI.likeToggle(id);
        dispatch(likeToggle(id))
    }
}
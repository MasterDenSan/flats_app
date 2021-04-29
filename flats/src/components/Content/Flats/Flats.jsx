import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Flat from "./Flat/Flat";
import './Flats.scss'
import {getFlatsThunk, likeToggleThunk} from "../../../store/actions/flatsActions";


const Flats = React.memo(() => {
    const dispatch = useDispatch()
    const flats = useSelector(state => state.flatsContent.flats)

    useEffect(
        () => {
            dispatch(getFlatsThunk());

        },
        [])

    const likeToggleCall = useCallback((id) => dispatch(likeToggleThunk(id)), [])


    return (
        <div className="flats">
            {flats.map((flat, index) => <Flat key={index} flat={flat} likeToggleCall={likeToggleCall}/>)}
        </div>


    )
})

export default Flats;
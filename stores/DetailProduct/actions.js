import axios from "axios"
import { useDispatch } from "react-redux";
import { URL } from "../../constants";
import { DetailActionTypes } from "./actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from '../store'
const {dispatch} = store
/********************************************************
 *              REDUCERS FUNCTIONS
 ********************************************************/



/********************************************************
 *              AXIOS
 ********************************************************/


const set_detail_product = (payload) =>{
    return{
        type: DetailActionTypes.SET_DETAIL_PRODUCTS,
        payload: payload
    }
}


export const SET_DETAIL_PRODUCT = (item) => {
    dispatch(
        set_detail_product(item)
    )
}
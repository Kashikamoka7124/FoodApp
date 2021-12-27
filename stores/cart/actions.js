import axios from "axios"
import { useDispatch } from "react-redux";
import { URL } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from '../store'
import { CartActionTypes } from "./cartActionTypes";
const {dispatch} = store
/********************************************************
 *              REDUCERS FUNCTIONS
 ********************************************************/
export const cart = (payload) => {
    return{
        type: CartActionTypes.SET_CART,
        payload: payload
    }
}

export const addcart = (payload) => {
    return{
        type: CartActionTypes.ADD_CART,
        payload: payload
    }
}

export const getcart = () => {
    return{
        type: CartActionTypes.GET_CART,
        // payload: payload
    }
}

export const addQty = (payload) => {
    return{
        type: CartActionTypes.ADD_QTY,
        payload: payload
    }
}

export const minusQty = (payload) => {
    return{
        type: CartActionTypes.MINUS_QTY,
        payload: payload
    }
}

export const removeCart = (payload) => {
    return{
        type: CartActionTypes.REMOVE_ITEM_CART,
        payload: payload
    }
}
/********************************************************
 *              AXIOS
 ********************************************************/


export const CART = (data, Loading) =>{
    // console.log("Cart Fucntions",data)
    axios({
        method: 'post',
        url: `${URL.GET_CART}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status == 200){
            dispatch(
                cart(payload = response.data)
            )
            Loading(false)
        }

      }).catch((e) => {
          console.log("error ====>>>>>", e)
      });

}

export const ADDCART = (data, action, setLoading) =>{
    axios({
        method: 'post',
        url: `${URL.ADD_CART}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status == 200){
            dispatch(
                addcart(payload = response.data)
            )
            // console.log(response.data)
            setLoading(false)

        }

      }).catch((e) => {
          console.log("CART error ====>>>>>", e)
      });

}


export const REMOVE_ITEM_CART = (data) =>{
    axios({
        method: 'post',
        url: `${URL.REMOVE_CART}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status == 200){
            console.log(response.data)
        }

      }).catch((e) => {
          console.log("error ====>>>>>", e)
      });

}

export const MINUSQTY = (data) => {
    axios({
        method: 'post',
        url: `${URL.MINUS_CART}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status == 200){
            console.log(response.data)
        }

      }).catch((e) => {
          console.log("error ====>>>>>", e)
      });

}


export const ADDQTY = (data) => {
    axios({
        method: 'post',
        url: `${URL.ADDQTY}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status == 200){
            console.log(response.data)
        }

      }).catch((e) => {
          console.log("error ====>>>>>", e)
      });
    // console.log(data)

}
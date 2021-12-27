import axios from "axios"
import { useDispatch } from "react-redux";
import { URL, loading } from "../../constants";
import { ProductActionTypes } from "./actionsTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from '../store'
const {dispatch} = store
/********************************************************
 *              REDUCERS FUNCTIONS
 ********************************************************/
const getProducts = (payload) => {
    return{
        type: ProductActionTypes.GET_PRODUCTS,
        payload: payload
    }
}

/********************************************************
 *              AXIOS
 ********************************************************/


export const PRODUCTS = () =>{

    axios({
        method: 'get',
        url: `${URL.GET_PRODUCTS}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then(async (response) => {
        if (response.status == 200){
            await dispatch(
                getProducts(payload = response.data)
            )
        }

      }).catch((e) => {
          console.log("error ====>>>>>", e)
      });

}

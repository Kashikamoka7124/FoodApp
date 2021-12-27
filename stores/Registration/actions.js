import axios from "axios"
import { useDispatch } from "react-redux";
import { URL } from "../../constants";
import { ActionTypes } from "./actionsTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from '../store'
export const {dispatch} = store
// *********************** REDUCERS FUNCTIONS *********************
export const setLogIn = (payload) =>{
    return {
        type: ActionTypes.SET_LOGGED_IN,
        payload: payload
    }
}


export const setLogOut = (payload) =>{
    return {
        type: ActionTypes.SET_LOGGED_OUT,
        payload: payload
    }
}

export const checkStatus = (payload) =>{
    return {
        type: ActionTypes.CHECK_STATUS,
        payload: payload
    }
}




// *********************** END REDUCERS FUNCTIONS *********************

// ******************  AXIOS *****************************

export const REGISTER = (data, action) =>{

    axios({
        method: 'post',
        url: `${URL.REGISTRATION}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.status == 200){
            console.log(response.data);
            return action
        }

      }).catch((e) => {
          console.log("error ====>>>>>", e)
      });

}

export const set_login = async(data) => {
    await AsyncStorage.setItem("Users", data)
}
export const get_user = async() => {
    return await AsyncStorage.getItem("Users")
}
export const set_user_logout = async()=>{
    return await AsyncStorage.removeItem("Users")
}

export const LOGIN = (data, action, cartFunction) => {
    // console.log(data)
    axios({
        method: 'post',
        url: `${URL.LOGIN}`,
        data: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }).then(async (response) => {
        if (response.status === 200){
            dispatch(
                setLogIn(payload = {
                token :response.data,
                LoggedIn: true
              })
            )
            console.log("LOGIN", response.data)
            set_login(response.data)
            await action()


        }

      }).catch((e) => {
          console.log("error ====>>>>", e)
        //   return 
      });

}

export const CHECK_USER = (data) => {
    
    dispatch(setLogIn(
        payload = {
            token: data,
            LoggedIn: true
        }
    ))

}


export const LOGOUT = async(action) => {
    dispatch(
        setLogOut(payload = {
            token: null,
            LoggedIn:false
        })
    )
    set_user_logout()

}

// export const CHECK_STATUS = () =>{
//     return checkStatus()
// }
// ******************  AXIOS *****************************

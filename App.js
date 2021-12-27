import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import Routes from './routes/routes';
import store from './stores/store';
import {
  CHECK_USER,
  LOGOUT,
  setLogOut,
  setLogIn,
  set_user_logout,
  set_login} from './stores/Registration/actions'
import {
  addcart
} from "./stores/cart/actions"
import { CART } from './stores/cart/actions';
import { URL } from "./constants";
import axios from 'axios';
import { dispatch } from './stores/Registration/actions';
import { PRODUCTS } from './stores/Product/actions';


const App = () => {
  useEffect(() =>{
    const check_user = async() =>{
      user = await AsyncStorage.getItem("Users")
      console.log("APP Token", user)
      if(user){
          data = {
            'token' : user
          }
          axios({
            method: 'post',
            url: `${URL.CHECK_USER}`,
            data: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }).then(async (response) => {
            if (response.status === 200){
              await dispatch(
                    setLogIn(payload = {
                    token :response.data.users.token,
                    LoggedIn: true
                  })
                )
                set_login(data = response.data.users.token)
                PRODUCTS()

                // console.log("Response Check user", response.data.users.token)    
            }
    
          }).catch((e) => {
              console.log("error ====>>>>", e)
              LOGOUT()
              set_user_logout()
            //   return 
          });
    
      }
    }
    check_user()

  })
  
  return (
    <Provider store = {store}>
      <Routes />
    </Provider>
  )
}

export default App


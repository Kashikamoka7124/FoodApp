import {actionType} from "../constants/actionTypes"

export const setSelectedTabSuccess = ( selectedTab ) => ({
    type: actionType.SET_SELECTED_TAB,
    payload: { selectedTab }
})


export function setSelectedTab(selectedTab){
    return dispatch => {
        dispatch(setSelectedTabSuccess(selectedTab))
    }
}

export const LOGINDONE = () =>{
    console.log("response ====>>>>> Facebook Login done ")
} 
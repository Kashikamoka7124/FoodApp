const API_BASE_URL =  "http://ed2f-119-160-59-31.ngrok.io/api/";
const ImageURL =  "http://ed2f-119-160-59-31.ngrok.io/storage";

const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const getImage  = (endpoint) => {
    console.log(ImageURL + endpoint)
    return ImageURL + endpoint

}

export const URL = {
    LOGIN: getApiUrl('user/login'),
    LOGOUT: getApiUrl('user/logout'),
    REGISTRATION: getApiUrl('user/register'),
    FORGET_PASSWORD: getApiUrl('user/reset-password'),
    OTP_VARIFY: getApiUrl('user/otp-varify'),
    CHECK_USER: getApiUrl('user/getuser'),
    GET_PRODUCTS:getApiUrl('product'),
    GET_CART:getApiUrl('product/cart'),
    ADD_CART:getApiUrl('product/addtocart'),
    UPDATE_CART:getApiUrl('product/updatetocart'),
    MINUS_CART:getApiUrl('product/minustocart'),
    REMOVE_CART:getApiUrl('product/removetocart'),
    ADDQTY:getApiUrl('product/addqtytocart'),
}
 
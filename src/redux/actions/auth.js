import axios from 'axios'
import { toast } from 'react-toastify'


export const registerAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:5000/register',authData)

        dispatch({type:'Register', payload:data})

        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position:"top-right",
            autoClose:5000,
        })
    }
}

export const loginAction = (authData) => async(dispatch) => {
    try {
        const {data} = await axios.post('http://localhost:5000/login',authData)

        dispatch({type:'Login', payload:data})

        window.location = '/'
    } catch (error) {
        toast(error.response.data.msg, {
            position:"top-right",
            autoClose:5000,
        })
    }
}
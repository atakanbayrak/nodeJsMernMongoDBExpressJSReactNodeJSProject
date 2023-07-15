import React, { useState } from 'react'
import { loginAction, registerAction } from '../redux/actions/auth'
import {useDispatch} from 'react-redux'

const Auth = () => {
  const [signUp, setSignUp] = useState(true)
  const [authData, setAuthData] = useState({username: "", email: "", password: ""})
  const dispatch = useDispatch()

  const onChangeFunc = (e) => {
      setAuthData({...authData, [e.target.name]: e.target.value})
  }

  const authFunc = () => {
    if(signUp){
      dispatch(registerAction(authData))
    }
    else{
      dispatch(loginAction(authData))
    }
  }

  console.log("authData", authData)
  //setSignUp state onClick eventleri için kullanıldı. signUp ise static olanlar için
  return (
    <div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
        <div className='w-1/3 bg-white p-3'>
            <h1 className='text-2xl text-indigo-600 font-bold mb-2'>{signUp ? "Register" : "Login"}</h1>
            <div className='flex flex-col space-y-3 mb-5'>
                {signUp && <input value={authData.username} name="username" onChange={onChangeFunc} type='text' placeholder='Username' className='input-style'/>}
                <input value={authData.email} name="email" onChange={onChangeFunc} type='text' placeholder='Email' className='input-style'/>
                <input value={authData.password} name="password" onChange={onChangeFunc} type='text' placeholder='Password' className='input-style'/>
            </div>
            <div className='text-red-500 text-xs cursor-pointer mb-4'>
              {
                signUp ? <span onClick={()=>setSignUp(false)}>Daha önce giriş yaptınız mı?</span> : <span onClick={()=>setSignUp(true)}>Kayıt olmak için tıklayınız.</span>
              }
            </div>
            <div onClick={authFunc} className='cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded-md'>
                {signUp ? "Kayıt Ol" : "Giriş Yap"}
            </div>

        </div>
    </div>
  )
}

export default Auth
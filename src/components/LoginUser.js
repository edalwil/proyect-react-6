import React, {useState } from 'react';
import FormUserNew from './FormUserNew';
import { useForm } from 'react-hook-form';
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunks, setValidateUser } from '../redux/actions';


const LoginUser = () => {
      const validateUser = useSelector(state => state.validateUser)
      const dispatch = useDispatch()
      
      const [singUp, setSingUp] = useState(false)
      const [loginErrot,setLoginError] = useState("")
      const { register, handleSubmit, } = useForm();

      const submit = e => {
            const keyUser = {
                  email: e.email,
                  password: e.password
            }
            dispatch(loginUserThunks(keyUser))
                  .then(res =>{ 
                        setLoginError("")
                        dispatch(setValidateUser(true))       
                  })
                  .catch(error => {
                        setLoginError(error.response?.data?.message)
                  })
      }

      return (
            <>
                  <button className='icon' onClick={() => {
                                    dispatch(setValidateUser(!validateUser)) 
                                    setSingUp(null)
                  }}>
                                    <i className="fa-solid fa-user"></i>
                  </button>
                              {
                                    validateUser &&  
                                    <div className='user-header animate__animated animate__zoomIn' >
                                          <i className="fa-solid fa-circle-user"></i>
                                    <div className='container-test-data'>
                                          <h4>Test data</h4>
                                          <p>
                                                <i className="fa-solid fa-envelope"></i>
                                                john@gmail.com
                                          </p>
                                          <p>
                                                <i className="fa-solid fa-key"></i>
                                                john1234
                                          </p>
                                    </div>
                                    <form  className='form-user' onSubmit={handleSubmit(submit)}>
                                          <label htmlFor="email" className='label-user' >Email </label>
                                          <input type="email" id='email' className='input-user' {...register("email")}/>
                                          <label htmlFor="password" className='label-user'>Password</label>
                                          <input type="password" id='password' className='input-user'  {...register("password")}/>
                                          <button className='login-user' >Login</button>
                                          <p className='error-login'>{loginErrot}</p>
                                    </form>
                                    <p>Don´t have an account? <button className='button-sign-up' onClick={() => {
                                          setSingUp(!singUp)
                                          dispatch(setValidateUser(false))
                                    }}>Sing up</button></p>
                                    </div>
                              }
                              {
                                    singUp && <FormUserNew  setSingUp={setSingUp}/>
                              }
            </>
      );
};

export default LoginUser;
import React from 'react';
import "../styles/FormUserNew.css"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { newUserThunks, setValidateUser } from '../redux/actions';



const FormUserNew = ({ setSingUp}) => {

      const { register, handleSubmit } = useForm();
      const dispatch = useDispatch()

      const submit = (e) => {
            const userNew = {
                  email:  e.email,
                  firstName: e.firstName,
                  lastName: e.lastName,
                  password: e.password,
                  phone: e.phone,
            }
            dispatch(newUserThunks(userNew))
                  .then(res => {
                        setSingUp(false)
                       dispatch(setValidateUser(true))
                  })
      }

      return (
            <div className='container-form-user'>
                        <i className="fa-solid fa-circle-user"></i>
                  <form className='form-user-new' onSubmit={handleSubmit(submit)}>
                        <div>
                              <label htmlFor="email">Email</label><br />
                              <input type="email" id='email' required {...register("email")} /><br />
                        </div>
                        <div>
                              <label htmlFor="firstName">First Name</label><br />
                              <input type="text" id='firstName' {...register ("firstName")}/><br />
                        </div>
                        <div>
                              <label htmlFor="lastName">Last Name</label><br />
                              <input type="text" id='lastName' {...register("lastName")} /><br />
                        </div>
                        <div>
                               <label htmlFor="password">password</label><br />
                               <input type="password" id='password' {...register("password")}/><br />
                        </div>
                        <div>
                              <label htmlFor="phone">Phone ( 10 character)</label><br />
                              <input type="number" id='phone' {...{...register("phone")}}/><br />
                        </div>
                        <button className='login-user'>Sign up</button>
                  </form>
                  <p>Have an account? <button className='button-login' onClick={() => {
                        return(
                              dispatch(setValidateUser(true)),
                              setSingUp(false)
                        )
                  }}>Login</button></p>
            </div>
      );
};

export default FormUserNew;
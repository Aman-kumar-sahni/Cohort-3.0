import React from 'react'
import { useForm } from 'react-hook-form'
import { loginUserAction } from './authAction'
import { useDispatch } from 'react-redux'

const authHooks = () => {
  const dispatch = useDispatch()

 const {register,handleSubmit,formState:{errors},watch ,reset}  = useForm()
 const loginHandle=(data)=>{

console.log(data)
dispatch(loginUserAction(data))
reset()
 }
 const registerHanlde=()=>{

 }
  return {
    register,
    handleSubmit,
    watch,
    reset,loginHandle,registerHanlde,errors,

  }

}

export default authHooks

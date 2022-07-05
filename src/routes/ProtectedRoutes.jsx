import React, {useContext} from 'react'
import { Context } from '../context/Context'
import {Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {

  const {logged} = useContext(Context)

  if(!logged){
    return (
      <Navigate to="/login" ></Navigate>
    )
  }

  return <>{children}</>

}

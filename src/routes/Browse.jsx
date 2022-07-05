import React, { useEffect, useContext } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { Context } from '../context/Context';
import { auth } from '../firebase/firebase';
import { Nav } from '../components/Nav';
import { usersNetflix } from '../services/users';
import {Link} from 'react-router-dom'
import {Helmet} from "react-helmet";

export const Browse = () => {

  const {setUser} = useContext(Context)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
    });
  })

  return (
    <div className=' h-screen'>
      <Nav></Nav>
      <div className=' w-full h-3/4 flex items-center justify-center'>
        <div className=' w-3/4 h-3/4 flex flex-col'>
          <div className='w-full h-20 flex items-center justify-center'>
            <h1 className='text-5xl '>¿Quién está viendo ahora?</h1>
          </div>
          <div className='w-full h-56 px-5 grid grid-cols-5 gap-3'>
            {
              usersNetflix.map(user => (
                <div key={user.name} className='w-full h-full flex flex-col items-center justify-center'>
                  <Link className='w-3/4 h-3/4' to='/browsehome'>
                    <div className='w-full h-full flex items-center justify-center'>
                      <img className='rounded-md hover:cursor-pointer' src={user.image} alt={user.name} />
                    </div>
                  </Link>
                  <div className='w-full text-center mt-2'>
                    <h1 className='text-lg uppercase text-zinc-500 hover:text-white cursor-pointer'>{user.name}</h1>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='w-full h-20 flex items-end justify-center'>
            <button className='border-zinc-500 border-2 w-1/5 h-12 text-zinc-500 text-lg hover:border-white hover:text-white'>Administrar perfiles</button>
          </div>
        </div>
      </div>
      
      <Helmet>
        <title>Browse</title>
      </Helmet>
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='w-full h-3/4 py-10 flex justify-center items-end'>
        <div className=' w-2/4 h-3/4 text-center text-white flex flex-col justify-center items-center'>
            <h1 className='font-bold text-6xl mb-6'>Peliculas y series ilimitadas y mucho mas</h1>
            <p className='text-2xl mb-6'>Disfruta donde quieras. Cancela cuando quieras</p>
            <p className='text-lg mb-6'>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            <div className='w-3/4 h-12 flex items-center justify-center'>
                <input placeholder='Email' type="text" className='w-3/4 h-full p-2 text-black focus:border-none' />
                <Link to='/login' className='h-full'>
                  <button className='h-full bg-red-600 w-36 text-lg hover:bg-red-500'>Comenzar ></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

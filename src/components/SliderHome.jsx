import React from 'react'
import sliderOne from '../assets/home-slide-1.jpg'
import sliderTwo from '../assets/home-slide-2 (1).png'
import sliderThree from '../assets/home-slide-3.png'
import { Footer } from './Footer'
import { FooterHome } from './FooterHome'

export const SliderHome = () => {
  return (
    <>
        <div className=' h-96 mt-20 grid grid-cols-2 border-t-8 border-zinc-800'>
            <div className='flex justify-center items-center'>
                <img className='w-2/4 h-3/4' src={sliderOne} alt="" />
            </div>
            <div className=' items-start justify-center flex flex-col w-3/4 px-5 text-white'>
                <h1 className='text-5xl mb-5 font-semibold'>Descarga tus series para verlas offline.</h1>
                <p className='text-2xl'>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
            </div>
        </div>
        
        <div className='h-96 mt-20 grid grid-cols-2  border-t-8 border-zinc-800'>
            <div className=' items-center justify-center flex flex-col w-4/4 text-white'>
                <div className='w-3/4 flex justify-start flex-col ml-16'>
                    <h1 className='text-5xl mb-5 font-semibold'>Disfruta en tu TV.</h1>
                    <p className='text-2xl'>Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-2/4 h-3/4' src={sliderTwo} alt="" />
            </div>
        </div>

        <div className=' h-96 mt-20 grid grid-cols-2 border-t-8 border-zinc-800'>
            <div className='flex justify-center items-center'>
                <img className='w-2/4 h-3/4' src={sliderThree} alt="" />
            </div>
            <div className='items-start justify-center flex flex-col w-3/4 px-5 text-white'>
                <h1 className='text-5xl mb-5 font-semibold'>Crea perfiles para niños.</h1>
                <p className='text-2xl'>Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.</p>
            </div>
        </div>

        <FooterHome></FooterHome>
        <Footer></Footer>
    </>
  )
}

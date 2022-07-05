import React from 'react'
import { IMAGE_URL } from '../services/getMovies';


export const BrowseBody = ({moviesTrending}) => {

  return (
    <div className='w-full h-auto absolute bg-black py-5 px-10'>
        <div className='w-full h-full  flex flex-col'>
            <h1 className='text-2xl'>Populares en Netflix</h1>
            <div className='w-full h-full py-2 grid grid-cols-6 gap-2'>
                {
                  moviesTrending?.map(movie => (
                    <div key={movie.id} className='hover:scale-110 ease-out duration-300  hover:cursor-pointer rounded overflow-hidden bg-green-400 h-32'>
                      <img src={IMAGE_URL + movie.backdrop_path} className='w-full h-full' alt="" />
                    </div>
                  ))
                }
            </div>
        </div>
        <div className='w-full h-full  flex flex-col'>
            <h1 className='text-2xl'>Comedias</h1>
            <div className='w-full h-full py-2 grid grid-cols-6 gap-2'>
                {
                  moviesTrending?.map(movie => (
                    <div key={movie.id} className='hover:scale-110 ease-out duration-300  hover:cursor-pointer rounded overflow-hidden bg-green-400 h-32'>
                      <img src={IMAGE_URL + movie.backdrop_path} className='w-full h-full' alt="" />
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

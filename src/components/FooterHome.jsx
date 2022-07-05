import React from 'react'
import {AiOutlineFolderAdd} from 'react-icons/ai'

export const FooterHome = () => {
  return (
    <div className='h-full mt-20 border-t-8 border-zinc-800 flex flex-col items-center'>
        <h1 className='mt-24 mb-16 text-5xl font-bold'>Preguntas frecuentes</h1>
        <div className='w-2/4 h-3/5  grid grid-rows-5 gap-2'>
            <div className='bg-zinc-800 flex justify-between items-center px-5 text-white'>
                <p className='text-2xl'>¿Qué es Netflix?</p>
                <AiOutlineFolderAdd size={'30px'}></AiOutlineFolderAdd>
            </div>
            <div className='bg-zinc-800 flex justify-between items-center px-5'>
                <p className='text-2xl'>¿Cuanto cuesta Netflix?</p>
                <AiOutlineFolderAdd size={'30px'}></AiOutlineFolderAdd>
            </div>
            <div className='bg-zinc-800 flex justify-between items-center px-5'>
                <p className='text-2xl'>¿Donde puedo ver Netflix?</p>
                <AiOutlineFolderAdd size={'30px'}></AiOutlineFolderAdd>
            </div>
            <div className='bg-zinc-800 flex justify-between items-center px-5'>
                <p className='text-2xl'>¿Que puedo ver en Netflix?</p>
                <AiOutlineFolderAdd size={'30px'}></AiOutlineFolderAdd>
            </div>
            <div className='bg-zinc-800 flex justify-between items-center px-5'>
                <p className='text-2xl'>¿Es bueno Netflix para los niños?</p>
                <AiOutlineFolderAdd size={'30px'}></AiOutlineFolderAdd>
            </div>
        </div>
    </div>
  )
}

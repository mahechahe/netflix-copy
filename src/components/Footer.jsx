import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full h-2/5 flex flex-col justify-center px-48 items-start border-t-8 border-zinc-800'>
      <h2 className='text-zinc-500 text-lg'>¿Preguntas? Llama al 01 800 917 1564</h2>
      <div className='w-full h-3/5 grid grid-cols-4 gap-4'>
        <div className='flex flex-col items-start justify-between pt-5 text-zinc-500'>
          <p>Preguntas frecuentes</p>
          <p>Relaciones con inversionistas</p>
          <p>Formas de ver</p>
          <p>Información corporativa</p>
        </div>
        <div className='flex flex-col items-start justify-between pt-5 text-zinc-500'>
          <p>Centro de ayuda</p>
          <p>Empleo</p>
          <p>Términos de uso</p>
          <p>Contáctanos</p>
        </div>
        <div className='flex flex-col items-start justify-between pt-5 text-zinc-500'>
          <p>Cuenta</p>
          <p>Canjear tarjetas de regalo</p>
          <p>Privacidad</p>
          <p>Prueba de velocidad</p>
        </div>
        <div className='flex flex-col items-start justify-between pt-5 text-zinc-500'>
          <p>Prensa</p>
          <p>Comprar tarjetas de regalo</p>
          <p>Preferencias de cookies</p>
          <p>Avisos legales</p>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import '../styles/BrowseHome.css'
import { NavBrowse } from '../components/NavBrowse'
import logoImage from '../assets/stranger.png'
import { getTrendings } from '../services/getMovies'
import {Helmet} from "react-helmet";
import { BrowseBody } from '../components/BrowseBody'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'


export const BrowseHome = () => {

  const [moviesTrending, setMoviesTrending] = useState([])

  useEffect(() => {

    getTrendings()  
    .then(data => {
      setMoviesTrending(data.results)
    }).catch(error => {
      console.error(error.message);
    })

  }, [])

  return (
    <div className='div-container'>
        <NavBrowse></NavBrowse>
        <div className='div-logo'>
          <div className='div-logo-container'>
            <div className='container-iamge-logo'>
              <img src={logoImage} alt="stranger" />
            </div>
            <div className='div-description'>
              <p>A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña. Ve todo lo que quieras.</p>
            </div>
            <div className='div-container-buttons'>
              <div className='div-container-reload'>
                <button><FaPlay></FaPlay> Reproducir</button>
              </div>
              <div className='div-button-info'>
                <button><AiOutlineInfoCircle size={'27px'}></AiOutlineInfoCircle> Mas informacion</button>
              </div>
            </div>
          </div>
        </div>
        <BrowseBody moviesTrending={moviesTrending}></BrowseBody>
        <Helmet>
          <title>Browse Home | Netflix Colombia</title>
        </Helmet>
    </div>
  )
}

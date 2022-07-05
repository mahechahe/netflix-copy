import React, { useState, useContext } from "react";
import netflixLogo from "../assets/netflix.png";
import { Link, useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { MdOutlineNotifications } from "react-icons/md";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { usersNetflix } from "../services/users";
import { Context } from "../context/Context";
import {toast} from 'react-toastify'

export const NavBrowse = () => {
    const navigate = useNavigate()
  const { logOut } = useContext(Context);
  const [modal, setOpenModal] = useState(false);
  const [searchMovie, setSearchMovie] = useState(false)
  const [search, setSearch] = useState('')

  const handleClickUser = () => navigate('/browse')
  const handleLogout = () => {
    toast.success('Sesion cerrada correctamente')
    logOut()
  }

  const handleTrueSearch = () => {
    setSearchMovie(!searchMovie)
  }

  const handleChangeInput = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  
  const handleSearchMovie = () => {
    if(search === ''){
      return toast.error('Debes de ingresar algun nombre de una pelicula')
    }
    navigate(`/moviesearch/${search}`)
  }

  return (
    <div className="w-full h-24 flex justify-between items-center px-12 relative">
      <div className="w-1/2 h-full flex">
        <div className="w-44 h-full">
          <Link to="/browse">
            <div className="w-full h-full flex items-center">
              <img src={netflixLogo} className="w-full h-11" alt="" />
            </div>
          </Link>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <ul className="w-3/4 h-full flex items-center justify-between">
            <li className="hover:text-zinc-400 hover:cursor-pointer">Inicio</li>
            <li className="hover:text-zinc-400 hover:cursor-pointer">Series</li>
            <li className="hover:text-zinc-400 hover:cursor-pointer">
              Peliculas
            </li>
            <li className="hover:text-zinc-400 hover:cursor-pointer">
              Novedades populares
            </li>
            <li className="hover:text-zinc-400 hover:cursor-pointer">
              Mi lista
            </li>
          </ul>
        </div>
      </div>
      {
        searchMovie && (
          <div className=" w-80 h-full flex items-center justify-end ml-36">
            <input onChange={handleChangeInput} type="text" className="w-3/4 bg-black opacity-1 border-2 border-white h-9 px-3" placeholder="Titulo, personas, generos" />
          </div>
        )
      }
      <div className="w-64 h-24  grid justify-center grid-cols-2 px-6 items-center">
        <div className="flex justify-around">
          <ImSearch onClick={
            searchMovie ? handleSearchMovie
            : handleTrueSearch
          } className='hover:cursor-pointer' size={"22px"}></ImSearch>
          <MdOutlineNotifications size={"27px"}></MdOutlineNotifications>
        </div>
        <div className=" w-full h-full flex justify-center items-center">
          <div
            className="w-9 h-9 mr-2 hover:cursor-pointer"
            onClick={() => setOpenModal(!modal)}
          >
            <img
              src="https://occ-0-4440-3418.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWh1UYwksK-OG3S4NdpTKj-kOBR9QZ1QU2nAExy8mxCviIF9TONOUYNdCuN0_pOVez5uUE7KZ2V10V8cnFPVav0GKY9NtUB7r_TO.png?r=f6f"
              className="rounded w-full h-full"
              alt=""
            />
          </div>
          {modal ? (
            <HiArrowSmUp
              className="hover:cursor-pointer"
              onClick={() => setOpenModal(!modal)}
              size={"29px"}
            ></HiArrowSmUp>
          ) : (
            <HiArrowSmDown
              className="hover:cursor-pointer"
              onClick={() => setOpenModal(!modal)}
              size={"29px"}
            ></HiArrowSmDown>
          )}
        </div>
      </div>
      {modal && (
        <div className="absolute flex flex-col right-20 w-44 h-80 top-24 bg-black border-2 border-zinc-600">
          <div className="w-full h-3/4 flex flex-col items-start py-3 px-2 justify-between">
            {usersNetflix?.map((user) => (
              <div key={user.name} className="w-full flex justify-around">
                <div className="w-9 h-9 hover:cursor-pointer" onClick={handleClickUser}>
                  <img src={user.image} className="w-full h-full" alt="" />
                </div>
                <div className=" w-2/4 flex items-center">
                  <p>{user.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" h-1/4 w-full flex items-center justify-center border-t-2 border-zinc-600">
            <p className="text-sm text-white hover:text-zinc-300 hover:cursor-pointer" onClick={handleLogout}>
              Cerrar sesion en Netflix
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

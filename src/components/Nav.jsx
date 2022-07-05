import React from "react";
import netflixLogo from "../assets/netflix.png";
import { AiOutlineArrowDown, AiOutlineEnvironment } from "react-icons/ai";
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

export const Nav = () => {

  let location = useLocation();
  const {pathname} = location

  return (
    <div className="w-full h-24 flex justify-between items-center px-12">

      <Link to='/'>
        <div className="w-52 h-full flex items-center">
          <img src={netflixLogo} className="w-full h-11" alt="" />
        </div>
      </Link>


      {
        pathname === '/login' || pathname === '/browse' ? <div></div> : (
          <div className="w-72 h-full  flex justify-between items-center">
            <div className="w-32 h-10 bg-black border-white border-2 text-white flex justify-between items-center px-2">
              <AiOutlineEnvironment size={"22px"}></AiOutlineEnvironment>
              <button>Ingles</button>
              <AiOutlineArrowDown className="cursor-pointer" size={"22px"}></AiOutlineArrowDown>
            </div>

            <Link to='/login'>
              <button className="w-32 h-10 bg-red-600 hover:bg-red-500 text-white rounded">
                Iniciar sesion
              </button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

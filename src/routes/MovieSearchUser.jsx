import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBrowse } from "../components/NavBrowse";
import { searchMovie } from "../services/searchMovie";
import { IMAGE_URL } from "../services/getMovies";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";


export const MovieSearchUser = () => {
  const { movie } = useParams();
  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(false)

  const imageDefault = IMAGE_URL + '/e9XRikkyth0GtG8RkU3XNm0oMsA.jpg'

  useEffect(() => {

    setLoading(true)
    
    searchMovie(movie).then((data) => {
        setDataMovie(data)
        setLoading(false)
    });


  }, [movie]);

  

  if(loading){
    return (
        <div className="w-full">
            <NavBrowse></NavBrowse>
            <div className="w-full h-44  mt-32 flex flex-col justify-around items-center">
                <h1 className="text-white text-2xl">Lo siento, no hemos podido encontrar tu pelicula jeje.</h1>
                <Link to='/browsehome'>
                    <button className="h-12 rounded text-base hover:bg-red-500 w-48 bg-red-600">Volver al browse</button>
                </Link>
            </div>
        </div>
    )
  }


  return (
    <div className="h-screen">
      <NavBrowse></NavBrowse>
      <div className="w-full h-full  flex justify-start items-center  flex-col px-8">
        <h1 className="text-3xl mt-14 mb-6">
          {dataMovie.results ? dataMovie.results[0]?.original_title : ""}
        </h1>
        <div className="grid grid-cols-6 w-full gap-8">
          {dataMovie.results?.map((movie) => (
            <div
              key={movie.id}
              className="hover:scale-110 ease-out duration-300 relative hover:cursor-pointer rounded overflow-hidden h-32"
            >
              <img
                src={movie.backdrop_path ? IMAGE_URL + movie.backdrop_path : imageDefault}
                className="w-full h-full opacity-1"
                alt=""
              />
              <p className="text-white absolute bottom-2 left-2">
                {movie.original_title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Helmet>
        <title>{movie} | Netflix Colombia</title>
      </Helmet>
    </div>
  );
};

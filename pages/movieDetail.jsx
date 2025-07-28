import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
export const MovieDetail = () => {
   const moviesData = useLoaderData();
   console.log(moviesData);

   const { Actors, Poster, Title, Genre, imdbRating, Runtime, Type, Year, Plot, BoxOffice, imdbID } = moviesData;
   return (
      <li className="m-8 place-items-center  place-self-center w-4/6 ml-8 list-none flex  rounded-2xl shadow-xl shadow-stone-800/70 bg-gradient-to-r to-zinc-950 from-zinc-950 text-neutral-300 ">
         <div className="m-5 w-96 h-auto">
            <div className="w-96 h-auto  rounded-xl">
               <img src={Poster} alt={Title} className="w-96 h-[30rem]  rounded-xl" />
            </div>
         </div>
         <div className="ml-8 m-5 text-lg p-2">
            <h1 className="text-3xl text-white font-bold p-2">{Title}</h1>

            <div className="p-1 flex gap-3 mt-3 mb-2">
               <h1 className="text-yellow-500 w-20  ">{Type}</h1>
               <h1 className="text-yellow-500 w-28 ">Year : {Year}</h1>
            </div>
            <p className="text-neutral-400 text-base">Genre : {Genre}</p>
            <p className="text-neutral-400 text-base">Actors : {Actors}</p>
            <p className="text-neutral-400 text-base">{Plot}</p>

            <div className=" flex  place-self-center mt-12 h-10 w-80 justify-center gap-10">
               <p className=""> Rating : {imdbRating}</p>
               <p>{Runtime}</p>
            </div>
            <div className=" mx-auto bg-red-700 relative overflow-hidden z-10  rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute  after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 m-7 text-center">
               <NavLink to="/movie">
                  <button className=" px-6 py-2 text-white rounded mr-4"> Go Back</button>
               </NavLink>
            </div>
         </div>
      </li>
   )
}
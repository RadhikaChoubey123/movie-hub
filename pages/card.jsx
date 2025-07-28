import { NavLink } from "react-router-dom";
export const Card = ({ curMovie }) => {
    const { Poster, imdbID } = curMovie;
    return (
        <>
            <li className="m-7" >
                <div className="max-h-full rounded-tl-2xl rounded-tr-2xl ">
                    <div className="h-auto">
                        <img src={Poster} alt={imdbID} className="h-96 w-96 rounded-tl-2xl rounded-tr-2xl " />
                    </div>

                    <div className="bg-zinc-900 text-white p-2 text-center rounded-bl-2xl rounded-br-2xl ">
                        <NavLink to={`/movie/${imdbID}`}>
                            <button className="text-lg">Watch Now</button>
                        </NavLink>
                    </div>

                </div>
            </li>
        </>
    )
}
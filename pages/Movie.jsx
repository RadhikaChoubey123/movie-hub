import { useLoaderData } from "react-router-dom"
import { Card } from "./card";
export const Movie = () => {
    const MovieData = useLoaderData();
    console.log(MovieData);
    return (
        <>
            <ul className="grid grid-cols-4 gap-3  place-items-center m-10 p-4">
                {MovieData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie} />
                })}
            </ul>
        </>
    )
}
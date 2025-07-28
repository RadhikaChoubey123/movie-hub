import { NavLink } from "react-router-dom";
const Home = () => {
    const featuredMovie = {
        title: "Unlimited movies, TV shows and more ",
        description:
            "Experience the thrill of dreams within dreams in this mind-bending journey directed by Christopher Nolan.",
        image:
            "https://techovedas.com/wp-content/uploads/2024/04/netflix-octobre-contenus-2022-1536x864.jpg"
    };

    return (
        <div
            className="relative h-[80vh] bg-cover bg-center text-white " style={{ backgroundImage: `url(${featuredMovie.image})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-6 md:px-20">
                <div className="w-2/5 ml-96">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {featuredMovie.title}
                    </h1>
                    <p className="text-gray-300 max-w-xl mb-6">
                        {featuredMovie.description}
                    </p>
                    <div>
                        <NavLink to="/movie">
                            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded mr-4"> Explore Now</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home


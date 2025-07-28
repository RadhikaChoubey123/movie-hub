const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto p-7 rounded-2xl shadow-xl shadow-stone-800/70 bg-gradient-to-r to-zinc-950 from-zinc-950">
        <h1 className="text-4xl font-bold text-white mb-6 border-b-[0.011rem] border-neutral-700 pb-2">
          About MovieVerse
        </h1>
        <p className="text-lg mb-4 leading-relaxed text-gray-300">
          <span className="font-semibold text-white">MovieVerse</span> is a sleek and responsive movie discovery website that allows users to explore the latest, trending, and top-rated films from around the world. Built to enhance your movie experience, it brings real-time data and a smooth user interface all in one place.
        </p>
        <p className="text-lg mb-4 leading-relaxed text-gray-300">
          Whether you're a movie enthusiast or just looking for something to watch, MovieVerse offers detailed movie information including ratings, overviews, genres, release dates, and more.
        </p>
        <p className="text-lg mb-4 leading-relaxed text-gray-300">
          This website is built using modern web technologies like <span className="text-blue-400">React.js</span> and <span className="text-blue-400">Tailwind CSS</span> for a fast and responsive user experience across devices.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Upcoming Features:</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>User login and authentication</li>
          <li>Watchlist and favorite movies</li>
          <li>User reviews and ratings</li>
          <li>Dark/light mode toggle</li>
        </ul>
      </div>
    </div>
  );
};

export default About
import MovieCard from "../components/MovieCard";
import {useState} from "react";
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "John Wick", release_date: "2019"},
        {id: 2, title: "Shrek", release_date: "2001"},
        {id: 3, title: "Star Wars", release_date: "1976"},
    ];
    const handleSearch = () => {
        e.prevent
        alert(searchQuery);
        
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>

        </div>
    );
}
export default Home
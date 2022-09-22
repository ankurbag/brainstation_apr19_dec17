import Movie from "./Movie";
function MovieList({movies}) {
    
    return (
        <main>
            <h1>Movie List:</h1>
            {movies.map((movie)=><Movie id={movie.id} name={movie.title}/>)}
        </main>
    );
}

export default MovieList;
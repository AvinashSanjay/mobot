import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css' 

const MovieCard = ({ movies }) => {
    
    const vidsrc = (id) => {
        console.log(id.target.id);
    };

    return(
        <>
        { movies.map((movie) => {
            let poster_url = movie.poster_path ?
             import.meta.env.VITE_POSTER_500+movie.poster_path :
              import.meta.env.VITE_MOVIE_POSTER;
            return(
                
                    <div 
                        className={"movie-header image-container d-flex justify-content-start m-3 "+movie.id }
                        key={movie.id}  
                        id={movie.id} 
                        title={movie.title}
                        onClick={vidsrc}
                        style={{ backgroundImage: `url(${poster_url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: '100% 100%' }}>

                        <div className="movie-title" id={movie.id}> <a href={movie.id}> { movie.title? movie.title :movie.name } </a>
                        </div>
                    
                    </div>
            );
        })
        }
        </>
    );
}
export default MovieCard;

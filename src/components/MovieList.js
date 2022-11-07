import React from "react";


const MovieList = (props) => {
    const StarsComponent = props.StarsComponent;
    const ReviewComponent = props.ReviewComponent;
    return (
        <>

            {props.movies.filter(movie=>movie.Poster).map((movie,index) => ( 
          
            <div className="card d-flex justify-content-start m-3 justify-content-center">
                
                <img src={movie.Poster} ></img>
                <div className="card-body">
                    <h3><p className="card-text">{movie.Title}</p></h3>
                    {movie.Year}
                    <h6>{movie.Synopsis}</h6> 
                    <StarsComponent />
                    <ReviewComponent /> 
                </div> 
                </div>    
            ))}
        </>
    );
};

export default MovieList;
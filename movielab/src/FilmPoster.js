import React from 'react'

export default function FilmPoster(props) {
    var path = "https://image.tmdb.org/t/p/w780" + props.path;

    return (
        <div>
            <img src={path} alt="film posters" />
        </div>
    )
}

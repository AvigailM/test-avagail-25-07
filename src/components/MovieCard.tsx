import React from "react";
import { Show } from "../utils/types";

type MovieCardProps = {
    movieData: Show
};

const MovieCard = ({ movieData }: MovieCardProps) => {

    return (
        <li key={movieData.id}>
            <span>{movieData.name}</span>
            <img src={movieData.image.medium} alt="image" />
        </li>

    );
};

export default MovieCard;

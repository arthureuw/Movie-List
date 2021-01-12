import React from 'react';
import {Image} from "react-native";
import {Left} from "native-base";

const MovieDetails = () => {
    const poster = 'https://www.themoviedb.org/t/p/w440_and_h660_face/gBYgQQe5mmh8fIQTWRht8gzJV8G.jpg';
    return(
        <Image
            style={}
            source={{uri: poster}}/>
    )
};

export default MovieDetails;

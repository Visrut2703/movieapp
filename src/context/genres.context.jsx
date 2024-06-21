import { createContext, useState } from "react";

export const GenreContext = createContext();

export const GenreContextProvider = ({ children }) => {
    const [genreId , setGenreId] = useState(null);

    return <GenreContext.Provider value={{genreId , setGenreId}}>{children}</GenreContext.Provider>;
};



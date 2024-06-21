import { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchContextProvider = ({children})=>{
    const [searchTerm, setSearchTerm] = useState("");
    return <SearchContext.Provider value={{searchTerm , setSearchTerm}}>{children}</SearchContext.Provider>
}


// import { createContext, useState } from "react";

// export const GenreContext = createContext();

// export const GenreContextProvider = ({ children }) => {
//     const [genreId , setGenreId] = useState(null);

//     return <GenreContext.Provider value={{genreId , setGenreId}}>{children}</GenreContext.Provider>;
// };



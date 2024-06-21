import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GenreContextProvider } from "./context/genres.context.jsx";
import { SearchContextProvider } from "./context/search.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GenreContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </GenreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

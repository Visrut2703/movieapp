import { Input } from "../ui/input";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Genres from "./Genres";

import { useContext } from "react";
import { SearchContext } from "@/context/search.context";
import SideBar from "./SideBar";

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    navigate(`/search/${e.target.value}`);
    if (e.target.value.length === 0) {
      navigate(`/movies`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    if (searchTerm.length === 0) {
      navigate(`/movies`);
    }
  };
  return (
    <div className="flex justify-between lg:px-8 md:px-5 sm:px-5 ">
      <img
        src={logo}
        className="lg:h-20 md:h-20   sm:h-18  h-12  hover:opacity-80 cursor-pointer"
        onClick={()=>navigate('/')}
      />
      <div className="flex items-center gap-3">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search"
            className="border-grey-500 rounded-2xl md:w-fit sm:w-[30vw]"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <div className="sm:hidden md:hidden lg:hidden block mr-3">
          <SideBar/>
        </div>
        <div className="hidden sm:block md:block lg:block">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={"/movies"}>
              <div>Movies</div>
            </Link>
            <Link to={"/tvshows"}>
              <div>Tv Shows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

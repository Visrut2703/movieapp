import axios from "axios";

export default axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"5bb4b3b3c4595fcddbb139f2b5fb750d"
    }
})
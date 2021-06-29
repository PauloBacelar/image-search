import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID spfVonJs_1pt1NYnYgy39gs5d1c5emZpwefDwfkGClM",
  },
});

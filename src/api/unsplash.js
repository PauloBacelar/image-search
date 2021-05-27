import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID UqWCfpbYqWHntEJ6NPrHdlTLeslIWUmFryJK_cUaB3s",
  },
});

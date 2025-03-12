import axios from "axios";

const API_KEY = "HrlTSFH7Qu924M-r-T_v2q005msp5YG_HUCnt_RjYeI";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";

const getImage = async (query, page, perPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      orientation: "landscape",
      per_page: perPage,
      page: page,
    },
  });
  return response.data;
};

export default getImage;

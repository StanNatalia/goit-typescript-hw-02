import axios from "axios";

const API_KEY = "HrlTSFH7Qu924M-r-T_v2q005msp5YG_HUCnt_RjYeI";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

interface ApiResponse {
  results: Image[];
  total_pages: number;
}

interface ApiRequest {
  query: string;
  page: number;
  perPage: number;
}

const getImage = async ({
  query,
  page,
  perPage,
}: ApiRequest): Promise<ApiResponse> => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      orientation: "landscape",
      per_page: perPage,
      page,
    },
  });
  return response.data;
};

export default getImage;

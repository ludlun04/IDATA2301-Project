import Constants from "../Constants";
import axios from "axios";

export const ImageAPI = {
  getImageData: async (carId, imageType, imageWidth) => {
    try {
      const url = `${Constants.API_URL}/image/${carId}/${imageType}/${imageWidth}`;
      return await axios.get(url);
    } catch (error) {
      console.error("Error fetching image data:", error);
      throw error;
    }
  }
}
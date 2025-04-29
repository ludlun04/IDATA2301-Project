import Constants from "../Constants";
import axios from "axios";

export const ImageAPI = {
    getImageData: async (carId, imageType, imageWidth) => {
        const url = `${Constants.API_URL}/image/${carId}/${imageType}/${imageWidth}`;
        return await axios.get(url);
    }
}
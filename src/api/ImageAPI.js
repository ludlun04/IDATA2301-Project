import Constants from "../Constants";
import axios from "axios";

/**
 * API module for handling image data.
 * It provides methods to fetch image data for cars.
 */
export const ImageAPI = {

  /**
   * Fetches image data for a specific car.
   *
   * @param {number} carId - The ID of the car.
   * @param {string} imageType - The type of image (e.g, png, webp and jpg).
   * @param {number} imageWidth - The width of the image.
   * @returns {Promise<Blob>} A promise that resolves to the image data as a Blob.
   * @throws {Error} If there is an error fetching the image data.
   */
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
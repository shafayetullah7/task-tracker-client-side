import resizeImage, { dataURItoBlob } from "./resizeImage";

export const uploadImage = async (image: File) => {
  if (image) {
    try {
      // Iterate through the array of files and handle each image upload
      const resizedImage = await resizeImage(image);
      const formData = new FormData();
      if (!resizedImage) {
        return null;
      }
      formData.append("image", dataURItoBlob(resizedImage as string), image.name);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        return null;
      }
  
      const responseData = await response.json();
      return responseData.data;

    } catch (error) {
      console.error("Error uploading images to ImgBB:", error);
    }
  }
};

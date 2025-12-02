import { Image } from "../types/profile.type";

interface CreatePostResponse {
  success: boolean;
  message: string;
}

export const createPostApi = async (
  imagesPost: Image[]
): Promise<CreatePostResponse> => {
  return new Promise((resolve, reject) => {
    if (imagesPost.length === 0) {
      return reject({
        success: false,
        message: "Images are required",
      });
    }
    setTimeout(() => {
      resolve({
        success: true,
        message: "Post created successfully",
      });
    }, 1500);
  });
};

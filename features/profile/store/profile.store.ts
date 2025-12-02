import { create } from "zustand";
import { PostImage } from "../types/profile.type";

interface ProfileStateInterface {
  imagesPost: PostImage[];
  setImagesPost: (images: PostImage[]) => void;
  addImagePost: (image: File[]) => void;
  removeImagePost: (image: PostImage) => void;
}

export const ProfileStore = create<ProfileStateInterface>((set) => ({
  imagesPost: [],

  setImagesPost: (images: PostImage[]) => {
    set({ imagesPost: images });
  },
  addImagePost: (images: File[]) => {
    set((state) => ({
      imagesPost: [
        ...state.imagesPost,
        ...images.map((image) => ({
          id: Date.now().toString(),
          file: image,
          previewUrl: URL.createObjectURL(image),
        })),
      ],
    }));
  },
  removeImagePost: (image: PostImage) => {
    set((state) => ({
      imagesPost: state.imagesPost.filter((img) => img.id !== image.id),
    }));
  },
}));

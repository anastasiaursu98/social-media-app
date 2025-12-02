import { create } from "zustand";
import { AllImagesPost, Image } from "../types/profile.type";
import { persist } from "zustand/middleware";
interface ProfileStateInterface {
  allImagesPost: AllImagesPost[];
  imagesPost: Image[];
  description: string;

  setAllImagesPost: (images: AllImagesPost[]) => void;
  setImagesPost: (images: Image[]) => void;
  setDescription: (description: string) => void;
  addImagePost: (image: File[]) => void;
  addAllImagesPost: (description?: string) => void;
  removeImagePost: (image: Image) => void;
}

export const ProfileStore = create<ProfileStateInterface>()(
  persist(
    (set) => ({
      allImagesPost: [],
      imagesPost: [],
      description: "",

      setAllImagesPost: (images: AllImagesPost[]) => {
        set({ allImagesPost: images });
      },
      setImagesPost: (images: Image[]) => {
        set({ imagesPost: images });
      },
      setDescription: (description: string) => {
        set({ description });
      },
      addImagePost: (images: File[]) => {
        set((state: ProfileStateInterface) => {
          const newImages: Image[] = images.map((image, index) => ({
            id: `${Date.now()}-${index}`,
            file: image,
            previewUrl: URL.createObjectURL(image),
            width: 500,
            height: 500,
          }));
          return {
            imagesPost: [...state.imagesPost, ...newImages],
          };
        });
      },
      addAllImagesPost: (description: string = "") => {
        set((state: ProfileStateInterface) => {
          // Create a new AllImagesPost from current imagesPost with description
          const finalDescription = description || state.description;
          const newPost: AllImagesPost = {
            id: Date.now().toString(),
            images: state.imagesPost,
            description: finalDescription,
          };

          return {
            allImagesPost: [...state.allImagesPost, newPost],
            imagesPost: [],
            description: "",
          };
        });
      },
      removeImagePost: (image: Image) => {
        set((state: ProfileStateInterface) => ({
          imagesPost: state.imagesPost.filter(
            (img: Image) => img.id !== image.id
          ),
        }));
      },
    }),
    {
      name: "profile-store",
      partialize: (state: ProfileStateInterface) => ({
        allImagesPost: state.allImagesPost,
      }),
    }
  )
);

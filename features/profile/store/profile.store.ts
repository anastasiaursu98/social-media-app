import { create } from "zustand";
import { AllImagesPost, Image } from "../types/profile.type";
import { persist } from "zustand/middleware";

// Helper function to convert File to base64 data URL
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

interface ProfileStateInterface {
  allImagesPost: AllImagesPost[];
  imagesPost: Image[];
  description: string;

  setAllImagesPost: (images: AllImagesPost[]) => void;
  setImagesPost: (images: Image[]) => void;
  setDescription: (description: string) => void;
  addImagePost: (image: File[]) => Promise<void>;
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
      addImagePost: async (images: File[]) => {
        const imagePromises = images.map(async (image, index) => {
          const base64 = await fileToBase64(image);
          return {
            id: `${Date.now()}-${index}-${crypto.randomUUID()}`,
            previewUrl: base64,
            width: 500,
            height: 500,
          } as Image;
        });

        const newImages = await Promise.all(imagePromises);

        set((state: ProfileStateInterface) => ({
          imagesPost: [...state.imagesPost, ...newImages],
        }));
      },
      addAllImagesPost: (description: string = "") => {
        set((state: ProfileStateInterface) => {
          // Create a new AllImagesPost from current imagesPost with description
          const finalDescription = description || state.description;
          const newPost: AllImagesPost = {
            id: `${Date.now()}-${crypto.randomUUID()}`,
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
        imagesPost: state.imagesPost,
        description: state.description,
      }),
    }
  )
);

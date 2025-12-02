export interface Image {
  id: string;
  file?: File; // Optional because we don't store File objects in localStorage
  previewUrl: string; // Will be base64 data URL for persistence
  width: number;
  height: number;
}
export interface PostImage {
  description: string;
  images: Image[] | Image;
}

export interface AllImagesPost {
  id: string;
  images: Image[];
  description: string;
}

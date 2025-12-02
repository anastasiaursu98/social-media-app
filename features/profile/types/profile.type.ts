export interface Image {
  id: string;
  file: File;
  previewUrl: string;
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

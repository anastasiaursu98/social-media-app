import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ImageUploadButton } from "./ImageUploadButton";

interface CreatePostProps {
  onClose: () => void;
  isOpen: boolean;
}
export const CreatePost = ({ onClose, isOpen }: CreatePostProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-4xl h-[70vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl text-start font-bold text-gray-900 ">
            Create new Post
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto flex justify-center items-center">
          <ImageUploadButton />
        </div>
      </DialogContent>
    </Dialog>
  );
};

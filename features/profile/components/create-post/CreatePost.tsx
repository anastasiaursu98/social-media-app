import { ProfileStore } from "../../store/profile.store";
import { useModalStore } from "@/store/modal.store";
import { useState } from "react";
import { Modal } from "@/components/shared/modals/Modal";
import { CreatePostHeader } from "./CreatePostHeader";
import { CreatPostContent } from "./CreatPostContent";
import { createPostApi } from "../../service/profileApi";
import { toast } from "sonner";

interface CreatePostProps {
  onClose: () => void;
  isOpen: boolean;
}

export const CreatePost = ({ onClose, isOpen }: CreatePostProps) => {
  //step: 1 - image upload, 2 - add description, 3 - share post
  const [step, setStep] = useState(1);

  const imagesPost = ProfileStore((state) => state.imagesPost);
  const setImagesPost = ProfileStore((state) => state.setImagesPost);
  const addAllImagesPost = ProfileStore((state) => state.addAllImagesPost);
  const description = ProfileStore((state) => state.description);

  // Use modal store for loading and success states
  const { showLoading, hideLoading, showSuccess } = useModalStore();

  /**
   * Handle submit post
   */
  const handleSubmit = async () => {
    if (step === 2) {
      // Save post to allImagesPost with description
      addAllImagesPost(description);

      onClose();
      setImagesPost([]);
      setStep(1);

      showLoading();

      try {
        const response = await createPostApi(imagesPost);
        if (response.success) {
          hideLoading();
          showSuccess();
        }
      } catch (error) {
        hideLoading();
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        toast.error(errorMessage);
      }
    } else {
      setStep(step + 1);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="max-w-3xl h-[600px] w-[90vw]"
    >
      <div className="flex flex-col w-full h-full">
        {/* Header */}
        <CreatePostHeader
          step={step}
          setStep={setStep}
          onClose={onClose}
          handleSubmit={handleSubmit}
        />

        {/* Content */}
        <CreatPostContent step={step} imagesPost={imagesPost} />
      </div>
    </Modal>
  );
};

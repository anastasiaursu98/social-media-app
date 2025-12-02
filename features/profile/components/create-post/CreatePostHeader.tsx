import { ArrowLeftIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileStore } from "../../store/profile.store";

interface CreatePostHeaderProps {
  step: number;
  setStep: (step: number) => void;
  onClose: () => void;
  handleSubmit: () => void;
}
export const CreatePostHeader = ({
  step,
  setStep,
  onClose,
  handleSubmit,
}: CreatePostHeaderProps) => {
  const imagesPost = ProfileStore((state) => state.imagesPost);
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-3 border-b">
      {step === 2 && (
        <button
          onClick={() => setStep(1)}
          className="text-gray-600 hover:text-gray-900 p-0 h-auto my-0 bg-transparent border-none cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeftIcon className="w-6 h-6 hover:text-gray-900" />
        </button>
      )}
      <h2 className="text-base font-semibold text-gray-900 flex-1 text-center">
        Create new post
      </h2>
      <div className="flex items-center gap-2">
        {imagesPost.length > 0 && (
          <Button
            onClick={handleSubmit}
            variant="ghost"
            className="text-sm font-semibold text-blue-500 hover:text-blue-700 hover:bg-transparent p-0 h-auto"
          >
            {step === 1 ? "Next" : "Share"}
          </Button>
        )}

        <Button
          variant="ghost"
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 "
          aria-label="Close"
        >
          <XIcon className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

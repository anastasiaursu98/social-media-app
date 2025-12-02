"use client";

import { Modal } from "./Modal";

interface ModalStatusLoadingProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onClose?: () => void;
}

export const ModalStatusLoading = ({
  isOpen,
  title = "Please wait",
  message = "Processing your request...",
  onClose = () => {},
}: ModalStatusLoadingProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      maxWidth="500px"
      contentClassName="p-0"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>{" "}
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center py-16 px-6">
        {/* Loading Spinner with gradient */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-purple-600 p-[3px] animate-spin">
            <div className="w-full h-full rounded-full bg-white"></div>
          </div>
        </div>
        {/* Loading Message */}{" "}
        <p className="text-base text-gray-600 text-center">{message}</p>
      </div>
    </Modal>
  );
};

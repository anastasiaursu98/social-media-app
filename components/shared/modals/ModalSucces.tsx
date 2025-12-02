"use client";

import { Modal } from "./Modal";
import { Check } from "lucide-react";

interface ModalStatusSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export const ModalStatusSuccess = ({
  isOpen,
  onClose,
  title = "Post shared",
  message = "Your post has been shared.",
  autoClose = true,
  autoCloseDelay = 2000,
}: ModalStatusSuccessProps) => {
  if (autoClose && isOpen) {
    setTimeout(() => {
      onClose();
    }, autoCloseDelay);
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={true}
      maxWidth="500px"
      contentClassName="p-0"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">{title}</h2>{" "}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center py-16 px-6">
        {/* Success Icon with gradient border */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-[3px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Check
                className="w-10 h-10 text-transparent bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 bg-clip-text"
                strokeWidth={3}
              />
              <svg
                className="absolute w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="5"
                    y1="7"
                    x2="19"
                    y2="17"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        {/* Success Message */}
        <p className="text-base text-gray-900 text-center">{message}</p>
      </div>
    </Modal>
  );
};

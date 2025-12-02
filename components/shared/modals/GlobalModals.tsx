"use client";

import { useModalStore } from "@/store/modal.store";
import { ModalStatusLoading } from "@/components/shared/modals/ModalLoading";
import { ModalStatusSuccess } from "@/components/shared/modals/ModalSucces";

/**
 * GlobalModals component
 * Renders all global modals based on the modal store state
 * This component should be placed at the root level of the app
 */
export const GlobalModals = () => {
  const { 
    isLoading, 
    loadingTitle, 
    loadingMessage,
    isSuccess, 
    successTitle, 
    successMessage,
    hideSuccess 
  } = useModalStore();

  return (
    <>
      {/* Global Loading Modal */}
      <ModalStatusLoading
        isOpen={isLoading}
        title={loadingTitle}
        message={loadingMessage}
      />

      {/* Global Success Modal */}
      <ModalStatusSuccess
        isOpen={isSuccess}
        title={successTitle}
        message={successMessage}
        onClose={hideSuccess}
      />
    </>
  );
};

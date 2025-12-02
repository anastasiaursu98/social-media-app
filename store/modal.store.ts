import { create } from "zustand";

interface ModalStore {
    // Loading state
    isLoading: boolean;
    loadingTitle?: string;
    loadingMessage?: string;
    setLoading: (isLoading: boolean, title?: string, message?: string) => void;

    // Success state
    isSuccess: boolean;
    successTitle?: string;
    successMessage?: string;
    setSuccess: (isSuccess: boolean, title?: string, message?: string) => void;

    // Helper methods
    showLoading: (title?: string, message?: string) => void;
    hideLoading: () => void;
    showSuccess: (title?: string, message?: string) => void;
    hideSuccess: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    // Initial state
    isLoading: false,
    loadingTitle: undefined,
    loadingMessage: undefined,
    isSuccess: false,
    successTitle: undefined,
    successMessage: undefined,

    // Setters
    setLoading: (isLoading, title, message) =>
        set({ isLoading, loadingTitle: title, loadingMessage: message }),

    setSuccess: (isSuccess, title, message) =>
        set({ isSuccess, successTitle: title, successMessage: message }),

    // Helper methods
    showLoading: (title, message) =>
        set({ isLoading: true, loadingTitle: title, loadingMessage: message }),

    hideLoading: () =>
        set({ isLoading: false, loadingTitle: undefined, loadingMessage: undefined }),

    showSuccess: (title, message) =>
        set({ isSuccess: true, successTitle: title, successMessage: message }),

    hideSuccess: () =>
        set({ isSuccess: false, successTitle: undefined, successMessage: undefined }),
}));

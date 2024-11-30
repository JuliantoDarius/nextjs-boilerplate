import { create } from "zustand";

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const useFormLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
}));

export const useFormLoading = () => {
  const isLoading = useFormLoadingStore((state) => state.isLoading);
  const setIsLoading = useFormLoadingStore((state) => state.setIsLoading);
  return { isLoading, setIsLoading };
};

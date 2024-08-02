import { create } from 'zustand';

interface LoadingState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const userLoadingStore = create<LoadingState>()((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));

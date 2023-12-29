import { create } from 'zustand';

type Store = {
  modalLogin: boolean;
  modalSuccess: boolean;
  openModalLogin: () => void;
  toggleModalSuccess: () => void;
  closeModalLogin: () => void;
};

const useModalStore = create<Store>((set) => ({
  modalLogin: false,
  modalSuccess: false,
  openModalLogin: () => {
    set({ modalLogin: true });
  },
  closeModalLogin: () => {
    set({ modalLogin: false });
  },
  toggleModalSuccess: () =>
    set((state) => ({ modalSuccess: !state.modalSuccess })),
}));

export default useModalStore;

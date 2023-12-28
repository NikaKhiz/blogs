import { create } from 'zustand';
import { CategoryTypes } from 'src/types/caterogies';

type Store = {
  categories: CategoryTypes[];
  setCategories: (payload: CategoryTypes[]) => void;
};
const useCategoryStore = create<Store>((set) => ({
  categories: [],
  setCategories: (payload: CategoryTypes[]) =>
    set(() => ({ categories: payload })),
}));

export default useCategoryStore;

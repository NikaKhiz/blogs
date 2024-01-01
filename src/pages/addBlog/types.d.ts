import { MouseEvent } from 'react';
import { CategoryTypes } from 'src/types/caterogies';

export type SelectPropsType = {
  error: FieldError | undefined;
  dirty: boolean | undefined;
  selected: boolean;
};

export type SelectOptionsPropsType = {
  isListOpen: boolean;
  options: CategoryTypes[];
  selectOptions: (item: CategoryTypes) => void;
};

export type SelectMenuTypes = {
  children: React.ReactNode;
};
export type SelectMenuItemTypes = {
  title: string;
  textColor: string;
  backgroundColor: string;
  onClick: () => void;
};

export type SelectSelectedListTypes = {
  children: React.ReactNode;
};
export type SelectSelectedListItemTypes = {
  title: string;
  textColor: string;
  backgroundColor: string;
  option: CategoryTypes;
  removeSelectedItem: (e: MouseEvent, option: CategoryTypes) => void;
};

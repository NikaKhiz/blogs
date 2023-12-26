export type ButtonPrimaryTypes = {
  title: string;
  onClick: () => void;
};

export type ButtonSecondaryTypes = {
  children: React.ReactNode;
  onClick: () => void;
};

export type ButtonRedirectTypes = {
  title: string;
  to: string;
};

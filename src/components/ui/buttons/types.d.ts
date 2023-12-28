export type ButtonPrimaryTypes = {
  title: string;
  onClick?: () => void;
};

export type ButtonSecondaryTypes = {
  children: React.ReactNode;
  onClick: () => void;
  top?: string;
  left?: string;
  right?: string;
  background?: string;
  bghover?: string;
};

export type ButtonRedirectTypes = {
  title: string;
  to: string;
};

import { StyledModal } from '@/styles';
import { ModalTypes } from './types';
import React, { useEffect, useRef } from 'react';

const TheModal = (props: ModalTypes) => {
  const { opened, children, onClose } = props;
  const modal = useRef<HTMLDialogElement>(null);
  const onOutsideClick = (e: React.MouseEvent) => {
    const dialogDimensions = modal.current?.getBoundingClientRect();
    if (
      dialogDimensions &&
      (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom)
    ) {
      modal.current?.close();
    }
  };
  useEffect(() => {
    if (opened) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
      onClose();
    }
  }, [opened]);

  return (
    <StyledModal ref={modal} onClick={(e) => onOutsideClick(e)}>
      {children}
    </StyledModal>
  );
};

export default TheModal;

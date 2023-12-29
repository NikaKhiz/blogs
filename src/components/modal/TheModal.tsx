import { StyledModal } from '@/styles';
import { ModalTypes } from './types';
import React, { useCallback, useEffect, useRef } from 'react';
import ButtonSecondary from '@/ui/buttons/ButtonSecondary';
import { HiOutlineXMark } from 'react-icons/hi2';

const TheModal = (props: ModalTypes) => {
  const { opened, children, onClose } = props;
  const modal = useRef<HTMLDialogElement>(null);
  const openModal = () => {
    modal.current?.showModal();
  };

  const closeModal = useCallback(() => {
    modal.current?.close();
    onClose();
  }, [onClose]);

  const onOutsideClick = (e: React.MouseEvent) => {
    const dialogDimensions = modal.current?.getBoundingClientRect();
    if (
      dialogDimensions &&
      (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom)
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    if (opened) {
      openModal();
    } else {
      closeModal();
    }
  }, [opened, closeModal]);

  return (
    <StyledModal ref={modal} onClick={(e) => onOutsideClick(e)}>
      <ButtonSecondary
        top='20px'
        right='20px'
        background='transparent'
        onClick={() => closeModal()}
      >
        <HiOutlineXMark />
      </ButtonSecondary>
      {children}
    </StyledModal>
  );
};

export default TheModal;

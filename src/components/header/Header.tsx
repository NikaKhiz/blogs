import { StyledHeader } from '@/styles';
import { Logo } from '@/icons';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';
import { useState } from 'react';
import { TheModal } from '@/modal';
import { FormLogin } from '@/form/login';

const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleLoginModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };
  const redirectToAddBlog = () => {
    console.log('redirect to add blog page');
  };
  return (
    <>
      <StyledHeader isStandart>
        <Logo />
        <div>
          {isAuthorized ? (
            <ButtonPrimary title='დაამატე ბლოგი' onClick={redirectToAddBlog} />
          ) : (
            <ButtonPrimary title='შესვლა' onClick={toggleLoginModal} />
          )}
        </div>
      </StyledHeader>
      <TheModal opened={isModalOpen} onClose={toggleLoginModal}>
        <FormLogin />
      </TheModal>
    </>
  );
};

export default Header;

import { StyledHeader } from '@/styles';
import { Logo } from '@/icons';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';
import { useState } from 'react';

const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const openLoginModal = () => {
    console.log('modal is being opened');
  };
  const redirectToAddBlog = () => {
    console.log('redirect to add blog page');
  };
  return (
    <StyledHeader isStandart>
      <Logo />
      <div>
        {isAuthorized ? (
          <ButtonPrimary title='დაამატე ბლოგი' onClick={redirectToAddBlog} />
        ) : (
          <ButtonPrimary title='შესვლა' onClick={openLoginModal} />
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

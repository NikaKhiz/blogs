import { StyledHeader } from '@/styles';
import { Logo } from '@/icons';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';
import { useState } from 'react';

const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const openLoginModal = () => {
    console.log('modal is being opened');
  };

  return (
    <StyledHeader isStandart>
      <Logo />
      <div>
        <ButtonPrimary
          title={isAuthorized ? 'დაამატე ბლოგი' : 'შესვლა'}
          onClick={openLoginModal}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;

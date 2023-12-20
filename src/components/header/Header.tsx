import { StyledHeader } from '@/styles';
import { Logo } from '@/icons';

const Header = () => {
  return (
    <StyledHeader isStandart>
      <Logo />
      <div>
        <button>შესვლა</button>
        <button>ბლოგის შექმნა</button>
        <button>გამოსვლა</button>
      </div>
    </StyledHeader>
  );
};

export default Header;

import { StyledHeader } from '@/styles';
import { Logo } from '@/icons';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';
import { TheModal } from '@/modal';
import { FormLogin } from '@/form/login';
import useModalStore from 'src/store/modal';
import useAuthStore from 'src/store/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isModalOpen = useModalStore((state) => state.modalLogin);
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  const standartHeader = location.pathname !== '/add-blog';

  const openModalLogin = useModalStore((state) => state.openModalLogin);
  const closeModalLogin = useModalStore((state) => state.closeModalLogin);
  const redirectToAddBlog = () => {
    navigate('/add-blog');
  };
  return (
    <>
      <StyledHeader isStandart={standartHeader}>
        <Logo />
        <div>
          {isAuthorized ? (
            standartHeader && (
              <ButtonPrimary
                title='დაამატე ბლოგი'
                onClick={redirectToAddBlog}
              />
            )
          ) : (
            <ButtonPrimary title='შესვლა' onClick={openModalLogin} />
          )}
        </div>
      </StyledHeader>
      <TheModal opened={isModalOpen} onClose={closeModalLogin}>
        <FormLogin />
      </TheModal>
    </>
  );
};

export default Header;

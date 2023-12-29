import { InputText } from '@/ui/inputs';
import { TheForm } from '..';
import { StyledFormHeading } from '@/styles/form/login';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';
import { loginFormValidationSchema } from 'src/schemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useUserStore from 'src/store/user';
import { ChangeEvent } from 'react';
import { UserTypes } from 'src/types/user';
import { logIn } from 'src/services';
import useAuthStore from 'src/store/auth';
import useModalStore from 'src/store/modal';

const FormLogin = () => {
  const userStore = useUserStore();
  const authStore = useAuthStore();
  const closeModal = useModalStore((state) => state.closeModalLogin);

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    setError,
    setValue,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: userStore.user.email,
    },
    resolver: yupResolver(loginFormValidationSchema()),
  });

  const setEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    userStore.setUserEmail({ email: e.target.value });
  };

  const onSubmit = (values: UserTypes) => {
    logIn(values)
      .then(() => {
        userStore.setUserEmail({ email: '' });
        authStore.setAuthStatus(true);
        setValue('email', '');
        closeModal();
      })
      .catch((error) => {
        if (error.response.status === 422) {
          const errorMessage = error.response.data.errors.email;
          errors &&
            setError('email', {
              type: 'message',
              message: errorMessage,
            });
        } else {
          console.log(error);
        }
      });
  };

  return (
    <TheForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormHeading>შესვლა</StyledFormHeading>
      <InputText
        placeholder='Example@redbery.ge'
        label='ელ-ფოსტა'
        {...register('email')}
        setValue={setEmailValue}
        error={errors.email}
        dirty={isDirty}
      />
      <ButtonPrimary title='შესვლა' />
    </TheForm>
  );
};

export default FormLogin;

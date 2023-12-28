import { InputText } from '@/ui/inputs';
import { TheForm } from '..';
import { StyledFormHeading } from '@/styles/form/login';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';
import { loginFormValidationSchema } from 'src/schemas';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(loginFormValidationSchema()),
  });

  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <TheForm onSubmit={handleSubmit(onSubmit)}>
      <StyledFormHeading>შესვლა</StyledFormHeading>
      <InputText
        placeholder='Example@redbery.ge'
        label='ელ-ფოსტა'
        {...register('email')}
        error={errors.email}
      />
      <ButtonPrimary title='შესვლა' />
    </TheForm>
  );
};

export default FormLogin;

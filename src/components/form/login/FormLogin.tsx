import { InputText } from '@/ui/inputs';
import { TheForm } from '..';
import { StyledFormHeading } from '@/styles/form/login';
import ButtonPrimary from '@/ui/buttons/ButtonPrimary';

const FormLogin = () => {
  const onSubmit = () => {
    console.log('submitted');
  };
  return (
    <TheForm onSubmit={onSubmit}>
      <StyledFormHeading>შესვლა</StyledFormHeading>
      <InputText
        error={false}
        name='email'
        placeholder='Example@redbery.ge'
        label='ელ-ფოსტა'
      />
      <ButtonPrimary title='შესვლა' />
    </TheForm>
  );
};

export default FormLogin;

import * as Yup from 'yup';

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.]+@redberry.ge$/;
export const loginFormValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required('field is required')
      .email('invalid email format')
      .matches(VALID_EMAIL_REGEX, 'provide valid email'),
  });
};

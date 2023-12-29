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
const MIN_TWO_WORDS = /^[ა-ჰ]+(?:\s+[ა-ჰ]+)+$/;
const ONLY_GEORGIAN = /^[ა-ჰ.\s].[ა-ჰ]+./;

export const addBlogFormValidationSchema = () => {
  return Yup.object().shape({
    author: Yup.string()
      .min(4, 'მინიმუმ 4 სიმბოლო')
      .matches(ONLY_GEORGIAN, 'მხოლოდ ქართული ასოები')
      .matches(MIN_TWO_WORDS, 'მინიმუმ 2 სიტყვა'),
    title: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო'),
    description: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო'),
    published_at: Yup.string().required('ველი სავალდებულოა'),
    categories: Yup.string(),
    email: Yup.string().required('ველი სავალდებულოა'),
  });
};

import * as Yup from 'yup';

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.]+@redberry.ge$/;
export const loginFormValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required('ველი სავალდებულოა')
      .email('შეიყვანეთ სწორი მეილის ფორმატი')
      .matches(VALID_EMAIL_REGEX, 'შეიყვანეთ ვალიდური მეილი'),
  });
};

const MIN_TWO_WORDS = /^[ა-ჰ]+(?:\s+[ა-ჰ]+)+$/;
const ONLY_GEORGIAN = /^[ა-ჰ.\s].[ა-ჰ]+./;
const currentDate = new Date(Date.now() - 86400000);

export const addBlogFormValidationSchema = () => {
  return Yup.object().shape({
    author: Yup.string()
      .min(4, 'მინიმუმ 4 სიმბოლო')
      .matches(ONLY_GEORGIAN, 'მხოლოდ ქართული ასოები')
      .matches(MIN_TWO_WORDS, 'მინიმუმ 2 სიტყვა'),
    title: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო'),
    description: Yup.string().min(2, 'მინიმუმ 2 სიმბოლო'),
    published_at: Yup.date()
      .typeError('გთხოვთ შეიყვანოთ ვალიდური თარიღი')
      .required('ველი სავალდებულოა')
      .min(currentDate, 'გამოქვეყნების თარიღი ვერ იქნება წარსული'),
    categories: Yup.string().required(),
    email: Yup.string().test(
      'ifEmailPresent',
      'გთხოვთ შეიყვანოთ ვალიდური მეილი',
      (value) => {
        if (value) {
          return VALID_EMAIL_REGEX.test(value);
        }
        return true;
      },
    ),
  });
};

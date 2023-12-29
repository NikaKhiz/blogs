import { InputText } from '@/ui/inputs';
import { TheForm } from '..';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addBlogFormValidationSchema } from 'src/schemas';
import { ChangeEvent } from 'react';
import { StyledBlogFormFieldsWrapper } from 'src/pages/addBlog/components/blogPage.styles';
import InputTextarea from '@/ui/inputs/inputTextarea';
import ButtonSubmit from './ButtonSubmit';
const FormAddBlog = () => {
  const {
    register,
    formState: { errors, dirtyFields, isValid },
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: {
      author: '',
      title: '',
      description: '',
      published_at: '',
      categories: '',
      email: '',
    },
    resolver: yupResolver(addBlogFormValidationSchema()),
  });
  const onSubmit = () => {
    console.log('submit form');
  };

  const setAuthorValue = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <TheForm onSubmit={handleSubmit(onSubmit)}>
      <StyledBlogFormFieldsWrapper>
        <InputText
          placeholder='შეიყვნეთ ავტორი'
          label='ავტორი *'
          {...register('author')}
          setValue={setAuthorValue}
          error={errors.author}
          dirty={dirtyFields.author}
        />
        <InputText
          placeholder='შეიყვნეთ სათაური'
          label='სათაური *'
          {...register('title')}
          setValue={setAuthorValue}
          error={errors.title}
          dirty={dirtyFields.title}
        />
      </StyledBlogFormFieldsWrapper>
      <InputTextarea
        placeholder='შეიყვანეთ აღწერა'
        label='აღწერა *'
        {...register('description')}
        setValue={setAuthorValue}
        error={errors.description}
        dirty={dirtyFields.description}
      />
      <StyledBlogFormFieldsWrapper>
        <InputText
          placeholder='12/12/2023'
          label='გამოქვეყნების თარიღი*'
          {...register('published_at')}
          setValue={setAuthorValue}
          error={errors['published_at']}
          dirty={dirtyFields['published_at']}
        />

        <InputText
          placeholder='აირჩიეთ კატეგორია'
          label='კატეგორია *'
          {...register('categories')}
          setValue={setAuthorValue}
          error={errors.categories}
          dirty={dirtyFields.categories}
        />
      </StyledBlogFormFieldsWrapper>
      <InputText
        placeholder='Example@redberry.ge'
        label='ელ ფოსტა'
        {...register('email')}
        setValue={setAuthorValue}
        error={errors.email}
        dirty={dirtyFields.email}
      />
      <div style={{ width: '50%', alignSelf: 'end' }}>
        <ButtonSubmit title='გამოქვეყნება' available={isValid} />
      </div>
    </TheForm>
  );
};

export default FormAddBlog;

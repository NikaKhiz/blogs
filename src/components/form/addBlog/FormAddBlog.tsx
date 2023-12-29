import { TheForm } from '..';

const FormAddBlog = () => {
  const onSubmit = () => {
    console.log('submit form');
  };

  return (
    <TheForm onSubmit={onSubmit}>
      <p>here will go form add blog</p>
    </TheForm>
  );
};

export default FormAddBlog;

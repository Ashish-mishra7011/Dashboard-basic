import { useForm } from 'react-hook-form';

const UserForm = ({ defaultValues, onSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input {...register('first_name')} className="border" />
      </label>
      <label>
        Last Name:
        <input {...register('last_name')} className="border" />
      </label>
      <label>
        Email:
        <input {...register('email')} className="border" />
      </label>
      <button type="submit" className="bg-green-500 p-2 text-white">
        Submit
      </button>
    </form>
  );
};

export default UserForm;

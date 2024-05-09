import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './CaretakerRegistration.module.css'

interface CaretakerForm {
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  homePhone: string;
  cellPhone: string;
  email: string;
}

const CaretakerRegistration: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CaretakerForm>();

  const onSubmit: SubmitHandler<CaretakerForm> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register Caretaker</h2>
      <label className={styles.formLabel}>
        First Name:
        <input className={styles.formInput} {...register("firstName", { required: true })} />
        {errors.firstName && <span className={styles.formError}>This field is required</span>}
      </label>
      <label className={styles.formLabel}>
        Email:
        <input className={styles.formInput} {...register("email", { required: "Email is required", pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Invalid email address"
        }})} />
        {errors.email && <span className={styles.formError}>{errors.email.message}</span>}
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default CaretakerRegistration;

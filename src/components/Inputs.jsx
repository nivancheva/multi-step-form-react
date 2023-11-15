import './Inputs.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required('This field is required'),
    email: yup.string().email().required('This field is required'),
    tel: yup.number().typeError("This field is required").required(),
  })
  .required()

export default function Inputs({ onSubmit }) {
    function handleFormSubmit(data) {
        onSubmit(data);
      }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <div className='input-wrapper'>
            <form className='input-form' onSubmit={handleSubmit(handleFormSubmit)}>
                <div className={`input-container${errors.email?.message ? " input-error" : ""}`}>
                    <label htmlFor='name'>Name</label>
                    <p className='errors'>{errors.name?.message}</p>
                    <input 
                        {...register("name")}
                        type='text'
                        placeholder='e.g. Stephen King'
                    />
                </div>

                <div className={`input-container${errors.email?.message ? " input-error" : ""}`}>
                    <label htmlFor='email'>Email Adress</label>
                    <p className='errors'>{errors.email?.message}</p>
                    <input 
                        {...register("email")}
                        type='email'
                        placeholder='e.g. stephenking@lorem.com'
                    />
                </div>

                <div className={`input-container${errors.email?.message ? " input-error" : ""}`}>
                    <label htmlFor='tel'>Phone Number</label>
                    <p className='errors'>{errors.tel?.message}</p>
                    <input 
                        {...register("tel")}
                        type='tel'
                        placeholder='e.g. +1 234 567 890'
                    />
                </div>
                <button type='submit' className='hidden'></button>
            </form>
        </div>
    )
}
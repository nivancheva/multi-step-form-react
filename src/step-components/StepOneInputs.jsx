import './StepOneInputs.css';
import Inputs from "../components/Inputs";
import StepTitle from "./StepTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from 'react';
import { formDataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    name: yup.string().required('This field is required'),
    email: yup.string().email().required('This field is required'),
    tel: yup.number().typeError("This field is required").required(),
  })
  .required()

export default function StepOneInputs() {
  const {formData, setFormData} = useContext(formDataContext);
  const navigate = useNavigate();
  
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues: formData.personalInfo
    });
    function handleFormSubmit(data) {
        setFormData(formData => { return {...formData, personalInfo: data}});
    
        navigate('/multi-step-form-react/plan');
    }

    return (
        <>
        <div className='steps-section'>
            <div>
                <StepTitle title='Pesonal Info' definition='Please provide your name, email address, and phone number.'/>

                <div>
                  <form id="myform" className='input-form' onSubmit={handleSubmit(handleFormSubmit)}>
                      <Inputs register={register} errors={errors} />
                  </form>
              </div>
            </div>
          </div>

          <div className='button-section bg-white'>
            <div className='btn-next'>
              <button form="myform" className="button btn-primary">Next Steps</button>
            </div>
          </div>
        </>
    )
}
    
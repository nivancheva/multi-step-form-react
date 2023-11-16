import './StepOneInputs.css';
import Inputs from "../components/Inputs";
import StepTitle from "./StepTitle";
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

export default function StepOneInputs({ onForwardClick }) {
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
    });
    function handleFormSubmit(data) {
        onForwardClick(data);
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
              <button form="myform" className="button btn-primery">Next Steps</button>
            </div>
          </div>
        </>
    )
}
    
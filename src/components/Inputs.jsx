import './Inputs.css';

export default function Inputs({register, errors}) {
    return (
        <>
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
        </>
    )
}
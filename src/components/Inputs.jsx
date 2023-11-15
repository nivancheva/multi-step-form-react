import './Inputs.css';

export default function Inputs() {
    return (
        <div className='input-wrapper'>
            <form className='input-form'>
                <div className='input-container'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        id='name'
                        type='text'
                        placeholder='e.g. Stephen King'
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email Adress</label>
                    <input 
                        id='email'
                        type='email'
                        placeholder='e.g. stephenking@lorem.com'
                    />
                </div>

                <div>
                    <label htmlFor='tel'>Phone Number</label>
                    <input 
                        id='tel'
                        type='tel'
                        placeholder='e.g. +1 234 567 890'
                    />
                </div>
            </form>
        </div>
    )
}
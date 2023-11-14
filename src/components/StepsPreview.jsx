import './StepsPreview.css';

export default function StepsPreview() {
    return (
        <div className='bg-image'>
            <div className='step-wrapper'>
                <div>
                    <span className='step'>1</span>
                </div>
                <div className='steps-info'>
                    <p className='step-num'>Step 1</p>
                    <p className='step-title'>YOUR INFO</p>
                </div>
            </div>


            <div className='step-wrapper'>
                <div>
                    <span className='step step-active'>2</span>
                </div>
                <div className='steps-info'>
                    <p className='step-num'>Step 2</p>
                    <p className='step-title'>SELECT PLAN</p>
                </div>
            </div>

            <div className='step-wrapper'>
                <div>
                    <span className='step'>3</span>
                </div>
                <div className='steps-info'>
                    <p className='step-num'>Step 3</p>
                    <p className='step-title'>ADD-ONS</p>
                </div>
            </div>

            <div className='step-wrapper'>
                <div>
                    <span className='step'>4</span>
                </div>
                <div className='steps-info'>
                    <p className='step-num'>Step 4</p>
                    <p className='step-title'>SUMMARY</p>
                </div>
            </div>
        </div>
    )
}
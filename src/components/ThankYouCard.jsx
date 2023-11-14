import './ThankYouCard.css';
import iconThankYou from '../images/icon-thank-you.svg';

export default function ThankYouCard() {
    return (
        <div className='container thank-you-card'>
            <img className='icon-thank_you' src={iconThankYou}/>
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}
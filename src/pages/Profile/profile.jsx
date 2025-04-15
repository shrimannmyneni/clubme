import React, {useState} from 'react';
import './profile.css'

import VisaImg from '../../assets/paymentProcessorImages/visa.png'
import AmexImg from '../../assets/paymentProcessorImages/amex.jpeg'
import DiscoverImg from '../../assets/paymentProcessorImages/discover.png'
import MastercardImg from '../../assets/paymentProcessorImages/mastercard.jpeg'

function BasicInfoSection() {
  return (
    <fieldset>
      <legend>Basic Information</legend>

      <label htmlFor="org-name">Organization Name</label>
      <input
        type="text"
        id="org-name"
        name="org_name"
        placeholder="My club"
        required
      /><br/>

      <label htmlFor="org-email">Email</label>
      <input
        type="email"
        id="org-email"
        name="email"
        placeholder="contact@clubme.net"
        required
      /><br/>

      <label htmlFor="org-phone">Phone Number</label>
      <input
        type="tel"
        id="org-phone"
        name="phone"
        placeholder="(123) 456-7890"
      /><br/>

    </fieldset>
  );
}

function OfficerInfoSection() {
  return (
    <fieldset>
      <legend>Officer Information</legend>

        <label htmlFor="president">President </label>
        <input
          type="text"
          id="president"
          name="president"
          placeholder="Enter Name Here"
        /><br/>
      
        <label htmlFor="vice-president">Vice President </label>
        <input
          type="text"
          id="vice-president"
          name="vice-president"
          placeholder="Enter Name Here"
        /><br/>
      
        <label htmlFor="treasurer">Treasurer </label>
        <input
          type="text"
          id="treasurer"
          name="treasurer"
          placeholder="Enter Name Here"
        /><br/>
      
        <label htmlFor="secretary">Secretary </label>
        <input
          type="text"
          id="secretary"
          name="secretary"
          placeholder="Enter Name Here"
        /><br/>

        <label htmlFor="recruitment-chair">Recruitment Chair </label>
        <input
          type="text"
          id="recruitment-chair"
          name="recruitment-chair"
          placeholder="Enter Name Here"
        /><br/>
    </fieldset>      
  );
}

function RecoveryOptionsSection() {
  return (
    <fieldset>
      <legend>Recovery Options</legend>

      <label htmlFor="recovery-email">Recovery Email</label>
      <input
        type="email"
        id="recovery-email"
        name="recovery_email"
        placeholder="backup@clubme.net"
      /><br/>

      <label htmlFor="recovery-phone">Recovery Phone</label>
      <input
        type="tel"
        id="recovery-phone"
        name="recovery_phone"
        placeholder="(987) 654-3210"
      /><br/>
    </fieldset>
  );
}


function AuthPreferencesSection() {
  return (
    <fieldset>
      <legend>Authentication Preferences</legend>

      <label htmlFor="login-method">Preferred Login Method</label>
      <select id="login-method" name="login_method">
        <option value="google">Google</option>
        <option value="email">Email & Password</option>
        <option value="otp">One-Time Passcode (OTP)</option>
      </select>
    </fieldset>
  );
}



function PaymentForm() {
  const [sameAsCardInfo, setSameAsCardInfo] = useState(false);
  const [bankLogo, setBankLogo] = useState(null); // State to hold the logo
  const [altText, setAltText] = useState('');

  function handleSameAsCardInfoChange(){
    setSameAsCardInfo(!sameAsCardInfo);

    const billingName = document.getElementById('billing-name');
    const billingAddress = document.getElementById('billing-address');
    const billingCity = document.getElementById('billing-city');
    const billingPostalCode = document.getElementById('billing-postal-code');

    if (!sameAsCardInfo){
      // get fields from the card information via document selectors
      const cardName = document.getElementById('card-name');
      const cardAddress = document.getElementById('card-address');
      const cardCity = document.getElementById('card-city');
      const cardPostalCode = document.getElementById('card-postal-code');

      // fill the billing info fields with the information from the card info
      if (!cardName.value || !cardAddress.value || !cardCity.value || !cardPostalCode.value){
        alert("Please fill out all card information before proceeding with billing.");
      }
      else
      {
      billingName.value = cardName.value;
      billingAddress.value = cardAddress.value;
      billingCity.value = cardCity.value;
      billingPostalCode.value = cardPostalCode.value;

      billingName.disabled = true;
      billingAddress.disabled = true;
      billingCity.disabled = true;
      billingPostalCode.disabled = true;
      }
    }
    else{
      billingName.disabled = false;
      billingAddress.disabled = false;
      billingCity.disabled = false;
      billingPostalCode.disabled = false;

      billingName.value = '';
      billingAddress.value = '';
      billingCity.value = '';
      billingPostalCode.value = '';

    }
  }

  function determinePaymentProcessorCompany(){
    const cardNum = document.getElementById('card-number').value;
    if ((cardNum).length >= 4){
      // get value from the card number text area
      const bankBin = cardNum[0];
      
      switch (bankBin){
        case '3':
          setBankLogo(AmexImg)
          setAltText('Amex Logo');
          break;
        case '4':
          setBankLogo(VisaImg)
          setAltText('Visa Logo');
          break;
        case '5':
          setBankLogo(MastercardImg);
          setAltText('Mastercard Logo');
          break;
        case '6':
          setBankLogo(DiscoverImg);
          setAltText('Discover Logo');
          break;
        default:
          setBankLogo(null);
          setAltText('');
          break;
      }
    } // end if
    else{
      setBankLogo(null)
      setAltText('')
    }//end else
  }
  
   

  return(
    <div className="payment-form">
      <h2>Payment Information</h2>

      {/* Card Information Fieldset */}
      <fieldset>
        <legend>Card Information</legend>

        <label htmlFor="card-name">Cardholder Name</label>
        <input type="text" id="card-name" placeholder="John Doe" /><br />

        <label htmlFor="card-number">Card Number</label>
        <input type="text" 
              id="card-number" 
              placeholder="1234 5678 9101 1121" 
              onChange={determinePaymentProcessorCompany}/>
              
        <img class="card-logo" 
              src={bankLogo} 
              alt={altText}/><br />

        <label htmlFor="card-address">Billing Address</label>
        <input type="text" id="card-address" placeholder="123 Main St" /><br />

        <label htmlFor="card-city">City</label>
        <input type="text" id="card-city" placeholder="Your City" /><br />

        <label htmlFor="card-postal-code">Postal Code</label>
        <input type="text" id="card-postal-code" placeholder="12345" /><br />
      </fieldset>

      {/* Billing Information Fieldset */}
      <fieldset>
        <legend>Billing Information</legend>

        <label htmlFor="billing-name">Name</label>
        <input type="text" id="billing-name" placeholder="John Doe" /><br />

        <label htmlFor="billing-address">Billing Address</label>
        <input type="text" id="billing-address" placeholder="123 Main St" /><br />

        <label htmlFor="billing-city">City</label>
        <input type="text" id="billing-city" placeholder="Your City" /><br />

        <label htmlFor="billing-postal-code">Postal Code</label>
        <input type="text" id="billing-postal-code" placeholder="12345" /><br />
        
        {/* Checkbox to auto-fill billing info */}
        <label>
          <input name="checkbox" type="checkbox" onChange={handleSameAsCardInfoChange}/>
          Use the same information as Card Information
        </label>
      </fieldset>

    </div>
  );
}

function DangerZoneSection() {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      alert('Account deletion requested.');
      // Add delete logic here
    }
  };

  return (
    <div class="danger-zone">
      <h2>Danger Zone</h2>
      <p>Deleting your organization's profile is permanent.</p>
      <button className="danger-button" onClick={handleDelete}>
        Delete Organization
      </button>
    </div>
  );
}

function Profile() {
  return (
    <div class="content">
      <h1>Organization Profile</h1>
      <form className="profile-form">
        <BasicInfoSection />
        <OfficerInfoSection/>
        <RecoveryOptionsSection />
        <AuthPreferencesSection />
        <PaymentForm/>
        <button type="submit">Save Changes</button>
      </form>
      <DangerZoneSection />
    </div>
  );
}

export default Profile;
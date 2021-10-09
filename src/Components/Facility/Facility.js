import React from 'react'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HeadsetIcon from '@material-ui/icons/Headset';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const Facility = () => {
    return (
    <section className="facility__section section" id="facility" style={{backgroundColor: "#545b6229"}}>
      <div className="container">
        <div className="facility__contianer" data-aos="fade-up" data-aos-duration="1200">
          <div className="facility__box">
            <div className="facility-img__container">
             <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
            </div>
            <p>FREE SHIPPING WORLD WIDE</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <CreditCardIcon></CreditCardIcon>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <CardGiftcardIcon></CardGiftcardIcon>
            </div>
            <p>MANY PAYMENT GATWAYS</p>
          </div>

          <div className="facility__box">
            <div className="facility-img__container">
              <HeadsetIcon></HeadsetIcon>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Facility

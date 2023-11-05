import React from 'react'
import NavbarNoSign from '../NavbarNoSign';
import { Link } from 'react-router-dom'
import FooterSteps from '../FooterSteps'

// import StripeCheckout from 'react-stripe-checkout';
const Paiement = () => {

  return (
    <div>
      <NavbarNoSign styleNavBtn={{ backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: "20px" }} />
      <hr />
      <div className="featureStepOne">
        <div className="contentStepOneFeature">
          <div className="bgLock" ></div>
          <span className='stepOneOne text-center' style={{ textAlign: 'center' }}>ETAPE 3 sur 3</span>
          <h1 className="stepOneTitl" style={{ textAlign: 'center' }}>Choisez votre moyen de paiement</h1>
          <h6 className='stepOneDetail' style={{ textAlign: 'center' }}>Your payment is encrypted and you can change how you pay anytime.</h6>
          <h4 style={{ fontWeight: '600', fontSize: '20px', textAlign: 'center' }}>Secure for peace of mind.
            Cancel easily online.</h4>

        </div>

      </div>

      <FooterSteps />
    </div>
  )
}

export default Paiement

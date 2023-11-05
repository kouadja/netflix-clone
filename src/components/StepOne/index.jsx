// import React from 'react'
import { Link } from 'react-router-dom'
import BtnRed from '../BtnRed'
import NavbarNoSign from '../NavbarNoSign'
import FooterSteps from '../FooterSteps'
const StepOne = () => {



  return (
    <div className='StepOne '>

      <NavbarNoSign styleNavBtn={{ backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: "20px" }} />
      <hr />
      <div className="featureStepOne">
        <div className="contentStepOneFeature">
          <div className="bgDevice"></div>
          <span className='stepOneOne'>ETAPE 1 sur 3</span>
          <h1 className="stepOneTitl">Terminer la configuration de votre compte</h1>
          <h6 className='stepOneDetail'>Netflix est personnalisé pour vous. Créez un mot de passe pour regarder sur n'importe quel appareil à tout moment.
          </h6>
          <Link to={'/signup/regform'}>
            <BtnRed styled={{ width: '100%', height: "60px", fontSize: "30px", fontWeight: '500' }}>Suivant</BtnRed>
          </Link>

        </div>

      </div>

      <FooterSteps />

    </div>
  )
}

export default StepOne

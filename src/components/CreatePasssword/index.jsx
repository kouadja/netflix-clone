import React from 'react'
import NavbarNoSign from '../NavbarNoSign'
import FooterSteps from '../FooterSteps'
import BtnRed from '../BtnRed'
import { Link } from 'react-router-dom'

const CreatePasssword = () => {
  return (
    <div>

      <NavbarNoSign styleNavBtn={{ backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: "20px" }} />
      <hr />
      <div className="featureStepOne ">
        <div className="contentCreatePassword  createPasswordWithd">
          <span className='stepOneOne '>ETAPE 1 sur 3</span>
          <h1 className="stepOneTitl ">Créez un mot de passe pour commencer votre adhésion</h1>
          <h6 className='stepOneDetail '>Encore quelques etapes et le tour est joué
          </h6>
          <form action="" className='formStep'>
            <div>
              <input className='inputSi border' type="email" id="email" name="email" required placeholder='kouadja' />
            </div>
            <div>
              <input className='inputSi border' type="password" name="password" placeholder='password' id="password" />
            </div>
            <div className="contentRemember text-dark d-flex  mb-4 ">
              <input type="checkbox" className='border' name="" id="rem" />
              <label htmlFor="rem" className='label' style={{ fontSize: "13px", padding: '15px 10px 0' }}>Veillez ne pas m'envoyé d 'otrres spéciales Netflix par e-mail</label>
            </div>
            <div>
              <Link to='/signup'>
                <BtnRed styled={{ width: '100%', height: "60px", fontSize: "30px", fontWeight: '500' }}>Suivant</BtnRed>
              </Link>
            </div>
          </form>

        </div>

      </div>

      <FooterSteps />
    </div>
  )
}

export default CreatePasssword

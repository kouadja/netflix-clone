import React from 'react'
import NavbarNoSign from '../NavbarNoSign'
import BtnRed from '../BtnRed'
import { Link } from 'react-router-dom'

const StepTwo = () => {
    return (
        <div className='stepTwo'>
            <NavbarNoSign styleNavBtn={{ backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: "20px" }} />
            <hr />
            <div className="featureStepOne">
                <div className="  contentFeature">

                    <div className="check"></div>
                    <span className=' stepTwoStep '>ETAPE 2 sur 3</span>
                    <h1 className="stepOneTitl " style={{fontSize:'27px',}}>Choisissez votre forfait.</h1>
                    <div className="checkMark-group ">
                        <svg xmlns="http://www.w3.org/2000/svg" color='red' width="36" height="26" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                        <span className='textCheck'>Tout sur Netflix pour un prix modique.</span>
                    </div>
                    <div className="checkMark-group">
                        <svg xmlns="http://www.w3.org/2000/svg" color='red' width="36" height="26" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                        <span className='textCheck'>Pas de publicité et pas de frais supplémentaires. Jamais.</span>
                    </div>
              <div className="checkMark-group">
                        <svg xmlns="http://www.w3.org/2000/svg" color='red' width="36" height="26" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                        <span className='textCheck'>Pas de publicité et pas de frais supplémentaires. Jamais.</span>
                    </div>
                    <Link to ={"/signup/planform"}>

                    <BtnRed  styled={{width:'100%',height:"60px",fontSize:"30px",fontWeight:'500'}}>Suivant</BtnRed>
                    </Link>
                


                </div>
            </div>

        </div>
    )
}

export default StepTwo

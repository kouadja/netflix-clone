// import React from 'react'
import { Link } from 'react-router-dom';
import BtnRed from '../BtnRed';
import NavbarNoSign from '../NavbarNoSign'
import React, { useEffect, useRef, useState } from 'react';
import FooterSteps from './../FooterSteps/index';
const StepThree = () => {
    const [gender, setGender] = useState('');
    const ref5 = useRef(null)
    const ref2 = useRef(null)
    const ref1 = useRef(null)

    const mobile = document.getElementsByClassName(" mobile")
    const basique = document.getElementsByClassName("basique")
    const standard = document.getElementsByClassName("standard")
    const prime = document.getElementsByClassName("prime")
    const containerPlan = document.getElementsByClassName("planGrid__selector")
    const planGrid__featureTable = document.getElementsByClassName("planGrid__header")





    const handleGenderChange = (event) => {
        setGender(event.target.value);
         if (event.target.id == "planGrid_planChoice_0") {
             for (let i = 0; i < mobile.length; i++) {
                 mobile[i].classList.add('mobiles')
             }
         } else {
             for (let i = 0; i < mobile.length; i++) {
                mobile[i].classList.remove('mobiles')
             }
         }

         if (event.target.id == "planGrid_planChoice_1") {
             for (let i = 0; i < basique.length; i++) {

               basique[i].classList.add('mobiles')
             }
         } else {
             for (let i = 0; i < mobile.length; i++) {
                basique[i].classList.remove('mobiles')
         }
     }
     if (event.target.id == "planGrid_planChoice_2") {
         for (let i = 0; i < standard.length; i++) {

             standard[i].classList.add('mobiles')
         }
     } else {
         for (let i = 0; i < mobile.length; i++) {
             standard[i].classList.remove('mobiles')
         }
     }
     if (event.target.id == "planGrid_planChoice_3") {
         for (let i = 0; i < prime.length; i++) {

             prime[i].classList.add('mobiles')
         }
     } else {
         for (let i = 0; i < mobile.length; i++) {
             prime[i].classList.remove('mobiles')
         }
     }





    };
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            const { scrollTop } = document.documentElement

         if (scrollTop > "350") {
                containerPlan[0].classList.add("fixePlan")

            }
            else {
                containerPlan[0].classList.remove("fixePlan")
            }
            if (scrollTop > "650") {
                planGrid__featureTable[0].classList.add("fixeMaxPlan")
            }
            if (scrollTop <= "650") {
                planGrid__featureTable[0].classList.remove("fixeMaxPlan");
                // planGrid__featureTable[0].classList.add("fixeMaxPlanPos")

            }
        }
        )

    }, [])



    return (
        <div className='stepthree'>

            <NavbarNoSign styleNavBtn={{ backgroundColor: 'white', color: 'black', fontWeight: '500', fontSize: "20px" }} />
            <hr />
            <div className="containerStepThree">
                <div className="contentStepThree">

                    <span className=' stepTwoStep '>ETAPE 1 sur 3</span> <br />
                    <h1 className="stepOneTitl">Choisissez le forfait qui vous convient</h1>
                    <div className="checkMark-group ">
                        <svg xmlns="http://www.w3.org/2000/svg" color='red' width="36" height="26" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                        <span className='textCheck'>Regardez tout ce que vous voulez. Sans publicité.</span>
                    </div>
                    <div className="checkMark-group ">
                        <svg xmlns="http://www.w3.org/2000/svg" color='red' width="36" height="26" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                        <span className='textCheck'>Modifiez ou annulez votre plan à tout moment.</span>
                    </div>
                    <div className="checkMark-group ">
                        <svg xmlns="http://www.w3.org/2000/svg" color='red' width="36" height="26" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                        <span className='textCheck'>Tout sur Netflix pour un prix modique.</span>
                    </div>
                </div>
                <div className="planGrid planGrid--has4Plans" id='containerPlan'>
                    <div className="planGrid__header ">
                        <div className='planGrid__selector planGrid__planSelector' ref={ref5} >
                            <label for='planGrid_planChoice_0' ref={ref2} className='planGrid__selectorChoice planGrid__planLabel planGrid__selectorLabel' id='1'>
                                <input type="radio"

                                    value="planGrid_planChoice_0"
                                    checked={gender === 'planGrid_planChoice_0'}

                                    onChange={handleGenderChange}
                                    id='planGrid_planChoice_0' className='planGrid__selectorInput planGrid__planInput ' />
                                <span className='planGrid__selectorLabel spanSelected planGrid__planLabel'>Mobile</span>
                            </label>

                            <label htmlFor='planGrid_planChoice_1' className='planGrid__selectorChoice planGrid__planLabel planGrid__selectorLabel '>
                                <input type="radio"
                                    value="planGrid_planChoice_1"
                                    checked={gender === 'planGrid_planChoice_1'}
                                    onChange={handleGenderChange}
                                    id='planGrid_planChoice_1' className='planGrid__selectorInput planGrid__planInput ' />
                                <span className='planGrid__selectorLabel spanSelected planGrid__planLabel'>Basique</span>
                            </label>

                            <label for='planGrid_planChoice_2' className='planGrid__selectorChoice planGrid__planLabel planGrid__selectorLabel '>
                                <input type="radio"
                                    value="planGrid_planChoice_2"
                                    checked={gender === 'planGrid_planChoice_2'}
                                    onChange={handleGenderChange}
                                    id='planGrid_planChoice_2' className='planGrid__selectorInput planGrid__planInput' />
                                <span className='planGrid__selectorLabel spanSelected planGrid__planLabel'>Standard</span>
                            </label>

                            <label for='planGrid_planChoice_3' className='planGrid__selectorChoice planGrid__planLabel planGrid__selectorLabel'>
                                <input type="radio"
                                    value="planGrid_planChoice_3"
                                    checked={gender === 'planGrid_planChoice_3'}
                                    onChange={handleGenderChange}
                                    id='planGrid_planChoice_3' className='planGrid__selectorInput planGrid__planInput' />
                                <span className='planGrid__selectorLabel spanSelected  planGrid__planLabel'>Prime</span>
                            </label>
                        </div>

                        <div className="table">

                            <table className="planGrid__featureTable ">

                                <tbody className="planGrid__featureTableBody">
                                    <tr className='planGrid__featureTableRow planGrid__featureTableRow--planPrice'>
                                        <td className='planGrid__cell planGrid__featureCell'>Monthly price</td>
                                        <td className='mobile'>2,99 USD</td>
                                        <td className='basique'>3,99 USD</td>
                                        <td className='standard'>7,99 USD</td>
                                        <td className='prime'>9,99</td>


                                    </tr>
                                    <tr className='class="planGrid__featureTableRow planGrid__featureTableRow--videoQuality"'  >
                                        <td className='planGrid__cell  planGrid__featureCell'>Qualité vidéo</td>
                                        <td className='mobile' ref={ref1} >Bien</td>
                                        <td className='basique' ref={ref1}>Bien</td>
                                        <td className='standard'>Mieux</td>
                                        <td className='prime '>Meilleur</td>

                                    </tr>
                                    <tr className='class="planGrid__featureTableRow planGrid__featureTableRow--videoQuality"'>
                                        <td className='planGrid__cell planGrid__featureCell'>Résolution</td>
                                        <td className='mobile' ref={ref1} >480p</td>
                                        <td className='basique'>720p</td>
                                        <td className='standard'>1080p</td>
                                        <td className='prime'>4K+HDR</td>
                                    </tr>
                                    <tr className='class="planGrid__featureTableRow planGrid__featureTableRow--videoQuality"'>
                                        <td className='planGrid__cells planGrid__featureCell'>Appareils que vous pouvez utiliser pour regarde</td>
                                        <td className='mobile phone ' >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg> <br />
                                            <span className='spanDevice'>Téléphone</span>
                                            <br />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tablet-landscape" viewBox="0 0 16 16">
                                                <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z" />
                                                <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg> <br /><span className='spanDevice'>Tablette</span>
                                        </td>
                                        <td className='basique'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                            <br />
                                            <span className='spanDevice'>Téléphone</span>
                                            <br />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tablet-landscape" viewBox="0 0 16 16">
                                                <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z" />
                                                <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg> <br /><span className='spanDevice'>Tablette</span>
                                            <br /><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg> <br /> <span className='spanDevice'>Ordinateur</span>
                                            <br /><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                                            </svg> <br /><span className='spanDevice'>Tv</span>
                                        </td>
                                        <td className='standard'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg> <br />
                                            <span className='spanDevice'>Téléphone</span>
                                            <br />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tablet-landscape" viewBox="0 0 16 16">
                                                <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z" />
                                                <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg> <br /><span className='spanDevice'>Tablette</span>
                                            <br /><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg> <br /> <span className='spanDevice'>Ordinateur</span>

                                            <br /><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                                            </svg> <br /><span className='spanDevice'>Tv</span>
                                        </td>
                                        <td className='prime '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg> <br />
                                            <span className='spanDevice'>Téléphone</span>
                                            <br />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tablet-landscape" viewBox="0 0 16 16">
                                                <path d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm-1 8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8z" />
                                                <path d="M14 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg> <br /><span className='spanDevice'>Tablette</span>
                                            <br /><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg> <br /> <span className='spanDevice'>Ordinateur</span>

                                            <br /><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                                            </svg> <br /><span className='spanDevice'>Tv</span>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>

                            <span className='spanDevice ' style={{ fontSize: "14px", margin: "70px 0" }} >Disponibilité HD (720p), Full HD (1080p), Ultra HD (4K) et HDR sous réserve de votre service Internet et des capacités de votre appareil. Tout le contenu n'est pas disponible dans toutes les résolutions. Consultez nos conditions d'utilisation pour plus de détails.</span>
                            <span className='spanDevice'>Seules les personnes qui vivent avec vous peuvent utiliser votre compte. Regardez sur 4 appareils différents en même temps avec Premium, 2 avec Standard et 1 avec Basic et Mobile.</span>
                        </div>
                        <Link to='/paiement'>
                            <BtnRed styled={{ width: '50%', height: "60px", fontSize: "30px", fontWeight: '500', display: 'block', margin: '0 auto' }}>Suivant</BtnRed>
                        </Link>

                    </div>
                </div>

            </div>
            <footer>

                <FooterSteps />
            </footer>
        </div>
    )





}




export default StepThree

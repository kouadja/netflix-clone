// import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import tv from '../../images/tv.png'
import video from '../../Video/video.m4v'
import mobile from '../../images/mobile.jpg'
import kid from '../../images/kid.png'
import BtnRed from '../BtnRed'
import NavbarNoSign from '../NavbarNoSign';
import React, { useContext, useState } from 'react'
import {MystyleContext} from '../../Module';
import Input from '../Input'

const Home = () => {
    const refInput1 = React.createRef(null);
    const refInput2 = React.createRef(null);
    const refEmailValue = React.createRef(null);
    const [valueInput,setVallueInput] = useState('')
    const navigate = useNavigate(null)
    const style = useContext(MystyleContext);


    const handleFocusInput = (e)=>{
        e.preventDefault();
        if(e.target.id == 'refInput1'){
            refInput1.current.focus();
        if(refInput1.current.value !==""){
            navigate("/signup/registration")
        }

    }else{
        if(refInput2.current.value !=="")
        
        navigate("/signup/registration")
        else{

            refInput2.current.focus();
        }
    }
}
const handleOnchange = e=>{
    setVallueInput(e.target.value)
   refInput1.current = e.target.value
   console.log(valueInput)
}
    return (
        <div className='home '>
            <div className="containerHome">
                <NavbarNoSign/>
                <div className="mainContainerNav">
                    <div className="featureHome">
                        <h1 className='featureHomeTitle'>Films, émissions de télévision et plus encore illimités</h1>
                        <h3>Les plans commencent maintenant à 2,99 USD/mois.</h3>
                        <h3>Prêt à regarder ? Entrez votre e-mail pour créer ou redémarrer votre abonnement.</h3>
                    </div>
                    < form className="d-flex getStartHome " >
                        {/* <Input/> */}
                        <input className="form-control me-2 getStartInput " id= "refInput1"  ref={refInput1}  type="search" placeholder="Search" aria-label="Search" />
                        <BtnRed handleFocusInput = {(e)=> handleFocusInput(e)}  id='refInput1'  styled={{...style, borderRadius: '5px', padding: '15px 20px', fontSize: '1.5rem', }}>Commencer</BtnRed>
                    </form >

                </div>
            </div>
            <div className="contentHome">
                <div className="enjoy">
                    <div class="enjoyContent" >
                        <h2 className='text-light enjoyText'>Profitez sur votre téléviseur</h2>
                        <p className='enjoypara'>Regardez sur les téléviseurs intelligents, Playstation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray, etc.</p>
                    </div>
                    <div className="enjoyContentVideo ">
                        <img src={tv} alt="" className='tv ' />
                        <video autoPlay loop muted >
                            <source src={video} />
                        </video>
                    </div>

                </div>

            </div>
            <div className="contentHome">
                <div className="enjoy">
                    <div class="enjoyContentVideo ">
                        <img src={mobile} alt="" className='tv imageHome' />
                    </div>
                    <div class="enjoyContent" >
                        <h2 className='text-light enjoyText'>Download your shows to watch offline</h2>
                        <p className='enjoypara'>Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder.</p>
                    </div>
                </div>
            </div>
            <div className="contentHome ">
                <div className="enjoy enjoySize">
                    <div class="enjoyContent " >
                    <h2 className='text-light enjoyText'>Regardez partout</h2>
                        <p className='enjoypara'>Diffusez un nombre illimité de films et d'émissions de télévision sur votre téléphone, votre tablette, votre ordinateur portable et votre téléviseur.</p>
                    </div>
                    <div class="enjoyContentVideo dnone"></div>
                    
                </div>
            </div>
            <div className="contentHome">
                <div className="enjoy">
                    <div class="enjoyContentVideo ">
                        <img src={kid} alt="" className='tv imageHome' />
                    </div>
                    <div class="enjoyContent" >
                        <h2 className='text-light enjoyText'>Download your shows to watch offline</h2>
                        <p className='enjoypara'>Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder.</p>
                    </div>
                </div>
            </div>
            <div className="containerAccordion ">
                <h1 className='text-light enjoyText text-center pt-5'>Questions fréquemment posées</h1>
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header">

                            <button className="accordion-button accordionTitle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Qu'est-ce que Netflix

                            </button>

                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample" >
                            <div className="accordion-body">
                                <p className='enjoypara '>Netflix est un service de streaming qui propose une grande variété d'émissions de télévision, de films, d'animes, de documentaires et bien plus encore sur des milliers d'appareils connectés à Internet. </p>

                                <p className='enjoypara '>  Vous pouvez regarder autant que vous le souhaitez, quand vous le souhaitez, sans une seule publicité, le tout pour un prix mensuel modique. Il y a toujours quelque chose de nouveau à découvrir et de nouvelles
                                    émissions de télévision et de nouveaux films sont ajoutés chaque semaine !</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Combien coute Netflix
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className='enjoypara'>Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur portable ou appareil de streaming, le tout pour un tarif mensuel fixe. Les
                                    forfaits vont de 2,99 USD à 9,99 USD par mois. Pas de frais supplémentaires, pas de contrats.</p>
                            </div>
                        </div>
                    </div>
              
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Où puis-je regarder ?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='enjoypara'>Regardez n'importe où, n'importe quand. Connectez-vous avec votre compte Netflix pour regarder instantanément sur
                                    le Web sur netflix.com depuis votre ordinateur personnel ou sur tout appareil connecté à Internet qui offre l'application Netflix, y
                                    compris les téléviseurs intelligents, les smartphones, les tablettes, les lecteurs multimédias en continu et les consoles de jeux.</p>
                                <p className='enjoypara'>Vous pouvez également télécharger vos émissions préférées avec l'application iOS, Android ou Windows 10. Utilisez les téléchargements pour
                                    regarder pendant que vous êtes en déplacement et sans connexion Internet. Emportez Netflix partout avec vous.</p>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Comment puis-je annuler ?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='enjoypara'>Netflix est flexible. Il n'y a pas de contrats embêtants et pas d'engagements.
                                    Vous pouvez facilement résilier votre compte en
                                    ligne en deux clics. Il n'y a pas de frais d'annulation - démarrez ou arrêtez votre compte à tout moment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Que puis-je regarder sur Netflix ?
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                            <div class="accordion-body">
                                <p className='enjoypara'> Netflix possède une vaste bibliothèque de longs métrages, de documentaires, d'émissions de télévision,
                                    d'animes, d'originaux primés de Netflix, et plus encore. Regardez a
                                    utant que vous voulez, quand vous voulez.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Est-ce que Netflix est bon pour les enfants ?
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                            <div class="accordion-body">
                                <p className='enjoypara'>L'expérience Netflix Kids est incluse dans votre abonnement pour donner aux parents le contrôle pendant
                                    que les enfants profitent d'émissions de télévision et de films adaptés aux familles dans leur propre espace.</p>
                                <p className='enjoypara'>Les profils pour enfants sont livrés avec des contrôles parentaux protégés par un code PIN qui vous permettent de restreindre le niveau de maturité du contenu que les enfants
                                    peuvent regarder et de bloquer des titres spécifiques que vous ne voulez pas que les enfants voient.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Prêt à regarder ? Entrez votre e-mail pour créer ou redémarrer votre abonnement.</h3>
                < form className="d-flex getStartHome " role="search" >
                    <input className="form-control me-2 getStartInput " id= "refInput2"  ref={refInput2}  type="search" placeholder="Search" aria-label="Search" />
                    <BtnRed handleFocusInput = {(e)=>handleFocusInput(e)} id= "refInput2"  styled={{...style, borderRadius: '5px', padding: '15px 20px', fontSize: '1.5rem', }}>Commencer</BtnRed>
                </form >

            </div>
            <div className="contentHome">
                    <Link to=''>Questions? Contact us.</Link>
                <footer className='footerSign '>
                    <div className="boxFouterSignup">
                        <p> <Link to ='/'>FQA</Link></p>
                        <p><Link>Media Center</Link></p>
                        <p><Link>Façons de regarder</Link></p>
                        <p><Link>Préférences relatives aux cookies</Link></p>
                        <p><Link>Test de rapidité</Link></p>
                        <p><Link></Link></p>
                    </div>
                    <div className="boxFouterSignup">
                        <p><Link to='/'>Centre d'aide</Link></p>
                        <p><Link to='/'>Relations avec les investisseurs</Link></p>
                        <p><Link to=''>Conditions d'utilisation</Link></p>
                        <p><Link to=''>Information d'entreprise</Link></p>
                        <p><Link to=''>Mentions légales</Link></p>
                      
                    </div>
                    <div className="boxFouterSignup">
                        
                        <p><Link to=''>Compte</Link></p>
                        <p><Link to=''>Emplois</Link></p>
                        <p><Link to=''>Confidentialité</Link></p>
                        <p><Link to=''>Contactez-nous</Link></p><p><Link></Link></p>

                    </div>
                 
                </footer>
            </div>

        </div>
    )
}

export default Home


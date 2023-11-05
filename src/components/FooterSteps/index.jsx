import React from 'react'
import {Link } from 'react-router-dom'
const FooterSteps = () => {
  return (
    <div>
       <div className="stepOneFooter">
                    <Link to='' className='linkDark'>Questions? Contact us.</Link>
                <footer className='footerSign footerMargin '>
                    <div className="boxFouterSig text-black">
                        <p><Link to ='/'className='linkDark'>FQA</Link></p>
                        <p><Link to = '/'className='linkDark'>Media Center</Link></p>
                        <p><Link to = '/'className='linkDark'>Façons de regarder</Link></p>
                        <p><Link to = '/'className='linkDark'>Préférences relatives aux cookies</Link></p>
                        <p><Link to = '/'className='linkDark'>Test de rapidité</Link></p>
                        <p><Link to = '/'className='linkDark'></Link></p>
                    </div>
                    <div className="boxFouter">
                        <p><Link to='/'className='linkDark'>Centre d'aide</Link></p>
                        <p><Link to='/'className='linkDark'>Relations avec les investisseurs</Link></p>
                        <p><Link to='/'className='linkDark'>Conditions d'utilisation</Link></p>
                        <p><Link to='/'className='linkDark'>Information d'entreprise</Link></p>
                        <p><Link to='/'className='linkDark'>Mentions légales</Link></p>
                      
                    </div>
                    <div className="boxFouter">
                        
                        <p><Link to='/'className='linkDark'>Compte</Link></p>
                        <p><Link to='/'className='linkDark'>Emplois</Link></p>
                        {/* <p><Link to='/className='linkDark''>Confidentialité</Link></p> */}
                        <p><Link to='/'className='linkDark'>Contactez-nous</Link></p><p><Link></Link></p>

                    </div>
                 
                </footer>
            </div>
    </div>
  )
}

export default FooterSteps

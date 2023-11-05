import React from 'react';
import logo from '../../images/logo.png'
import NavbarNoSign from '../NavbarNoSign';

const SignUp = () => {
  return (
    <div className='containerSign'>
      <NavbarNoSign styleNavBtn={{display:"none"}}/>


      <div className="containerForm">
        <form action="" className='form'>
          <h2 className='signupTitle'>Sign up</h2>
          <div>
            <input className='inputSig'  type="email" id="email" name="email" required placeholder='kouadja' />
          </div>
          <div>
            <input className='inputSig' type="password" name="password" placeholder='password' id="password" />
          </div>
          <div>
            <button className='btnSign btn-small'>Sign up</button>
          </div>
          <div className="containerRemmbeer mt-2 d-flex justify-content-between">
            <div className="contentRemember ">
              <input type="checkbox" name="" id="rem" />
              <label htmlFor="rem">Souviens-toi de moi</label>
            </div>
            <a href="">Besoin d'aide?</a>
          </div>
          <div className="containerHelp">
            <p> <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Nouveau sur Netflix</span> <a href="">inscrivez-vous maintenant</a></p>
            <p style={{ fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif  ', fontSize: '16px' }} > This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="" style={{ color: "#0080FF", fontFamily: 'Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif  ', fontSize: '16px' }}> Learn more.</a></p>
          </div>



        </form>

      </div>
      <hr className=' hr' />
      <div className="containerFooter">
          <h6><a href="">Des questions? Contactez-nous.</a></h6>

      <footer className='footerSign '>
        <div className="boxFouterSignup">
          <p> <a href="">FQA</a></p>
           <p><a href="">Préférences relatives aux cookies</a></p>
        </div>
        <div className="boxFouterSignup">
           <p><a href="">Centre d'aide</a></p>
           <p><a href="">Information d'entreprise</a></p>
        </div>
        <div className="boxFouterSignup">
           <p><a href="">Conditions d'utilisation</a></p>
        </div>
        <div className="boxFouterSignup">
          <p> <a href="">Confidentialité</a></p>
        </div>
      </footer>
      </div>

    </div>
  )
}

export default SignUp

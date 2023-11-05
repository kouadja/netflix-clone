// import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import BtnRed from '../BtnRed'
import React, { useContext } from 'react'
import {MystyleContext} from '../../Module';
const NavbarNoSigu = ({styleNavBtn}) => {
    // console.log(styleNavBtn)
    const style = useContext(MystyleContext)
    return (
        <div className='navBarNoSignUp' >
            <div className="headerContent">
               <Link to="/"><img src={logo} className='homeLogo' alt="" /></Link> 
                <Link to='/connexion'><BtnRed styled={{...style,...styleNavBtn} }>Sign In</BtnRed> </Link>
            </div>
                    
        </div>
    )
}

export default NavbarNoSigu

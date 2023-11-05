import React, { useContext } from 'react'
import {MystyleContext} from '../../Module';


const BtnRed = ({ children ,handleFocusInput, id,styled ,}) => {
    const style = useContext(MystyleContext);
// console.log(style)
    
    return (
        <div> 
            <button id={id} style={{...style,...styled}} onClick={handleFocusInput}  >{children}</button>
        </div>
    )
}

export default BtnRed

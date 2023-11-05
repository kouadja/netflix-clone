import React from 'react'

const Input = () => {
    const input = {
        padding: '20px 0',
        // backgroundColor :'black'
    }
   

    const fromInputBoxInput = {
        padding: '10px 10px',
        fontSize: '10px',
        color: 'var(--red-color)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
    const fromcontentAndInputBox = {
        position: 'relative',
        height: '80px'
    }
    const fromInBoxLabel = {
    
        position: 'absolute',
        top: '0',
        left: '10px',
        padding: '10px 0',
        fontSize: '12px',
        pointerEvents: 'none',
        WebkitTransition: '0.2s ease-in',
        MozTransition: '0.2s ease-in',
        OTransition: '0.2s ease-in',
        transition: '0.2s ease-in',
    }

    return (

        <div class="formContent" >
            <form >
                <div class="inputBox" style={{...input}}>
                    <input type="text" id='email' required style={input} />
                    <label style={{...fromcontentAndInputBox}} htmlFor="email">Email</label>
                </div>
              

            </form>
        </div>

    )
}

export default Input

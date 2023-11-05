import React, { useEffect, useState } from 'react'
import hero from '../../images/hero.jpg'
import axios from 'axios'
import Feature from '../Feature'

const Review = (props) => {
    console.log(props)
    const {Poster,imdbID} = props
    // const array = [props.data]
    // console.log(array)
    // console.log(props.data)

useEffect(()=>{
    console.log("je suis dans le useEffect")
},[])


  
    const handleClick = (data) => {
     <Feature data = {data} />
     console.log("m")
    }



        return (
            <>
                <div className='containerReview '>
                    <div className="boxReview">
                        {
                            props.data.map(data => {

                                return <img src={data.Poster} key={data.imdbID} alt="" className='reviewImage' onClick={() => handleClick(data)} />
                            }
                            )
                        }
                    </div>
                </div>
            </>
        )
    

}

export default React.memo(Review)

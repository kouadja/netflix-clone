import React from 'react'
import hero from '../../images/kaleidoscope.jpg'
// import hero from '../images/hero.jpg'

const Feature = (props) => {
console.log(props)
  return (
    <div className='feature'>
        <div className="boxFeature boxFeature1">
          <h4>NETFLIX ORIGINAL</h4>
          <h1 className='featureTitle'>kaleidoscope</h1>
          <div className="infoFeature">
            <span>2021</span>
            <span> | </span>
            <span className='border d-inline-block'>18+</span>
            <span> | </span>
            <span>Saison 1</span>
            <span> | </span>
            <span>Romans policiers</span>
          </div>
          <h5>Regardez la saison 3 maintenant</h5>
          <p className='featureParagraph'>Le cartel de Cali reprend le pouvoir en Colombie. 
          Les successeurs d’Escobar passent à l’action et déclarent la guerre au gouvernement.</p>
          <div className="btnContentFeature d-flex ">
            <button className='btnFeature pr-3'><i className="bi bi-play-fill"></i> Lecture</button>
            <button className='btnFeature'><i className="bi bi-plus-lg"></i> My liste</button>

          </div>
        </div>
        <div className="boxFeature boxFeature2">
          
            <img src={hero} alt="" className='featureImage' />
        </div>      
    </div>
  )
}


export default Feature

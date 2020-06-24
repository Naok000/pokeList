import React from 'react';

const Card = ({name, id,  height, weight}) => {
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt='pokemon' height='200px' width='200px' />
            <h2>{ name }</h2>
            <p>DexNumber: { id }</p>
            <p>height: { (height*0.1).toFixed(2) }(m)</p>
            <p>weight: { (weight*0.1).toFixed(2) }(kg)</p>
        </div>
    )
}

export default Card;

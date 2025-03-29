import React from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country.flags.png)

    const handleVisited=()=>{
         console.log('Visited')
    }

    return (
        <div className='country'>
             
            <p>Name:{country.name.common}</p>
            <img width={200} height={200} src={country?.flags?.svg}></img>
            <p>independent: {country.independent===true?'Free':'Not Free'}</p>
            <p>Population:{country.population}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;
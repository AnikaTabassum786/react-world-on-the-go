import React, { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    // console.log(country.flags.png)


    const [visited,setVisited] = useState(false)

    const handleVisited=()=>{
        //  console.log('Visited')
        // setVisited(!visited)

        if(visited===true){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
        {/* <div className={`country ${visited?'country-visited':''}`}>   */}
            <p>Name:{country.name.common}</p>
            <img width={200} height={200} src={country?.flags?.svg}></img>
            <p>independent: {country.independent===true?'Free':'Not Free'}</p>
            <p>Population:{country.population}</p>
            <button className={visited? 'btn-visited':'btn-not-visited'} 
            onClick={handleVisited}>{visited?'Visited':'Not visited'}</button>
        </div>
    );
};

export default Country;
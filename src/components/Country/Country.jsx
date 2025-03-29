import React from 'react';

const Country = ({country}) => {
    console.log(country.flags.png)
    return (
        <div >
             
            <p>Name:{country.name.common}</p>
            <img  src={country?.flags?.svg}></img>
            <p>independent: {country.independent===true?'Free':'Not Free'}</p>
            <p>Population:{country.population}</p>
        </div>
    );
};

export default Country;
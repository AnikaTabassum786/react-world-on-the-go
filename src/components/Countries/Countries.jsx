import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countries=use(countriesPromise)
    // console.log(countries)

    const [visitedCountries, setVisitedCountries]= useState([])

    const handleVisitedCountries=(country)=>{
        console.log('Visited Countries added',country)
    }

    return (
        <div>
            <h1>Traveling World: {countries.length} Countries</h1>
           <div className='countries'>
           {
            countries.map(country=><Country 
                key={country.cca3} 
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                ></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countries=use(countriesPromise)
    // console.log(countries)

    const [visitedCountries, setVisitedCountries]= useState([])

    const handleVisitedCountries=(country)=>{
        console.log('Visited Countries added',country)
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h1>Traveling World: {countries.length} Countries</h1>
            <h2>Travelling so far:{visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country=><li>{country.name.common}</li>)
                }
            </ol>
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
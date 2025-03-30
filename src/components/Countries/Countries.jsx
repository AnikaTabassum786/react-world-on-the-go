import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countries=use(countriesPromise)
    // console.log(countries)

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])

    const handleVisitedCountries=(country)=>{
        console.log('Visited Countries added',country)
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag =(flag)=>{
        console.log('Visited flag',flag)
        const newVisitedFlags =[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags)

    }

    return (
        <div>
            <h1>Traveling World: {countries.length} Countries</h1>
            <h2>Traveling so far:{visitedCountries.length}</h2>
            <ul className='visited-flag'>
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag} alt="Flag Image" />)
                }
            </ul>
            <ol>
                {
                    visitedCountries.map(country=><li key={country.cca3} >{country.name.common}</li>)
                }
            </ol>
            
           <div className='countries'>
           {
            countries.map(country=><Country 
                key={country.cca3} 
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}
                ></Country>)
           }
           </div>
        </div>
    );
};

export default Countries;
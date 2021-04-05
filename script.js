let countries = [
        {   country: 'Germany',
            capital: 'Berlin',
            population: 83,
            area: 357.4,
        },
        {
            country: 'Belarus',
            capital: 'Minsk',
            population: 9.4,
            area: 207.6,
        },
        {
            country: 'Poland',
            capital: 'Warsaw',
            population: 37.9,
            area: 312.6,
        },
        {
            country: 'France',
            capital: 'Paris',
            population: 67.8,
            area: 643.8,
        },
        {
            country: 'Netherlands',
            capital: 'Amsterdam',
            population: 17.4,
            area: 41.5,
        },
        {
            country: 'Spain',
            capital: 'Madrid',
            population: 44.3,
            area: 505.9,
        },
        {
            country: 'Belgium',
            capital: 'Brussels',
            population: 11.4,
            area: 30.5,
        },
    ];

let capitalLongLand = countries.find(item => item.capital === 'Minsk');

let initialValue = 0;

let resultPopulation = countries.reduce((acc, name) => 
        acc + name.population, initialValue
    )
        
let resultArea = countries.reduce((acc, name) => 
        acc + name.area, initialValue
    )

let longLand = [
        {   name: 'LongLand',
            capital: capitalLongLand.capital,
            population: resultPopulation,
            area: resultArea,
        }
    ];

for (let i = 0; i < longLand.length; i++) {
    console.log(longLand[i]); 
}       
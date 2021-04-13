function State (name, capital, population, area) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.area = area
}

const str =
    'Германия, Берлин, 83млн, 357.4тыс.кв.км;' +
    ' Беларусь, Минск, 9.4млн, 207.6тыс.кв.км;' +
    ' Польша, Варшава, 37.9млн, 312.6тыс.кв.км;' +
    ' Франция, Париж, 67.8млн, 643.8тыс.кв.км;' +
    ' Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км;' +
    ' Испания, Мадрид, 44.3млн, 505.9тыс.кв.км;' +
    ' Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км';


let arr = str.split (';');

arr = arr.map((countryStr) => {
        const contryArr = countryStr.split(',')
        return new State(
            contryArr[0].trim(),
            contryArr[1].trim(),
            parseFloat(contryArr[2]),
            parseFloat(contryArr[3]),
        )
    });

let capitalLongLand = arr.find(item => item.capital === 'Минск');

let initialValue = 0;

let resultPopulation = arr.reduce((acc, name) => 
        acc + name.population, initialValue
    )
        
let resultArea = arr.reduce((acc, name) => 
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
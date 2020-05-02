const key= 'oKejBdL7DFrFZTk4mqCwxeWszKAOcoqm';


//for weather information

const getWeather = async (id)=>{
    const base ='http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch (base + query);
    const data = await response.json();

    console.log(data);

};

//for city information
const getCity = async (city) =>{
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return (data[0]);
};

//getCity('manchester').then(data=>console.log(data)).catch(err=>console.log(err))

getWeather("329260");   
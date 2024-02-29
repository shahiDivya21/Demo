const tempField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");



let target = "mumbai";

async function fetchData(target){

    try{
        let  url = `http://api.weatherapi.com/v1/current.json?key=bc7873c9e10a4135bf2180833241802&q=${target}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();

        let currentTemp = data.current.temp_c;
        let currentCondition = data.current.condition.text;
        let locationName = data.location.name;
        let localTime = data.location.localtime;
        let condition = data.current.condition.icon;
    }
    catch(error){
        console.log(error);
    }

}

fetchData(target);
/////////// weather part /////////////////////////
const city = document.querySelector(".cityDisplay");
const degree = document.querySelector(".tmpDisplay");
const humidity = document.querySelector(".humidity");
const desc = document.querySelector(".description");
const emoji = document.querySelector(".emoji");

const url3 = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2a7dbed74d65853479d15c70065ab709";

async function Weather() {
    try {
        const response = await fetch(url3);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log("An error occurred:", error);
    }
}

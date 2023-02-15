const btnEl = document.getElementById("btn");
const pjokeEl = document.getElementById("joke");


const apiKey = "eieQq3S+92rk9/5akRX/MQ==piVjAFN9TbovGVJF";

    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
        },

        }

        const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
        
async function getJoke(){

    pjokeEl.innerText = "Updating...";
    btnEl.innerText = "Loading...";
    btnEl.ariaDisabled = true;
    const response = await fetch(apiURL, options)
    const data = await response.json(); // here we will get data as array of object because of JSON data.
    // console.log(data); // array will print.
    // console.log(data[0]); // only zeroth object will print with text
    // console.log(data[0].joke); // only joke text will print, not object name.
    

    btnEl.innerText = "Click Me.";
    btnEl.ariaDisabled = false;

    pjokeEl.innerText = data[0].joke;
    }

   // console.log("Button is clicked");



btnEl.addEventListener("click", getJoke);
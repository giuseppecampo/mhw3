//  api key: 7c3605ca770abc4a5153116a2ab2287d
const apikey= '7c3605ca770abc4a5153116a2ab2287d';
const clientkey='c8b18c7d-882e-441e-b84f-2b53b66516fe';
const clientekeysecret='KvBfB8TcQ3uKIHwq0g2btkmjzH6mjcmUNe+/FyXBxgM=';
const citysearch = document.getElementById("searchcitta");
const button= document.getElementById("buttonMeteorologic");
button.addEventListener("click", event =>{
 var location = citysearch.value.toLowerCase();
 fetch('https://goweather.herokuapp.com/weather/'+location,{
  method:'get'
 }).then(onSuccess,onFail);
});

function onSuccess(response) {
 response.json().then(onJson);
 console.log("success");
}
function onFail(response) {
 console.log("failure");
}
function onJson(json){
 var meteo = document.getElementById("meteo");
 var citta = citysearch.value;
 let h2=document.createElement("h1");
 h2.innerHTML= 'Il meteo di: ' + citta + ' è';
 var description = json.description;
 let h1 = document.createElement("h1");
 h1.innerHTML = description;
 var temperature = json.temperature;
 let p = document.createElement("h1");
 p.innerHTML = temperature;
 meteo.appendChild(h2);
 meteo.appendChild(h1);
 meteo.appendChild(p);
}
   const numerovolo = document.getElementById("nvolo");
  
   const buttonsub= document.getElementById("submit"); 
   buttonsub.addEventListener("click", event =>{ 
        const numvolo = numerovolo.value;
        fetch("https://airportix.p.rapidapi.com/airport/delay_index/"+numvolo+"/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b89db7bbeemsh149bb22975a2a9bp194f19jsn5267c81e4cd2",
		"x-rapidapi-host": "airportix.p.rapidapi.com"
	}
})
    .then(onSuccex,onFailed)
});
function onSuccex(response) {
    response.json().then(onJson1);
    console.log("success");
   }
function onFailed(response) {
    console.log("failure");

   }
function onJson1(json){
    var airport = document.getElementById("aeroporto");
    console.log(json.data.name);
    console.log(json.data.delayIndex.canceledFlights);
    console.log(json.data.delayIndex.onTimeFlights);
    var nomeairport = json.data.name;
    let h1 = document.createElement("h1");;
    h1.innerHTML = nomeairport;
    airport.appendChild(h1);
    var cancelled= json.data.delayIndex.canceledFlights;
    let p = document.createElement("p");;
    p.innerHTML = 'Voli cancellati: ' +cancelled;
    airport.appendChild(p);
    var intime= json.data.delayIndex.onTimeFlights;
    let p1 = document.createElement("p");;
    p1.innerHTML = 'Voli in orario: ' +intime;
    airport.appendChild(p1);

   };


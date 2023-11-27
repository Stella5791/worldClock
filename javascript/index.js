function updateTime() {
  let cordobaElement = document.querySelector("#cordoba");
  if (cordobaElement) {
    let cordobaDateElement = cordobaElement.querySelector(" .date");
    let cordobaTimeElement = cordobaElement.querySelector(" .time");
    let cordobaTime = moment().tz("America/Argentina/Cordoba");

    cordobaDateElement.innerHTML = cordobaTime.format("MMMM Do YYYY");
    cordobaTimeElement.innerHTML = cordobaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(" .date");
    let parisTimeElement = parisElement.querySelector(" .time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

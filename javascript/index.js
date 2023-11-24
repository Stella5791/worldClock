function updateTime() {
  let cordobaElement = document.querySelector("#cordoba");
  let cordobaDateElement = cordobaElement.querySelector(" .date");
  let cordobaTimeElement = cordobaElement.querySelector(" .time");
  let cordobaTime = moment().tz("America/Argentina/Cordoba");
  cordobaDateElement.innerHTML = cordobaTime.format("MMMM Do YYYY");
  cordobaTimeElement.innerHTML = cordobaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(" .date");
  let parisTimeElement = parisElement.querySelector(" .time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

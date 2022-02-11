function updateClock(){
  var now = new Date();
  var day = now.getDay()
  let month = now.getMonth();
  let date = now.getDate();
  let year = now.getFullYear();
  let hour = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  let minute =  now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  let week = now.getDay()
  let period = now.getHours() >= 12 ? "PM" : "AM";
  let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"]
  let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ids = ["dayname", "month","daynum", "year", "hours", "minutes", "seconds", "period"];
  var values = [months[month], weeks[week], date, year, hour, minute, second, period];
  for (i = 0; i < ids.length; i++) document.getElementById(ids[i]).innerHTML = values[i];
}
function initClock(){
  updateClock();
  setInterval(updateClock, 1);
}

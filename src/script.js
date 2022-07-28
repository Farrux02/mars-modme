const weekDay = new Date().getDay();

setInterval(() => {
  const date =
    new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString();
  const dateHtml = document.querySelector(".header-date");
  dateHtml.innerHTML = date;
}, 1000);

const weekDayHtml = document.querySelector(".header-day");

switch (weekDay) {
  case 0:
    weekDayHtml.innerHTML = "Воскресенье: 09:00 - 20:00";
    break;
  case 1:
    weekDayHtml.innerHTML = "Понедельник: 09:00 - 20:00";
    break;
  case 2:
    weekDayHtml.innerHTML = "Вторник: 09:00 - 20:00";
    break;
  case 3:
    weekDayHtml.innerHTML = "Среда: 09:00 - 20:00";
    break;
  case 4:
    weekDayHtml.innerHTML = "Четверг: 09:00 - 20:00";
    break;
  case 5:
    weekDayHtml.innerHTML = "Пятница: 09:00 - 20:00";
    break;
  case 6:
    weekDayHtml.innerHTML = "Суббота: 09:00 - 20:00";
    break;
  default:
    break;
}
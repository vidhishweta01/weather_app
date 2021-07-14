import { content } from './module/dom';
import './styles.css';

content();
// const display = (temp, description, icon) {
  
// }

const sub = document.querySelector('.button');
sub.addEventListener('click', (getData) => {
  getData.preventDefault();
  const city = document.querySelector('input').value;
  console.log(city);
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f4620476b2375660538fec7c9a5a92`;
  fetch(api)
    .then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      const temp  = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      display(temp, description, icon);
      console.log(temp);
      console.log(weather[0].description);
      console.log(weather[0].icon);
    });
});
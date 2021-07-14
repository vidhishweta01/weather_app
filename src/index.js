import { content } from './module/dom';
import './styles.css';

content();

const display = (city, temp, description, icon) => {
  const cityName = document.querySelector('.city-name');
  cityName.textContent = city;
  const temp1 = document.querySelector('.temperature');
  const temprature = document.querySelector('.temperature-degree');
  temprature.innerHTML = temp;
  if (document.querySelector('.temperature-unit').textContent === 'F')
  document.querySelector('.temperature-unit').innerText = 'C';
  const desc = document.querySelector('.temperature-description');
  desc.textContent = description;
  const icons = document.querySelector('.icon');
  icons.src = `http://openweathermap.org/img/w/${icon}.png`;
  temp1.addEventListener('click', () => {
    const t = parseInt(document.querySelector('.temperature-degree').innerText);
    if (document.querySelector('.temperature-unit').textContent === 'C') {
      document.querySelector('.temperature-unit').innerText = 'F';
      let t1 = (t * 9 / 5) + 32;
      t1 = Math.floor(t1);
      document.querySelector('.temperature-degree').innerText = t1.toString();
    } else if (document.querySelector('.temperature-unit').textContent === 'F') {
      document.querySelector('.temperature-unit').innerText = 'C';
      let t1 = (t - 32) * 5 / 9;
      t1 = Math.floor(t1);
      document.querySelector('.temperature-degree').innerText = t1.toString();
    }

  });
} 

const sub = document.querySelector('.button');
sub.addEventListener('click', (getData) => {
  getData.preventDefault();
  const city = document.querySelector('input').value;
  if (city !== '') {
    //const proxy = `https://cors-anywhere.herokuapp.com/`;
    const wheatherReport = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97f4620476b2375660538fec7c9a5a92`;
    fetch(wheatherReport)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const temp = data.main.temp;
        let t = parseInt(temp) - 273;
        t = t.toString();
        const description = data.weather[0].description; // eslint-disable-line
        const icon = data.weather[0].icon; // eslint-disable-line
        display(city, t, description, icon);
      });
  }
});
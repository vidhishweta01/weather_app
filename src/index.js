import content from './module/dom';
import './styles.css';
import { mypi } from './config'; // eslint-disable-line

content();

const display = (city, temp, description, icon) => {
  const cityName = document.querySelector('.city-name');
  cityName.textContent = city;
  const temp1 = document.querySelector('.temperature');
  const temprature = document.querySelector('.temperature-degree');
  temprature.innerHTML = temp;
  if (document.querySelector('.temperature-unit').textContent === 'F') document.querySelector('.temperature-unit').innerText = 'C';
  const desc = document.querySelector('.temperature-description');
  desc.textContent = description;
  const icons = document.querySelector('.icon');
  icons.src = `http://openweathermap.org/img/w/${icon}.png`;
  temp1.addEventListener('click', () => {
    const t = parseInt(document.querySelector('.temperature-degree').innerText); // eslint-disable-line
    if (document.querySelector('.temperature-unit').textContent === 'C') {
      document.querySelector('.temperature-unit').innerText = 'F';
      let t1 = (t * (9 / 5)) + 32;
      t1 = Math.floor(t1);
      document.querySelector('.temperature-degree').innerText = t1.toString();
    } else if (document.querySelector('.temperature-unit').textContent === 'F') {
      document.querySelector('.temperature-unit').innerText = 'C';
      let t1 = ((t - 32) * 5) / 9;
      t1 = Math.floor(t1);
      document.querySelector('.temperature-degree').innerText = t1.toString();
    }
  });
};

const cross = () => {
  document.getElementById('id01').style.display = 'none';
  location.reload();
};

async function Getdata(getData) {
  getData.preventDefault();
  const element = document.getElementById('id01');
  const sp = document.querySelector('.cross');
  const city = document.querySelector('input').value;
  if (city === '') {
    element.style.display = 'block';
    sp.addEventListener('click', cross);
  } else {
    const wheatherReport = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mypi}`;
    const res = await fetch(wheatherReport);
    if (!res.ok) {
      element.style.display = 'block';
      sp.addEventListener('click', cross);
    } else {
      fetch(wheatherReport)
      /* eslint-disable */
      .then(response => { return response.json(); })
        .then(data => {
          console.log(data);
        const temp = data.main.temp;
        let t = parseInt(temp) - 273;
        t = t.toString();
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        display(city, t, description, icon);
      });
    /* eslint-enable */
    }
  }
}

const sub = document.querySelector('.button');
sub.addEventListener('click', Getdata);
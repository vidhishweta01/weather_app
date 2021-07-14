const content = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'location');
  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'location-timezone');
  h1.innerHTML = 'City';
  const div1 = document.createElement('div');
  const i = document.createElement('input');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'city-name');
  i.setAttribute('id', '101');
  const button = document.createElement('button');
  button.setAttribute('class', 'button');
  button.innerHTML = 'Submit';
  div1.append(i, button);
  div.append(h1, div1);
  const city = document.createElement('h2');
  city.setAttribute('class', 'city-name');
  const div2 = document.createElement('div');
  div2.setAttribute('class', 'temperature');
  const div3 = document.createElement('div');
  div3.setAttribute('class', 'degree-section');
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'temperature-degree');
  const span = document.createElement('span');
  span.setAttribute('class', 'temperature-unit');
  span.innerText = 'C';
  const p = document.createElement('img');
  p.setAttribute('class', 'icon');
  div3.append(h2, span);
  const div4 = document.createElement('div');
  div4.setAttribute('class', 'temperature-description');
  div2.append(city, div3, p, div4);
  document.body.append(div, div2);
}

export { content };
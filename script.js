const content = document.getElementById('content');

function getD() {
  content.innerHTML = '';
  const lat = document.getElementById('lat').value;
  const long = document.getElementById('long').value;
  fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
  .then(res => res.json())
  .then(d => {
    const sunrise = document.createElement('p');
    const sunset = document.createElement('p');
    const solar_noon = document.createElement('p');
    const day_length = document.createElement('p');
    const civil_twilight_begin = document.createElement('p');
    const civil_twilight_end = document.createElement('p');
    const nautical_twilight_begin = document.createElement('p');
    const nautical_twilight_end = document.createElement('p');
    const astronomical_twilight_begin = document.createElement('p');
    const astronomical_twilight_end  = document.createElement('p');

    sunrise.innerHTML = 'sunrise :' + d.results.sunrise;
    sunset.innerHTML = 'sunset :' + d.results.sunset;
    solar_noon.innerHTML = 'solar noon :' + d.results.solar_noon;
    day_length.innerHTML = 'day length :' + d.results.day_length;
    civil_twilight_begin.innerHTML = 'civil twilight begin :' + d.results.civil_twilight_begin;
    civil_twilight_end.innerHTML = 'civil twilight end :' + d.results.civil_twilight_end;
    nautical_twilight_begin.innerHTML = 'nutical twilight begin :' + d.results.nautical_twilight_begin;
    nautical_twilight_end.innerHTML = 'nautical twilight end :' + d.results.nautical_twilight_end;
    astronomical_twilight_begin.innerHTML = 'astronomical twilight begin :' + d.results.astronomical_twilight_end;
    astronomical_twilight_end.innerHTML = 'astronomical twilight end :' + d.results.astronomical_twilight_end;

    
    content.append(sunrise, sunset, solar_noon, day_length, civil_twilight_begin, civil_twilight_end, nautical_twilight_begin, nautical_twilight_end, astronomical_twilight_begin, astronomical_twilight_end)
  });
}
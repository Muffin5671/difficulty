async function calculateSearch(query) {

  // default values

  var select = 0;
  var na = 0;
  var auto = 0;
  var easy = 0;
  var normal = 0;
  var hard = 0;
  var harder = 0;
  var insane = 0;
  var easyDemon = 0;
  var mediumDemon = 0;
  var hardDemon = 0;
  var insaneDemon = 0;
  var extremeDemon = 0;
  var demon = 0;

  // fetch levels from API

  let isUserSearch = Boolean(Number(new URLSearchParams(window.location.search).get('user')));

  let url;
  if (isUserSearch) {
    url = `https://gdbrowser.com/api/search/${query}?user`;
  } else {
    url = `https://gdbrowser.com/api/search/${query}`;
  }

  let data = await fetch(url);
  let response = await data.json();

  // count levels of each difficulty

  for (null; select < response.length; select++) {
    switch (response[select].difficulty) {
      case 'Unrated':
        na++;
        break;
      case 'Auto':
        auto++;
        break;
      case 'Easy':
        easy++;
        break;
      case 'Normal':
        normal++;
        break;
      case 'Hard':
        hard++;
        break;
      case 'Harder':
        harder++;
        break;
      case 'Insane':
        insane++;
        break;
      case 'Easy Demon':
        easyDemon++;
        demon++;
        break;
      case 'Medium Demon':
        mediumDemon++;
        demon++;
        break;
      case 'Hard Demon':
        hardDemon++;
        demon++;
        break;
      case 'Insane Demon':
        insaneDemon++;
        demon++;
        break;
      case 'Extreme Demon':
        extremeDemon++;
        demon++;
        break;
    }
  }

  // calculate by percentage

  return {
    'na': na / response.length * 100 + '%', 
    'auto': auto / response.length * 100 + '%', 
    'easy': easy / response.length * 100 + '%', 
    'normal': normal / response.length * 100 + '%', 
    'hard': hard / response.length * 100 + '%', 
    'harder': harder / response.length * 100 + '%', 
    'insane': insane / response.length * 100 + '%',
    'easyDemon': easyDemon / response.length * 100 + '%',
    'mediumDemon': mediumDemon / response.length * 100 + '%',
    'hardDemon': hardDemon / response.length * 100 + '%',
    'insaneDemon': insaneDemon / response.length * 100 + '%',
    'extremeDemon': extremeDemon / response.length * 100 + '%',
    'demon': demon / response.length * 100 + '%'
  };
}

async function calculatePage() {

  // get search query
  
  let query = new URLSearchParams(window.location.search).get('query');
  let calculation;
  try {
    if (query == '' || query == null) {
      calculation = await calculateSearch('*');
    } else {
      calculation = await calculateSearch(encodeURI(query));
    }
  } catch (error) {
    document.getElementById('title').innerHTML = 'No Levels';
    document.getElementsByClassName('diffPercent')[0].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[1].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[2].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[3].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[4].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[5].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[6].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[7].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[8].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[9].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[10].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[11].innerHTML = '0%';
    document.getElementsByClassName('diffPercent')[12].innerHTML = '0%';
  }

  // page editing (extremely inconvenient setup)
  
  document.getElementById('title').innerHTML = decodeURI(query);
  document.getElementsByClassName('diffPercent')[0].innerHTML = calculation.na;
  document.getElementsByClassName('diffPercent')[1].innerHTML = calculation.auto;
  document.getElementsByClassName('diffPercent')[2].innerHTML = calculation.easy;
  document.getElementsByClassName('diffPercent')[3].innerHTML = calculation.normal;
  document.getElementsByClassName('diffPercent')[4].innerHTML = calculation.hard;
  document.getElementsByClassName('diffPercent')[5].innerHTML = calculation.harder;
  document.getElementsByClassName('diffPercent')[6].innerHTML = calculation.insane;
  document.getElementsByClassName('diffPercent')[7].innerHTML = calculation.easyDemon;
  document.getElementsByClassName('diffPercent')[8].innerHTML = calculation.mediumDemon;
  document.getElementsByClassName('diffPercent')[9].innerHTML = calculation.hardDemon;
  document.getElementsByClassName('diffPercent')[10].innerHTML = calculation.insaneDemon;
  document.getElementsByClassName('diffPercent')[11].innerHTML = calculation.extremeDemon;
  document.getElementsByClassName('diffPercent')[12].innerHTML = calculation.demon;
  
}

window.onload = calculatePage();

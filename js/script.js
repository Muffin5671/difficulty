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

  let data = await fetch(`https://gdbrowser.com/api/search/${query}`);
  let response = await data.json();

  // count levels of each difficulty

  for (null; select < response.length; select++) {
    if (response[select].difficulty == 'Unrated') {
      na++
    } else if (response[select].difficulty == 'Auto') {
      auto++
    } else if (response[select].difficulty == 'Easy') {
      easy++
    } else if (response[select].difficulty == 'Normal') {
      normal++
    } else if (response[select].difficulty == 'Hard') {
      hard++
    } else if (response[select].difficulty == 'Harder') {
      harder++
    } else if (response[select].difficulty == 'Insane') {
      insane++
    } else if (response[select].difficulty == 'Easy Demon') {
      easyDemon++
      demon++
    } else if (response[select].difficulty == 'Medium Demon') {
      mediumDemon++
      demon++
    } else if (response[select].difficulty == 'Hard Demon') {
      hardDemon++
      demon++
    } else if (response[select].difficulty == 'Insane Demon') {
      insaneDemon++
      demon++
    } else if (response[select].difficulty == 'Extreme Demon') {
      extremeDemon++
      demon++
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
    document.getElementById('title').innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[0].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[1].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[2].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[3].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[4].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[5].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[6].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[7].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[8].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[9].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[10].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[11].innerHTML = 'Error';
    document.getElementsByClassName('diffPercent')[12].innerHTML = 'Error';
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

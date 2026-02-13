async function calculateSearch(query) {

  // default values

  var select = 0;
  var na = 0;
  var easy = 0;
  var normal = 0;
  var hard = 0;
  var harder = 0;
  var insane = 0;
  var demon = 0;
  var auto = 0;

  // get levels from API

  let data = await fetch(`https://gdbrowser.com/api/search/${query}`);
  let response = await data.json();

  // difficulty check

  for (null; select < response.length; select++) {
    if (response[select].difficulty == 'Unrated') {
      na++
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
    }
  }

  // calculate by percentage

  return {
    'na': Math.round(na / response.length * 100) + '%', 
    'easy': Math.round(easy / response.length * 100) + '%', 
    'normal': Math.round(normal / response.length * 100) + '%', 
    'hard': Math.round(hard / response.length * 100) + '%', 
    'harder': Math.round(harder / response.length * 100) + '%', 
    'insane': Math.round(insane / response.length * 100) + '%'
  };  
}

async function calculatePage() {
  let query = new URLSearchParams(window.location.search).get('query');
  if (query == '') {
    let calculation = await calculateSearch('*'));
  } else {
    let calculation = await calculateSearch(encodeURI(query));
  }
  document.getElementsByClassName('diffPercent')[0].innerHTML = calculation.easy;
  document.getElementsByClassName('diffPercent')[1].innerHTML = calculation.normal;
  document.getElementsByClassName('diffPercent')[2].innerHTML = calculation.hard;
  document.getElementsByClassName('diffPercent')[3].innerHTML = calculation.harder;
  document.getElementsByClassName('diffPercent')[4].innerHTML = calculation.insane;

  // Demon calculations are... Coming Soon™
}

window.onload = calculatePage();

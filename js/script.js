async function calculateSearch(query) {

  // start timer
  
  console.time('Calculation time');

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

  // end timer

  console.info('Finished calculating');
  console.timeEnd('Calculation time');
  
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
  }

  // page editing

  document.getElementById('title').innerHTML = decodeURI(query);
  document.getElementsByClassName('diffPercent')[0].innerHTML = calculation.easy;
  document.getElementsByClassName('diffPercent')[1].innerHTML = calculation.normal;
  document.getElementsByClassName('diffPercent')[2].innerHTML = calculation.hard;
  document.getElementsByClassName('diffPercent')[3].innerHTML = calculation.harder;
  document.getElementsByClassName('diffPercent')[4].innerHTML = calculation.insane;
  document.getElementsByClassName('diffPercent')[5].innerHTML = calculation.na;

  // Demon calculations are... Coming Soon™
  
}

window.onload = calculatePage();

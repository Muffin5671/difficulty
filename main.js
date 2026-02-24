var ratedFilterEnabled = false;

function searchLevels() {
  let query = encodeURI(document.getElementById('searchBar').value);
  if (ratedFilterEnabled) {
    window.location.href = `search/?query=${query}&star=${Number(ratedFilterEnabled)}`;
  } else {
    window.location.href = `search/?query=${query}`;
  }
}

function searchUsers() {
  let query = encodeURI(document.getElementById('searchBar').value);
  if (!(query == '')) {
    window.location.href = `search/?query=${query}&user=1`;
  }
}

function toggleRated() {
  if (ratedFilterEnabled == false) {
    ratedFilterEnabled = true;
    document.getElementById('ratedLVLSButton').style.filter = '';
    document.getElementById('ratedLVLSButton').title = 'Rated Levels [ON]'
  } else {
    ratedFilterEnabled = false;
    document.getElementById('ratedLVLSButton').style.filter = 'grayscale(1)';
    document.getElementById('ratedLVLSButton').title = 'Rated Levels [OFF]'
  }
}

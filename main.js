var ratedFilterEnabled = false;

function searchLevels() {
  let query = encodeURI(document.getElementById('searchBar').value);
  if (ratedFilterEnabled) {
    window.location.href = `search/?query=${query}&star=${ratedFilterEnabled}`;
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
  } else {
    ratedFilterEnabled = false;
  }
}

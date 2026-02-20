function searchLevels() {
  let query = encodeURI(document.getElementById('searchBar').value);
  window.location.href = `search/?query=${query}`;
}

function searchUsers() {
  let query = encodeURI(document.getElementById('searchBar').value);
  if (!(query == '')) {
    window.location.href = `search/?query=${query}&user=1`;
  } else {
    console.warn('You cannot search for users without a search value.');
  }
}

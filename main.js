function searchLevels() {
  let query = encodeURI(document.getElementById('searchBar').value);
  window.location.href = `search/?query=${query}`;
}

function searchUsers() {
  let query = encodeURI(document.getElementById('searchBar').value);
  window.location.href = `search/?query=${query}&user=true`;
}

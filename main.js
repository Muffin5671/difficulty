function searchLevels() {
  let query = encodeURI(document.getElementById('searchBar').value);
  window.location.href = `search/?query=${query}`;
}

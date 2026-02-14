function searchLevels() {
  let query = encodeURI(document.getElementById('searchBar').value);
  window.location.pathname = `/difficulty/search?${query}`;
}

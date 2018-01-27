var playlist = { key: "value" };

function updatePlaylist (object, key, value) {
 object[key] = value
  return playlist
}

function removeFromPlaylist (object, key) {
  delete object[key]
  return playlist
}
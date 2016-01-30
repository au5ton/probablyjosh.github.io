var songResponse = get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jshtrmml&api_key=0a7d3b25ed857f679eba1a353e98a658&format=json', false)
var artistsResponse = get('http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=jshtrmml&period=1month&api_key=0a7d3b25ed857f679eba1a353e98a658&format=json', false)
var song = JSON.parse(songResponse)
var artists = JSON.parse(artistsResponse)

var artistNames = []
for (var i = 0; i < 3; i++) {
	// push the top two artists to artistNames
	artistNames.push(artists.topartists.artist[i].name)
}

function get(url, trakt) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false)
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

var formattedNowPlaying = "I'm currently listening to <i>" + song['recenttracks']['track'][0]['name'] + "</i> by <i>" + song['recenttracks']['track'][0]['artist']['#text'] + '</i>.';
var artists = "Recently, I've really been into <i>" + artistNames[0] + '</i> and <i>' + artistNames[1] + '.</i>';
document.getElementById('now-playing').innerHTML = formattedNowPlaying
document.getElementById('artists').innerHTML = artists

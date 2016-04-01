var songResponse = get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jshtrmml&api_key=0a7d3b25ed857f679eba1a353e98a658&format=json')
var artistsResponse = get('http://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=jshtrmml&period=7day&limit=5&api_key=0a7d3b25ed857f679eba1a353e98a658&format=json')
var instagramResponse = get('https://public-insta-api.herokuapp.com/joshtrommel/latest')
var githubResponse = get('https://api.github.com/users/trmml/repos?sort=pushed&type=all')
var song = JSON.parse(songResponse)
var artists = JSON.parse(artistsResponse)
var igPhotos = JSON.parse(instagramResponse)
var repos = JSON.parse(githubResponse)

var artistNames = []
for (var i = 0; i < 3; i++) {
	// push the top two artists to artistNames (might change this later for more artists)
	artistNames.push(artists.topartists.artist[i].name)
}

var photos = []
for (var i = 0; i < 3; i++) {
	photos.push(igPhotos['items'][i])
}

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false)
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function generatePhoto(name, index) {
	document.getElementById(name + '-photo').innerHTML = "<a href=\"" + photos[index]['link'] + "\"><img src=\"" + photos[index]['images']['standard_resolution']['url'] + "\"</img></a>"
	// document.getElementById(name + '-photo-caption').innerHTML = photos[index]['location']['name'] + " – &hearts; " + photos[index]['likes']['count'];
}

var nowPlaying = "Hi, I'm Josh, and I'm listening to <a href=\"" + song['recenttracks']['track'][0]['url'] + "\">" + song['recenttracks']['track'][0]['name'] + "</a> by " + song['recenttracks']['track'][0]['artist']['#text'] + '.';
var artists = "Lately, " + artistNames[0] + ' & ' + artistNames[1] + ' have been my favourite artists.';
var gh = " Recently, I've been working on <a href=\"" + repos[0]['owner']['url'] + "\">" + repos[0]['name'] + "</a> and <a href=\"" + repos[1]['owner']['url'] + "\">" + repos[1]['name'] + "</a>."
document.getElementById('github').innerHTML = gh;
document.getElementById('intro').innerHTML = nowPlaying;
document.getElementById('artists').innerHTML = artists;

var indexWords = ['first', 'second', 'third'];
for (var i = 0; i < indexWords.length; i++) {
	generatePhoto(indexWords[i], i)
}

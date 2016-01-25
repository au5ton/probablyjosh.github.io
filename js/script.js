var ghResponse = get('https://api.github.com/users/trmml/repos?sort=pushed')
var lastfmResponse = get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jshtrmml&api_key=0a7d3b25ed857f679eba1a353e98a658&format=json')
var svbtleReponse = get('https://svbtle-api.herokuapp.com/nulljosh/latest/2')
var repos = JSON.parse(ghResponse).slice(0, 2)
var song = JSON.parse(lastfmResponse)
var posts = JSON.parse(svbtleReponse)

function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function addGH(id, index) {
	document.getElementById(id).innerHTML  = '<a href="' + repos[index].html_url + '">'+ repos[index].name + '</a>'
}

addGH('first-repo', 0)
addGH('second-repo', 1)

document.getElementById('first-post').innerHTML = '<a href="' +  posts[0]['url'] + '"> ' + posts[0]['title'] + '</a>';
document.getElementById('now-playing').innerHTML = song['recenttracks']['track'][0]['name'];
document.getElementById('artist').innerHTML = song['recenttracks']['track'][0]['artist']['#text'];

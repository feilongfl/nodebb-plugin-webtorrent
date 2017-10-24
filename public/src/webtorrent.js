var trackerList = [
	//tracker for test
	"http://10.5.199.42:24736",
	"udp://10.5.199.42:24736",
	"ws://10.5.199.42:24736",
	//default tracker
	'udp://tracker.openbittorrent.com:80',
	'udp://tracker.leechers-paradise.org:6969',
	'udp://tracker.coppersurfer.tk:6969',
	'udp://tracker.opentrackr.org:1337',
	'udp://explodie.org:6969',
	'udp://zer0day.ch:1337',
	'wss://tracker.btorrent.xyz',
	'wss://tracker.openwebtorrent.com',
	'wss://tracker.fastcast.nz'
];

function fixTorrent(magnetUrl)
{
	var magnetHash = magnetUrl.match(/btih:(\w+)/)[1];
	var magnetName = magnetUrl.match(/dn=([^&]+)/)[1];
	var magnetNameDecode = decodeURIComponent(magnetName);
	var magnetTracker = encodeURIComponent(trackerList.join('&tr=')).replace(/%26/g,'&').replace(/%3D/g,'=');

	return ['magnet:?xt=urn:btih:' + magnetHash +
	'&dn=' + magnetName +
	'&tr=' + magnetTracker,
		magnetNameDecode];
}
var client ;
function nodebbwebtorrentload() {
	client = new WebTorrent();
	var webtorrentdivs = $(".nodebb-webtorrent");
	for (var i = 0; i < 1; i++) {
		webtorrentdiv = webtorrentdivs[i];
		torrentId = fixTorrent(webtorrentdiv.innerHTML)[0];

		webtorrentdiv.innerHTML = '<p>' +
			'<div class="nodebb-webtorrent-name">' +
			fixTorrent(webtorrentdiv.innerHTML)[1] +
			'</div>' +
			'<div class="nodebb-webtorrent-magnet">' +
			'<a src="' + fixTorrent(webtorrentdiv.innerHTML)[0] + '">' +
			fixTorrent(webtorrentdiv.innerHTML)[0] +
			'</a></div>' +
			'<div class="nodebb-webtorrent-webplayer" id="nodebb-webtorrent-webplayer-' + i + '"></div>' +
			'</p>';


		client.add(torrentId, function (torrent) {
			// Torrents can contain many files. Let's use the .mp4 file
			var file = torrent.files.find(function (file) {
				return file.name.endsWith('.mp4');
			});
			// console.log(i);
			// Display the file by adding it to the DOM.
			// Supports video, audio, image files, and more!
			// var d = '#nodebb-webtorrent-webplayer-0';
			// console.log(d);
			file.appendTo('#nodebb-webtorrent-webplayer-0');
		})
	}
}

$.getScript("https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js",nodebbwebtorrentload);
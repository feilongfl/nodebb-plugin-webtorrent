
"use strict";

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
	// var magnetOriTracker = magnetUrl.match(/&tr=([^&]+)/g);
	var magnetNameDecode = decodeURIComponent(magnetName);
	var magnetTracker = encodeURIComponent(trackerList.join('&tr=')).replace(/%26/g,'&').replace(/%3D/g,'=');

	return ['magnet:?xt=urn:btih:' + magnetHash +
	'&dn=' + magnetName +
	magnetUrl.replace(/&amp;/g,'&').match(/&tr=([^&]+)/g).join('') + //这里缺个除重
	'&tr=' + magnetTracker,
		magnetNameDecode];
}

var wtclient;
var run = false;
var file;

//reset torrent listener
$(window).on('action:ajaxify.start', function(data) {
	require(['https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js'], function (WebTorrent) {
		wtclient = new WebTorrent();
	});
	run = false;
});

function nodebbwebtorrentload() {
	// wtclient = new WebTorrent();
	if(run)
		return;

	run = true;
	// $("#nodebb-webtorrent-loadbtn").innerText = 'Loading';
	$("#nodebb-webtorrent-loadbtn")[0].textContent = 'Loading';
	var webtorrentdivs = $(".nodebb-webtorrent");
	var webtorrentdiv = webtorrentdivs[0];
	var torrentId = fixTorrent(webtorrentdiv.innerHTML)[0];

	webtorrentdiv.innerHTML = '<p>' +
		'<div class="nodebb-webtorrent-form">' +
		'<h2 class="nodebb-webtorrent-name">' +
		fixTorrent(webtorrentdiv.innerHTML)[1] +
		'</h2>' +
		'<div class="nodebb-webtorrent-magnet">' +
		'<a href="' + torrentId + '">' +
		'<button class="btn btn-default">Download Magnet</button>' +
		'</a>' +
		'</div>' +
		'<div class="nodebb-webtorrent-webplayer" id="nodebb-webtorrent-webplayer-0"></div>' +
		'</div>' +
		'</p>';

	console.log(torrentId);

	require(['https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js'], function (WebTorrent) {
		wtclient = new WebTorrent();

		wtclient.add(torrentId, function (torrent) {
			// Torrents can contain many files. Let's use the .mp4 file
			file = torrent.files.find(function (file) {
				return file.name.endsWith('.mp4');
			});

			$(".nodebb-webtorrent-buttons").hide();
			$(".nodebb-webtorrent")[0].hidden = false;

			file.appendTo('#nodebb-webtorrent-webplayer-0');
		})
	});

}

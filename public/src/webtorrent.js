
"use strict";

var trackerList = [
/*
	//tracker for test
	"http://10.5.199.42:24736",
	"udp://10.5.199.42:24736",
	"ws://10.5.199.42:24736",
	*/
	
	
	//cauc bb trackers
'http://tracker6.cauc.pw/announce',
'ws://tracker6.cauc.pw',

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
/*
	//tracker from mikanani
	'udp://104.238.198.186:8000/announce' ,
	'http://mgtracker.org:2710/announce' ,
	'http://104.238.198.186:8000/announce' ,
	'http://tracker.kamigami.org:2710/announce' ,
	'http://open.acgtracker.com:1096/announce' ,
	'http://opentracker.acgnx.se/announce' ,
	'https://opentracker.acgnx.se/announce' ,
	'http://opentracker.acgnx.com:6869/announce' ,
	'udp://tracker.opentrackr.org:1337/announce' ,
	'udp://tracker.opentrackr.org:1337/announce' ,
	'udp://tracker.coppersurfer.tk:6969/announce' ,
	'udp://tracker.leechers-paradise.org:6969/announce' ,
	'https://tr.bangumi.moe:9696/announce' ,
	'http://tr.bangumi.moe:6969/announce' ,
	'udp://tr.bangumi.moe:6969/announce' ,
	'http://t.acg.rip:6699/announce' ,
	'http://share.camoe.cn:8080/announce' ,
	'udp://tracker.doko.moe:6969/announce' ,
	'http://tracker.tfile.me/announce' ,
	'http://tracker1.itzmx.com:8080/announce' ,
	'http://tracker2.itzmx.com:6961/announce' ,
	'http://tracker3.itzmx.com:6961/announce' ,
	'http://tracker4.itzmx.com:2710/announce' ,
	'http://t.nyaatracker.com/announce' ,
	'udp://tracker.tiny-vps.com:6969/announce' ,
	'http://torrentsmd.com:8080/announce' ,
	'udp://9.rarbg.com:2710/announce' ,
	'udp://tracker.pirateparty.gr:6969/announce' ,
	'http://explodie.org:6969/announce' ,
	'http://p4p.arenabg.com:1337/announce' ,
	'udp://p4p.arenabg.com:1337/announce' ,
	'udp://tracker.internetwarriors.net:1337/announce' ,
	'udp://tracker.piratepublic.com:1337/announce' ,
	'udp://tracker.zer0day.to:1337/announce' ,
	'udp://tracker.mg64.net:6969/announce' ,
	'http://tracker.mg64.net:6881/announce' ,
	'udp://ipv4.tracker.harry.lu:80/announce' ,
	'http://ipv4.tracker.harry.lu/announce' ,
	'udp://tracker.vanitycore.co:6969/announce' ,
	'http://tracker.torrentyorg.pl/announce' ,
	'http://tracker.devil-torrents.pl/announce' ,
	'http://grifon.info/announce' ,
	'http://bt.artvid.ru:6969/announce' ,
	'http://tracker.vanitycore.co:6969/announce' ,
	'udp://tracker.grepler.com:6969/announce' ,
	'http://retracker.telecom.by/announce' ,
	'http://retracker.mgts.by/announce' ,
	'http://tracker1.wasabii.com.tw:6969/announce' ,
	'http://tracker.grepler.com:6969/announce' ,
	'http://tracker.electro-torrent.pl/announce' ,
	'http://tracker.tlm-project.org:6969/announce' ,
	'http://tracker2.wasabii.com.tw:6969/announce' ,
	'udp://retracker.lanta-net.ru:2710/announce' ,
	'udp://public.popcorn-tracker.org:6969/announce' ,
	'http://agusiq-torrents.pl:6969/announce' ,
	'udp://tracker.filetracker.pl:8089/announce' ,
	'http://tracker.filetracker.pl:8089/announce' ,
	'udp://peerfect.org:6969/announce' ,
	'http://91.218.230.81:6969/announce' ,
	'udp://tracker.kuroy.me:5944/announce' ,
	'http://tracker.kuroy.me:5944/announce' ,
	'udp://tracker.halfchub.club:6969/announce' ,
	'udp://z.crazyhd.com:2710/announce' ,
	'udp://tracker.swateam.org.uk:2710/announce' ,
	'udp://tracker.christianbro.pw:6969/announce' ,
	'udp://oscar.reyesleon.xyz:6969/announce' ,
	'udp://open.facedatabg.net:6969/announce' ,
	'udp://tracker.files.fm:6969/announce' ,
	'udp://tracker.cyberia.is:6969/announce' ,
	'udp://thetracker.org:80/announce' ,
	'http://tracker.sktorrent.net:6969/announce' ,
	'http://retracker.omsk.ru:2710/announce' ,
	'udp://tracker.openbittorrent.com:80/announce' ,
	'udp://tracker.publicbt.com:80/announce' ,
	'udp://tracker.prq.to:80/announce' ,
	'http://104.238.198.186:8000/announce' ,
	'http://94.228.192.98/announce' ,
	'http://share.dmhy.org/annonuce' ,
	'http://tracker.btcake.com/announce' ,
	'http://tracker.ktxp.com:6868/announce' ,
	'http://tracker.ktxp.com:7070/announce' ,
	'http://bt.sc-ol.com:2710/announce' ,
	'http://open.acgtracker.com:1096/announce' ,
	'http://btfile.sdo.com:6961/announce' ,
	'https://t-115.rhcloud.com/only_for_ylbud' ,
	'http://exodus.desync.com:6969/announce' ,
	'udp://coppersurfer.tk:6969/announce' ,
	'http://tracker3.torrentino.com/announce' ,
	'http://tracker2.torrentino.com/announce' ,
	'udp://open.demonii.com:1337/announce' ,
	'udp://tracker.ex.ua:80/announce' ,
	'http://pubt.net:2710/announce' ,
	'http://bigfoot1942.sektori.org:6969/announce' ,
	'udp://bt.sc-ol.com:2710/announce'
	*/
];

function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';
    var k = 1000, // or 1024
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
 
   return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}

function showinfo()
{
	$(".nodebb-webtorrent-info")[0].innerHTML = 'progress ' + (wtclient.progress * 100).toFixed(2) +
	 '% ↓ ' + bytesToSize(wtclient.downloadSpeed) + 
	 ' ↑ ' + bytesToSize(wtclient.uploadSpeed);
	 setTimeout(showinfo,100);
}

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
		'<h3 class="nodebb-webtorrent-info"></h3>' +
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

		showinfo();

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

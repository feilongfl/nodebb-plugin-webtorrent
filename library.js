(function(webtorrent) {
	"use strict";

	var converts = [
		{ // Video
			from: /<a href="(magnet.*)">(.+)<\/a>/g,
			to: '<div class="nodebb-webtorrent-buttons">' +
			'<button class="btn btn-default" id="nodebb-webtorrent-loadbtn" onclick="nodebbwebtorrentload()">Load in Browser.</button>' +
			'<a href="$2"><button class="btn btn-default" onclick="nodebbwebtorrentload()">Download Magnet.</button></a>' +
			'</div>' +
			'<div class="nodebb-webtorrent" hidden>$2</div>'
		}
	];

	webtorrent.parse = function(data, callback) {
		//console.log(data.postData.content);
		//var magnetUrl;
		try {
			for(var i = 0; i < converts.length; i++) {
				data.postData.content = data.postData.content.replace(converts[i].from, converts[i].to);
			}
			callback(null, data);
		} catch(ex) {
			callback(ex, data);
		}
	};

	webtorrent.addScripts = function (scripts, callback){
		//console.log("o.o...");
		scripts.push('/assets/src/webtorrent.js');

		callback(null,scripts);
	}
})(module.exports);
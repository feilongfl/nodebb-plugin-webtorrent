(function(webtorrent) {
	"use strict";
	var converts = [
		{ // Video
			from: /<a href="(magnet.*)">(.+)<\/a>/g,
			to: '$2'
		}
	];

	webtorrent.run(torrentId)
	{
		var WebTorrent = require('webtorrent');
		var client = new WebTorrent();

		client.add(torrentId, function (torrent) {
			// Torrents can contain many files. Let's use the .mp4 file
			var file = torrent.files.find(function (file) {
				return file.name.endsWith('.mp4')
			});

			// Display the file by adding it to the DOM.
			// Supports video, audio, image files, and more!
			file.appendTo('body');
		});
	}

	webtorrent.parse = function(data, callback) {
		//console.log(data.postData.content);
		//var magnetUrl;
		try {
			for(var i = 0; i < converts.length; i++) {
				var magnetUrl = data.postData.content.replace(converts[i].from, converts[i].to);
				console.log(magnetUrl);
			}
			callback(null, data);
		} catch(ex) {
			callback(ex, data);
		}
	};

	webtorrent.addScripts = function (scripts, callback){
		//console.log("o.o...");
		scripts.push('/assets/src/bilibili.js');
		callback(null,scripts);
	}
})(module.exports);
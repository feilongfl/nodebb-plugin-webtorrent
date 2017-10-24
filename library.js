(function(webtorrent) {
	"use strict";

	var converts = [
		{ // Video
			from: /<a href="(magnet.*)">(.+)<\/a>/g,
			to: '<div><button class="btn btn-default" onclick="nodebbwebtorrentload">Load in Browser.</button></div>' +
			'<div class="nodebb-webtorrent">$2</div>'
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
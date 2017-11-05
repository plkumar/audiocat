var audiosprite = require('audiosprite')

var files = [
    __dirname + '/wav/vaisakhamum.wav',
    __dirname + "/wav/suklapakshamu.wav",
    //__dirname + "/wav/thithi.wav",
    __dirname + "/wav/paurnami.wav",
    //__dirname + "/wav/025sblank.wav",
    __dirname + "/wav/swathi.wav"
];

console.log(files)

var opts = { output: './test', export: "mp3", gap: 0.0 }

audiosprite(files, opts, function(err, obj) {
    if (err) return console.error(err)

    console.log(JSON.stringify(obj, null, 2))
})
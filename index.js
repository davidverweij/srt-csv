let fs = require('fs');
let parser = require('subtitles-parser');
let converter = require('json-2-csv');

/*
Use the subtitles-parser to get a JSON object
*/

let srt = fs.readFileSync(process.argv[2],"utf8");
let data = parser.fromSrt(srt);

/*
Use this bit below to adjust the csv markup as you like (or needed)
*/

data.forEach(function(obj){
  delete obj.id;        // we don't need the id
  obj.startTime = obj.startTime.replace(",",".");
  obj.endTime = obj.endTime.replace(",",".");
});

/*
Use tghe json-2-csv to get to a csv.
*/

let json2csvCallback = function (err, csv) {
  if (err) throw err;
  fs.writeFile(process.argv[2].replace('srt','csv'), csv, 'utf8', function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved at!" + process.argv[2].replace('srt','csv'));
  });
  //console.log(csv);
};

converter.json2csv(data, json2csvCallback);

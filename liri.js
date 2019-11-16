require("dotenv").config();
var keys = require("./keys.js");
var inq = require("inquirer");
var ax = require("axios");
var fs = require("fs");
var moment = require("moment");
const Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var val = "";
var ind = process.argv;

for (let i = 3; i < ind.length; i++) {
    if (i > 3 && i < ind.length) {
        val = val + "+" + ind[i];
    } else val += ind[i];
}

if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) { console.log("error: " + error) } else //console.log(data);
            var data = data.split(" ");
        command = data[0];
        for (let i = 1; i < data.length; i++) {
            val += data[i] + " ";
        };
        idk(command, val);
    });

} else idk(command);

//////-----------------------------------------------------------------------/
function idk(command) {

    if (command === "concert-this") {
        var key = "MTk0NjQzMjN8MTU3Mzc2MjY4Ni45OA";
        var queryUrlB = "https://api.seatgeek.com/2/events?client_id=" + key + "&q=" + val;
        ax.get(queryUrlB)
            .then(function (res) {

                var date = moment(res.data.events[0].announce_date).format('MM/DD/YYYY');
                var results = '\n\n' + command + "\nVenue Name: " + res.data.events[0].venue.name + "\nVenue Location: " + res.data.events[0].venue.display_location + "\nDate: " + date;

                fs.appendFile('log.txt', results, function (err) {
                    if (err) throw err;
                    console.log('\n ------------Command & Results Saved!--------------');
                });
                console.log(results);
            })
            .catch(function (err) { console.log(err); });
    }
///-------------------//////////////////////////////////-----------------------------------------
    if (command === `spotify-this-song`) {
        if (val === "") { val = "The Sign"; }
        spotify.search({ type: 'track', query: val }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } 
            var results =  '\n\n' + command + "\nSong Name: " + data.tracks.items[0].name
              + "\nPreview Link: " + data.tracks.items[0].preview_url
              + "\nAlbum Name: " + data.tracks.items[0].album.name  ;
              
            console.log(results);
            fs.appendFile('log.txt', results, function (err) {
                if (err) throw err;
                console.log('\n ------------Command & Results Saved!--------------');
            });
        });
    }
////----------------------------------------------------------------------------
    if (command === 'movie-this') {
        if (val === "") { val = "Mr. Nobody"; }
        var queryUrlM = "http://www.omdbapi.com/?apikey=trilogy&tomatoes=true&t=" + val;
        // console.log(queryUrlM);
        ax.get(queryUrlM)
            .then(function (res) {

                var results = '\n\n' + command + " " + val + "\nTitle: " + res.data.Title + "\nYear: " + res.data.Year + "\nIMDB Movie Rating: " +
                    res.data.Rated + "\nRotten Tomato Rating: " + res.data.tomatoRating + "\nCountry of Production: "
                    + res.data.Country + "\nLanguage: " +
                    res.data.Language + "\nPlot: " + res.data.Plot + "\nActors: " + res.data.Actors + '\n';

                fs.appendFile('log.txt', results, function (err) {
                    if (err) throw err;
                    console.log('\n ------------Command & Results Saved!--------------');
                });
                console.log(results);
            }).catch(function (err) { console.log(err); });
    }


}
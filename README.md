# Pearl's LIRI Node App 



<hr>


## Table of Contents

### About

01. [LIRI Introduction](#liri-introduction)
02. [How to Use LIRI](#how-to-use-liri)
03. [Files Used](#files-used)


### Resources
01. [APIs Used](#apis-used)

<hr>

## About 
#### LIRI Introduction

*  LIRI stands for Language Interpretation and Recognition Interface, similar SIRI in iPhones, where S stands for speech. 

* LIRI is a command line node app capable of taking in paramters and giving back results. 

#### How to Use LIRI

* Simply goto the command line and cd into the folder containing the `liri.js` file. Then type in "node liri.js [function] [value]. 

* `function` is one of the following: 
    * movie-this
    * spotify-this
    * concert-this
    * do-what-it-says
* `value` corresponds to movie name, song name, or artist name, respectively for the `function`.

* `do-what-it-says` function will run whatever command is in the `random.txt` file. 

* Results of the command will be logged into `log.txt` file. Past results will be automatically deleted before the new result is shown.

#### Files Used
* LIRI has three main files for the general user.
    * `liri.js`
    * `log.txt`
    * `random.txt`

<hr>

## Resource
#### APIs Used
* "movie-this' uses [OMDB API](www.omdbapi.com).
* 'spotify-this' uses [Spotify API](https://www.npmjs.com/package/node-spotify-api).
* 'concert-this' uses [SeatGeek API](https://platform.seatgeek.com/).



[Back to top](#liri-introduction)




'use strict';

var app = require('angular').module('movieApp');

app.controller('BookingController', require('./bookingController'));
app.controller('CancellationController', require('./cancellationController'));
app.controller('HomeController', require('./homeController'));
app.controller('CityController', require('./cityController'));
app.controller('TheatreController', require('./theatreController'));
app.controller('TimeController', require('./timeController'));
app.controller('SeatController', require('./seatController'));
app.controller('AssignmovieController', require('./assignmovieController'));
//app.controller('MovieController', require('./movieController'));

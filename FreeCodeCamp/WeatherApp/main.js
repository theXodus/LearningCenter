function getLocation() {
    $.getJSON('http://ip-api.com/json', function(data) {
        var city = data.city;
        var region = data.region;
        getWeather(city, region);
    });
}

function getWeather(city, region) {
    if ($('#switch-btn').data("role") === "imperial") {
        setWeather('f')
    } else {
        $('#switch-btn').text("Switch to Imperial");
        setWeather('c')
    }

    function setWeather(m) {
        $('ul').empty();
        var weatherURL = 'http://api.wunderground.com/api/d6146a43ef046da2/forecast/q/' + region + '/' + city + '.json';
        var desc,
            icon,
            date;
        $.getJSON(weatherURL, function(data) {
            var simpleData = data.forecast.simpleforecast.forecastday[0];
            var textData = data.forecast.txt_forecast.forecastday[0];
            if (m === 'f') {
                desc = textData.fcttext;
            } else {
                desc = textData.fcttext_metric;
            }
            date = simpleData.date.pretty;
            // Setting the Main Text
            $('#main-icon').attr('src', simpleData.icon_url);
            $('#location').text(city + ", " + region);
            $('#date').text(date);
            $('#desc').text(desc);
            // sets the list forecast
            for (x = 1; x < 7; x++) {
                textData = data.forecast.txt_forecast.forecastday[x];
                icon = textData.icon_url;
                // sets to either imperial or metric
                if (m === 'f') {
                    desc = textData.fcttext;
                } else {
                    desc = textData.fcttext_metric;
                }
                var day = textData.title;
                if (x === 0)
                    return;
                $('ul').append("<li class='flex items-center lh-copy pa3 ph0-l bb b--black-10'> <img class='w2 h2 w3-ns h3-ns br-100' src=" + icon + " /> <div class = 'pl3 flex-auto' ><span class='f6 db black-70'>" + desc + "</span> </div> <div><a class='f6 link blue hover-dark-gray'>" + day + "</a> </div> </li>")
            }
        })
    }
}

$(document).ready(function() {
    getLocation();
    $('#switch-btn').click(function() {
        if ($(this).data('role') === 'imperial') {
            $(this).text("Switch to Imperial")
            $(this).data('role', 'metric')
            getLocation();
        } else {
            $(this).text("Switch to Metric")
            $(this).data('role', 'imperial')
            getLocation();
        }
    })
})

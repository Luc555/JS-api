<?php
/*
 * Get cities based on city name and radius in KM
 */

// get geocode object as array from The Google Maps Geocoding API
$geocodeObject = json_decode(file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address={CITY NAME},{COUNTRY CODE}'), true);

// get latitude and longitude from geocode object
$latitude = $geocodeObject['results'][0]['geometry']['location']['lat'];
$longitude = $geocodeObject['results'][0]['geometry']['location']['lng'];

// set request options
$responseStyle = 'short'; // the length of the response
$citySize = 'cities15000'; // the minimal number of citizens a city must have
$radius = 30; // the radius in KM
$maxRows = 30; // the maximum number of rows to retrieve
$username = '{YOUR USERNAME}'; // the username of your GeoNames account

// get nearby cities based on range as array from The GeoNames API
$nearbyCities = json_decode(file_get_contents('http://api.geonames.org/findNearbyPlaceNameJSON?lat='.$latitude.'&lng='.$longitude.'&style='.$responseStyle.'&cities='.$citySize.'&radius='.$radius.'&maxRows='.$maxRows.'&username='.$username, true));

// foreach nearby city get city details
foreach($nearbyCities->geonames as $cityDetails)
{
    // do something per nearby city
}
print("This should print");
echo "on the command line";
?>
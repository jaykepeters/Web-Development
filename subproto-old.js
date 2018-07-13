// Protocol and Subdomain Check
// Version 1.0 (WORKING)
// Written by Jayke Peters on 4 July 2018

alert ((document.domain));

// Set Global Variables
var defPrefix = "http://";
var altPrefix = "https://";
var domain = "shrinky.link";

// Subdomain with "." after it
var subDomain = "www.";

// FULL URL STRING
var crctURLSTRING = defPrefix + subDomain + domain;

// ALTERNATE URL STRING
var altURLSTRING = altPrefix + subDomain + domain;

// Display message?: "YES" OR "NO"
var alertOpt = "YES"

// Set the Alert Message
var alertMessage = "DIRECT ACCESS NOT ALLOWED"

// Redirect based on the Current URL
if (window.location.href != (crctURLSTRING)) { 
    if (alertOpt == "YES") {
        alert ((alertMessage)); }
    window.location.href = (crctURLSTRING);
}


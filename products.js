// Base64 encoded JSON of products
// Admin edits this file and commits to update shop
const productsBase64 = "W3sibmFtZSI6IkRpYW1vbmQgU3RhY2siLCJwcmljZSI6NjQsImltYWdlIjoiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MCIifSx7Im5hbWUiOiJHb2xkIEluZ290IiwicHJpY2UiOjMyLCJpbWFnZSI6Imh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAifV0=";

// Function to decode products
function getProducts(){
  return JSON.parse(atob(productsBase64));
}

var blocked_sites: string[] = [
  "www.youtube.com",
  "www.facebook.com",
  "www.lihkg.com",
  "www.9gag.com",
];
var allowed_sites: string[] = [
  "https://www.youtube.com/watch?v=dIUTsFT2MeQ&t=182s&ab_channel=freeCodeCamp.org",
];

var current_host: string = window.location.hostname;
var current_website: string = window.location.href;

if (blocked_sites.includes(current_host)) {
  if (!allowed_sites.includes(current_website)) {
    document.body.innerHTML = "<h1>Focus MotherFucker!!</h1>";
  }
}


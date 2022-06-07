var blocked_sites = [
    "www.youtube.com",
    "www.facebook.com",
    "www.lihkg.com",
    "www.9gag.com",
];
var allowed_sites = [
    "https://www.youtube.com/watch?v=dIUTsFT2MeQ&t=182s&ab_channel=freeCodeCamp.org",
];
var current_host = window.location.hostname;
var current_website = window.location.href;
if (blocked_sites.includes(current_host)) {
    if (!allowed_sites.includes(current_website)) {
        document.body.innerHTML = "<h1>Focus MotherFucker!!</h1>";
    }
}

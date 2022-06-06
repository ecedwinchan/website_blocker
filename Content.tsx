if (window.location.hostname === "youtube.com") {
  alert("Hello");
}

var blocked_sites: String[] = ["www.youtube.com", "www.facebook.com"];
var allowed_sites: String[] = [
  "www.youtube.com/watch?v=dIUTsFT2MeQ&t=182s&ab_channel=freeCodeCamp.org",
];

var current_website: string = window.location.hostname;

if (current_website in blocked_sites) {
  if (!(current_website in allowed_sites)) {
    document.body.innerHTML = "<h1>Focus MotherFucker!!</h1>";
  }
}

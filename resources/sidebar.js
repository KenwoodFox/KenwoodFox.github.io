// Set up!
var sidebar = document.getElementById("sidebar");
var leader = sidebar.getContext("2d");
var title = sidebar.getContext("2d");
var article = sidebar.getContext("2d");
var date = sidebar.getContext("2d");

// Write "Hello, World!"
leader.font = "24px Arial";
leader.fillStyle = "gray";
leader.fillText("Latest News",15,45); //place name

title.font = "15px Arial";
title.fillStyle = "black";
title.fillText("Article one",15,100); //Article one name goes here
title.fillText("Article two",15,300); //Article two name goes here

article.font = "15px Arial";
article.fillText("Got JS working huzzah! Everyone be proud of me",25,120);
article.fillText("Lol no news",25,320);

date.font = "10px Arial";
date.fillText("5/4/2018",15,140);
date.fillText("3/15/2018",15,350);

/*<div class="sidebar"><!-- sidebar data -->
<h3>Latest News</h3>
<h4>No new news</h4>
<h5>April 5th, 2018</h5>
<p>Today is today<br>
<a href="#">Read more</a></p>
<p></p>
<h4>New Website Launched</h4>
<h5>Arpil 4th, 2018</h5>
<p>Discovered an excelent website template, will be fleshing it
out and adding to it as time goes on.<br>
<a href="#">Read more</a></p>
<h3>Useful Links</h3>
<ul>
  <li><a href="#">Steam</a></li>
  <li><a href="#">Github</a></li>
  <li><a href="#">My Discord Server</a></li>
  <li><a href="#">George Brown's Website</a></li>
</ul>
<h3>Search</h3>
<form method="post" action="#" id="search_form">
  <p> <input class="search" name="search_field"
 value="Enter keywords....." type="text"> <input
 name="search"
 style="border: 0pt none ; margin: 0pt 0pt -9px 5px;"
 src="style/search.png" alt="Search" title="Search"
 type="image"> </p>
</form>
</div>
*/ 
// Set up!
var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

// Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("Hello, World!",15,175);

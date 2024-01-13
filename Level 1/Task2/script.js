
function changeColor() {
    const button = document.getElementById("myButton");
    button.style.backgroundColor = "blue";
  }
var welcome;  
var date = new Date();  
var hour = date.getHours();
if (hour < 12) {  
    welcome = "Good Morning";  
}
else if (hour < 17) {  
    welcome = "Good Afternoon";  
}
else{  
    welcome = "Good Evening";  
}  
document.write("<br>"+"<center>"+"<h2>"+ welcome+"</center>");  
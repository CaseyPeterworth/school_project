/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

/* Javascript only */
function myFunction(element) {
  var dropdowns = document.getElementsByClassName("dropdown-content");

  // element.nextSibling is the carriage return… The dropdown menu is the next next.
  var thisDropdown = element.nextSibling.nextSibling;

  if (!thisDropdown.classList.contains('show')) { // Added to hide dropdown if clicking on the one already open
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }

  // Toggle the dropdown on the element clicked
  thisDropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
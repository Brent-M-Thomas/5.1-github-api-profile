(function() {

$.ajax({
  url: 'https://api.github.com/users/Brent-M-Thomas',
  dataType: 'json',
  success:
  error: function() {
    alert('Whatever went wrong must be your fault because it works on my machine!'),
  }
$.ajax({
  url: 'https://api.github.com/users/Brent-M-Thomas/repos',
  dataType: 'json',
  success:
  error: function() {
    alert('Whatever went wrong must be your fault because it works on my machine!'),
  }


});



})();

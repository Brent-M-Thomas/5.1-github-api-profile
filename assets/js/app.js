(function() {
  var newTemplate = function(querySelector) {
    var el = $(querySelector);
    return Handlebars.compile(el.html());
  };

  $.ajax({
    url: 'https://api.github.com/users/Brent-M-Thomas',
    dataType: 'json',
    success: function(loadData) {
      var t = newTemplate('.profile-data');
      $('.left-side').append(t(loadData));
    },

    error: function() {
      alert('Whatever went wrong must be your fault because it works on my machine!');
    }
  });

  $.ajax({
    url: 'https://api.github.com/users/Brent-M-Thomas/repos',
    dataType: 'json',
    success: function(loadData) {
      var t = newTemplate('.content');
      loadData.forEach(function(data) {
        $('.content-main').append(t(data));

      });
    },

    // beerData.data.forEach(function(beer) {
    // var addBeer = template(beer);

    // targetEl.innerHTML += addBeer;

    error: function() {
      alert('Whatever went wrong must be your fault because it works on my machine!');
    }
  });

})();

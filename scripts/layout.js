$('.scroll-btn').click(function (evt) {
  var position = $(window).scrollTop() === 0 ? $('#info').position().top : 0;
  $("html, body").animate({scrollTop: position});
});

$('#info').waypoint(function (direction) {
  var position = direction === 'up' ? 0 : $('#info').position().top;
  $("html, body").animate({scrollTop: position});
}, { offset: '50%' });
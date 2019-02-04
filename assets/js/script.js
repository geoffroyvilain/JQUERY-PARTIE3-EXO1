$(function() {
  var count = 0;
  $('#clickMe').click(function() {
    count++;
    $('#text').text(count);
  });
});

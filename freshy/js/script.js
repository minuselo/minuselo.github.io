$(document).ready(function()
{
$('.icon').click(function()
{
  var $sec= $('#sec-nav');
  if($sec.hasClass('hide'))
{
 $sec.removeClass();
 $sec.addClass('show');
}
else {
  $sec.removeClass();
  $sec.addClass('hide');
}
});
});

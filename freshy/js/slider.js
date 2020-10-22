$(document).ready(function()
{
var offers= [];
offers = $('.offer-images');
var $leftArrow= $('#arrow1');
var $rightArrow= $('#arrow2');
var viewr= [];
for (var i = 0; i < 4; i++) {
  viewr[i]=offers[i];
  viewr[i].classList.add('view');
}
var long=viewr.length;
var seclong=0;
$($leftArrow).click(function()
{
  if (long<offers.length)
  {
    viewr[0].classList.remove('view');
    viewr[0].classList.add('hide');
    offers[long].classList.remove('hide');
    offers[long].classList.add('view');
    viewr.splice(0,1);
    viewr.push(offers[long]);
    long++;
    seclong++;
}
});

$($rightArrow).click(function()
{
if (seclong>0) {
viewr[3].classList.remove('view');
viewr[3].classList.add('hide');
offers[seclong-1].classList.remove('hide');
offers[seclong-1].classList.add('view');
viewr.splice(3,1);
viewr.unshift(offers[seclong-1]);
seclong--;
long--;
}
});


});

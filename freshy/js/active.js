$(document).ready(function()
{
$('.offer-images').hover(function()
{
var $this=$(this);
var elem=$this.children('a.activ');
elem.removeClass('hide');
var abz=$this.children('h3');
abz.css({
  'bottom': '60%'
});
var abz2=$this.children('p');
abz2.css({
  'bottom': '50%'
});
},
function()
{
var $this=$(this);
var elem=$this.children('a.activ');
elem.addClass('hide');
var abz=$this.children('h3');
abz.css({
  'bottom': '50%'
});
var abz2=$this.children('p');
abz2.css({
  'bottom': '40%'
});
}
);
});

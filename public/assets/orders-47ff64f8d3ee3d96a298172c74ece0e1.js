function getTimeRemaining(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24),i=Math.floor(t/864e5);return{total:t,days:i,hours:r,minutes:o,seconds:n}}function initializeClock(e,t){function n(){var e=getTimeRemaining(t);r.innerHTML=e.days,i.innerHTML=("0"+e.hours).slice(-2),a.innerHTML=("0"+e.minutes).slice(-2),l.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(c)}var o=document.getElementById(e),r=o.querySelector(".days"),i=o.querySelector(".hours"),a=o.querySelector(".minutes"),l=o.querySelector(".seconds");n();var c=setInterval(n,1e3)}$(document).on("page:load",function(){$("#verify_code").hide(),$("#code_trigger").click(function(){$("#verify_code").toggle()});var e=0;$(".panel-body").each(function(){var t=$(this).find(".price").html(),t=parseFloat(t),n=$(this).find(".quantity").html();$(this).find(".total").html(t*n),e+=t*n}),$("#order_total").html(e)});
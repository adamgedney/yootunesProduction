$(function(){var e={};e.yPos=0,e.hero=$(".hero"),e.position=$(window).scrollTop(),e.current=0,$(window).on("scroll",function(){var t=$(window).scrollTop();t>e.position?e.yPos-=1.5:(e.yPos+=1.5,t>680&&(e.yPos=-1)),e.hero.css({backgroundPosition:"0 "+e.yPos+"px"}),e.position=t})});
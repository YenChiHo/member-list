

$(document).ready(function() {
	$(".picture").on("mouseenter",function(){
		$(this).css({"width":"1000px","height":"1000px","-webkit-border-radius":"500px","border-radius":"500px"
		});
	})
	.on("mouseleave",function(){
		$(this).css({"width":"250px","height":"250px","-webkit-border-radius":"125px","border-radius":"125px"
		});
	})
});
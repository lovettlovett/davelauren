$("#photo-1").on("click", function(){
	$("#photo-1").css("display", "none")
	$("#photo-2").css("display", "block")
	$("#circle-1").css("opacity", "0.5")
	$("#circle-2").css("opacity", "1")
});

$("#photo-2").on("click", function(){
	$("#photo-2").css("display", "none")
	$("#photo-3").css("display", "block")
	$("#circle-2").css("opacity", "0.5")
	$("#circle-3").css("opacity", "1")
})

$("#photo-3").on("click", function(){
	$("#photo-3").css("display", "none")
	$("#photo-4").css("display", "block")
	$("#circle-3").css("opacity", "0.5")
	$("#circle-4").css("opacity", "1")
})

$("#photo-4").on("click", function(){
	$("#photo-4").css("display", "none")
	$("#photo-1").css("display", "block")
	$("#circle-4").css("opacity", "0.5")
	$("#circle-1").css("opacity", "1")
})

$("#circle-2").on("click", function(){
	$("#photo-1").css("display", "none")
	$("#photo-3").css("display", "none")
	$("#photo-4").css("display", "none")
	$("#photo-2").css("display", "block")
	$("#circle-1").css("opacity", "0.5")
	$("#circle-3").css("opacity", "0.5")
	$("#circle-4").css("opacity", "0.5")
	$("#circle-2").css("opacity", "1")
})

$("#circle-3").on("click", function(){
	$("#photo-1").css("display", "none")
	$("#photo-2").css("display", "none")
	$("#photo-4").css("display", "none")
	$("#photo-3").css("display", "block")
	$("#circle-1").css("opacity", "0.5")
	$("#circle-2").css("opacity", "0.5")
	$("#circle-4").css("opacity", "0.5")
	$("#circle-3").css("opacity", "1")
})

$("#circle-4").on("click", function(){
	$("#photo-1").css("display", "none")
	$("#photo-3").css("display", "none")
	$("#photo-2").css("display", "none")
	$("#photo-4").css("display", "block")
	$("#circle-1").css("opacity", "0.5")
	$("#circle-3").css("opacity", "0.5")
	$("#circle-2").css("opacity", "0.5")
	$("#circle-4").css("opacity", "1")
})

$("#circle-1").on("click", function(){
	$("#photo-2").css("display", "none")
	$("#photo-3").css("display", "none")
	$("#photo-4").css("display", "none")
	$("#photo-1").css("display", "block")
	$("#circle-2").css("opacity", "0.5")
	$("#circle-3").css("opacity", "0.5")
	$("#circle-4").css("opacity", "0.5")
	$("#circle-1").css("opacity", "1")
})

$("#about-header").on("click", function(){
	$(window).scrollTop(600)
})

$("#proposal").on("click", function(){
	$(window).scrollTop(1100)
})

$("#photos").on("click", function(){
	$(window).scrollTop(1600)
})

$("#wedding-header").on("click", function(){
	$(window).scrollTop(2400)
})

$("#registry").on("click", function(){
	$(window).scrollTop(5400)
})


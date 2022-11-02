var video = document.querySelector("#player1");
// 'querySelector' allows you to style like CSS with #
// if using 'getElementById', then do not need # in front of player 1 bc already accounted for by the selector

// Load Video
window.addEventListener("load", function() {
	console.log("Page Loading...")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// Play Video & Volume
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// Pause Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// Slow Down Video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	// multiplies by 90% of its current speed; 10%
	video.playbackRate *= 0.9;
	console.log("Speed: " + video.playbackRate)
});

// Speed Up Video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	// divides by 90% of its current speed
	video.playbackRate /= 0.9;
	console.log("Speed: " + video.playbackRate)
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	// increase the video by 10 seconds
	video.currentTime += 10;
	// if the current time is exceeded, start back at the beginning
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video Current Time: " + video.currentTime)
});

// Mute Video
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute: " + video.muted)
	if (video.muted = true) {
		
	} else {
		video.muted = false
	}
// need if/else statement
// if video.muted = True --> display something
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Current Volume is: " + video.volume)
	// setting value to current volume 
	video.volume = this.value / 100
	console.log("New Volume is: " + video.volume)
	// updates the text to be able to show the percentage
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});
var video = document.querySelector("#player1");
// 'querySelector' allows you to style like CSS with #
// if using 'getElementById', then do not need # in front of player 1 bc already accounted for by querySelector

// Load Video: initialize the video element, turn off autoplay, & turn of looping.
window.addEventListener("load", function() {
	console.log("Page Loading...")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

// Play Video & Update Volume: play the video & UPDATE the volume information.
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

// Slow Down Video: slow the current video speed by 10% each time the button is clicked.
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	// multiplies by 90% of its current speed; 10%
	video.playbackRate *= 0.9;
	console.log("Speed: " + video.playbackRate)
});

// Speed Up Video: increase the current video speed each time the button is clicked & log the new speed.
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	// divides by 90% of its current speed
	video.playbackRate /= 0.9;
	console.log("Speed: " + video.playbackRate)
});

// Skip Ahead: advance the current video by 10 seconds; if the video length is exceeded, go back to the start.
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

// Mute Video: mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		console.log("Unmute");
		// if volume muted, 'Unmute' button shows and on click, video becomes unmuted (button changes to 'Mute')
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		// 'Volume is:' 100% when unmuted
		document.querySelector("#volume").innerHTML = "100%"
		// this.innerHTML = "Mute"
	} else {
		console.log("Mute");
		// if volume unmuted, 'Mute' button shows and on click, video becomes muted (button changes to 'Unmute')
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		// 'Volume is:' is 0% when unmuted
		document.querySelector("#volume").innerHTML = "0%"
		// this.innerHTML = "Unmute"
	}
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

// Styled & Original
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Style: 'oldSchool'") 
	// adds the 'oldSchool' style on click
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Style: 'original'") 
	// removes the 'oldSchool' style on click and goes back to 'original'
	video.classList.remove("oldSchool")
});
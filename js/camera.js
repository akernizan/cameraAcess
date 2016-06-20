var video = document.querySelector('#videoElement');
var button = document.querySelector('#on');
var buttonOff = document.querySelector('#off');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;


button.addEventListener('click', function () {
	if (navigator.getUserMedia) {
		navigator.getUserMedia({
			video: true
		}, handleVideo, videoError);
	}
});

buttonOff.addEventListener('click', function () {
	video.pause();
	video.src = "";
	localstream.getTracks()[0].stop();
})


function handleVideo(stream) {
	video.src = window.URL.createObjectURL(stream)
}

function videoError(e) {
	alert('error')
}
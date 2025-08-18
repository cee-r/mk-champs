document.addEventListener("DOMContentLoaded", function() {
    let reel_video = document.getElementById('mk-reel-video');
    let reel_video_toggle = document.getElementById('mk-reel-toggle');
    let reel_video_toggle_label = document.querySelector('.mk-reel-toggle-label');
    let reel_video_toggle_icon = document.querySelector('.mk-reel-toggle-icon');
    let reel_area = document.querySelector('.mk-hero-video');

    if (reel_video) {
        function playVideo() {
            reel_video.play();
            // reel_video_toggle_label = "Pause the video";
            // reel_video_toggle_icon.classList.remove('fa-play');
            // reel_video_toggle_icon.classList.add('fa-pause');
        }
        function pauseVideo() {
            reel_video.pause();
            // reel_video_toggle_label.textContent = "Play the video";
            // reel_video_toggle_icon.classList.remove('fa-pause');
            // reel_video_toggle_icon.classList.add('fa-play');
        }
        function toggleVideo() {
            if (reel_video.paused) {
                playVideo();
            } else {
                pauseVideo();
            }       
        }

        reel_video_toggle.addEventListener("click", toggleVideo);
        // reel_area.addEventListener("click", toggleVideo);
    }
});
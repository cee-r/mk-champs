document.addEventListener("DOMContentLoaded", function() {
    // let heroVideo = document.getElementById('hero-video');
    // let heroToggle = document.getElementById('hero-video-toggle');
    // let heroToggleLabel = document.querySelector('.hero-video-toggle-label');
    // let heroToggleIcon = document.querySelector('.hero-video-toggle-icon');
    // let heroVideoArea = document.querySelector('.hero-video-area');
    // if (heroVideo) {
    //     function playVideo() {
    //         heroVideo.play();
    //         heroToggleLabel.textContent = "Pause the video";
    //         heroToggleIcon.classList.remove('fa-play');
    //         heroToggleIcon.classList.add('fa-pause');
    //     }
    //     function pauseVideo() {
    //         heroVideo.pause();
    //         heroToggleLabel.textContent = "Play the video";
    //         heroToggleIcon.classList.remove('fa-pause');
    //         heroToggleIcon.classList.add('fa-play');
    //     }
    //     function toggleVideo() {
    //         if (heroVideo.paused)
    //             playVideo();
    //         else
    //             pauseVideo();
    //     }
    //     heroToggle.addEventListener("click", toggleVideo);
    //     heroVideoArea.addEventListener("click", toggleVideo);
    //     heroVideo.addEventListener('pause', () => {
    //         document.cookie = "heroVideoPaused=true; path=/; max-age=86400";
    //     }
    //     );
    //     heroVideo.addEventListener('play', () => {
    //         document.cookie = "heroVideoPaused=false; path=/; max-age=86400";
    //     }
    //     );
    // }
    // function getCookie(name) {
    //     const value = `; ${document.cookie}`;
    //     const parts = value.split(`; ${name}=`);
    //     if (parts.length === 2)
    //         return parts.pop().split(';').shift();
    // }
    // let paused = getCookie('heroVideoPaused') === 'true';
    // if (paused && heroVideo)
    //     pauseVideo();
});
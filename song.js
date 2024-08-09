document.addEventListener('DOMContentLoaded', () => {
    const songs = document.querySelectorAll('.song');
    const audioPlayer = document.getElementById('audioPlayer');

    songs.forEach(song => {
        song.addEventListener('click', () => {
            const songSrc = song.getAttribute('data-song');
            console.log("Selected song source:", songSrc);
            if (audioPlayer.src !== songSrc) {
                audioPlayer.src = songSrc;
                audioPlayer.play().then(() => {
                    console.log("Playing:", songSrc);
                }).catch(error => {
                    console.error("Error playing audio:", error);
                });
            } else {
                audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
            }
        });
    });
});

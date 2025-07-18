<script>
    // Create the audio element
    var carSound = document.createElement('audio');
    carSound.src = 'sound.mp3'; // Replace with the actual path to your car sound file
    carSound.loop = true;
    carSound.volume = 0.5; // Optional: adjust volume (0.0 to 1.0)

    // Wait until the document is ready, then try to play
    window.addEventListener('load', function() {
        // Automatically play the sound (may require user interaction on some browsers)
        carSound.play().catch(function(error) {
            console.log('Autoplay failed:', error);
        })
    });
</script>

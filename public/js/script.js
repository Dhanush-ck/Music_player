// dataset 
const data = [{
                name : "Dandelions",
                src : "./assets/song/Dandelions(PagalNew.Com.Se).mp3",
                image : "./assets/img/photos/cover1.jpg",
                bgImage : "./assets/img/photos/bg1.jpg"
            },
            {
                name : "Losing Interest",
                src : "./assets/song/Shiloh_Dynasty_Itssvd_-_Losing_Interest(impuremusic.com).mp3",
                image : "./assets/img/photos/cover2.jpg",
                bgImage : "./assets/img/photos/bg2.jpg"
            },
            {
                name : "Let Me Down Slowly",
                src : "./assets/song/Alec_Benjamin_-_Let_Me_Down_Slowly__Lyrics_(256k).mp3",
                image : "./assets/img/photos/cover3.jpg",
                bgImage : "./assets/img/photos/bg3.jpg"
            },
            {
                name : "",
                src : "",
                image : "./assets/img/photos/cover4.jpg",
                bgImage : "./assets/img/photos/bg4.jpg"
            }
]

// background div 
const container = document.querySelector('.container');
// cover picture 
const coverImage = document.getElementById('cover-image');

// variable to hold the state of playing or not 
var isPlaying = false;
// data index 
var dataIndex = 0;
// play pause button 
const playPause = document.getElementById('play-pause')
// previous button 
const prev = document.getElementById('prev')
// next button  
const next = document.getElementById('next')
// song title 
const title = document.querySelector('.song-title');
// creating a audio element to play the song 
const currentSong = document.createElement('audio');
// slider 
const slider = document.getElementById("slider");
// current time 
const currentTime = document.querySelector(".current")
// maximum duration 
const maximumTime = document.querySelector(".maximum")

// function to change the src 
function setPlayButton() {
    if(isPlaying) {
        playPause.src = "./assets/img/icons/play-button.png"
        currentSong.pause();
    }
    else {
        playPause.src = "./assets/img/icons/pause-button.png"
        currentSong.play();
    }
}

// calling function on playpause button 
playPause.onclick = ()=> {
    setPlayButton();
    isPlaying = !isPlaying
}

// function to change the index forwards 
function nextTrack() {
    (dataIndex<data.length-1)? dataIndex++: dataIndex=0;
}

// function to change the index backwards 
function prevTrack() {
    (dataIndex>0)? dataIndex--: dataIndex = data.length-1;
}

// calling function on clicking next 
next.onclick = ()=> {
    nextTrack()
    setTrack()
}

// calling function on clicking prev 
prev.onclick = ()=> {
    prevTrack()
    setTrack()
}

// function for setting the current track 
function setTrack() {
    container.style.backgroundImage = `url('${data[dataIndex].bgImage}')`;
    coverImage.src = `${data[dataIndex].image}`;
    currentSong.src = data[dataIndex].src;
    title.textContent = data[dataIndex].name;
    isPlaying?currentSong.play():currentSong.pause();
}

// calling the function to set track intially 
setTrack()

currentSong.addEventListener("ended", ()=>{
    nextTrack()
    setTrack()
})

function seekUpdate() {
    let seekPosition = 0;
   
    // Check if the current track duration is a legible number
    if (!isNaN(currentSong.duration)) {
        seekPosition = currentSong.currentTime * (100 / currentSong.duration);
        slider.value = seekPosition;

        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(currentSong.currentTime / 60);
        let currentSeconds = Math.floor(currentSong.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currentSong.duration / 60);
        let durationSeconds = Math.floor(currentSong.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
    //   console.log(currentMinutes)
    //   console.log(currentSeconds)
      // Display the updated duration
      maximumTime.innerHTML = durationMinutes + ":" + durationSeconds;
      currentTime.innerHTML = currentMinutes + ":" + currentSeconds;
    }
}

setInterval(seekUpdate, 1000)

function seek() {
    currentSong.currentTime = currentSong.duration * (slider.value / 100)
}
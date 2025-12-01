const textSpan = document.querySelector('.slider-text');
const mode = document.getElementById('myToggle');

mode.addEventListener('change', () => {

  document.body.classList.toggle("dark-mode");

  if (mode.checked) {
    textSpan.textContent = "Light";
  } else {
    textSpan.textContent = "Dark";
  }
});

let genreDiv = document.createElement('div');
let genreContainer = document.getElementsByClassName('left')[0];
genreContainer.appendChild(genreDiv);
genreDiv.className = "genreDiv";
genreDiv.textContent = 'Filter by Genre:';
let genres = ['All', 'Pop', 'Rock', 'Hip-Hop'];
let dropDown = document.createElement('select');
dropDown.classList.add('selectOptions')
for (let inputs of genres) {
  let options = document.createElement('option');
  options.classList.add('genreOptions');
  options.value = inputs;
  options.textContent = inputs;
  dropDown.appendChild(options);
}

genreDiv.appendChild(dropDown);

//songs object array
let songObj = [
  // Pop Songs
  {
    id: 1,
    genre: "Pop",
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    audio: './audios/Die With A Smile-(SambalpuriStar.In).mp3',
    image: './images/lady-gaga-bruno-mars-die-with-a-smile-tgj-1.jpg'
  },
  {
    id: 2,
    genre: "Pop",
    title: "The Fate of Ophelia",
    artist: "Taylor Swift",
    audio: 'audios/Taylor Swift - The Fate Of Ophelia (Lyrics).mp3',
    image: 'images/taylor_swift.jpg'
  },
  {
    id: 3,
    genre: "Pop",
    title: "Ordinary",
    artist: "Alex Warren",
    audio: 'audios/Ordinary - Alex Warren.mp3',
    image: 'images/Alex-Warren.jpg'
  },

  // Hip-Hop Songs
  {
    id: 4,
    genre: "Hip-Hop",
    title: "luther",
    artist: "Kendrick Lamar & SZA",
    audio: 'audios/Kendrick Lamar - luther (Official Audio).mp3',
    image: 'images/sza.jpg'
  },
  {
    id: 5,
    genre: "Hip-Hop",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    audio: 'audios/Not Like Us.mp3',
    image: 'images/kendrick-lamar.jpg'
  },
  {
    id: 6,
    genre: "Hip-Hop",
    title: "Butterfly Effect",
    artist: "Travis Scott",
    audio: 'audios/BUTTERFLY_EFFECT_-_Travis_Scott_(mp3.pm).mp3',
    image: 'images/travis-scott.webp'
  },

  // Rock Songs
  {
    id: 7,
    genre: "Rock",
    title: "The Emptiness Machine",
    artist: "Linkin Park",
    audio: 'audios/Linkin Park- The Emptiness Machine (2013venjix Edit).mp3',
    image: 'images/linkin_park_image.jpg'
  },
  {
    id: 8,
    genre: "Rock",
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    audio: 'audios/Guns N Roses - Sweet Child o Mine.mp3',
    image: "images/gunsnroses.jpg"
  },
  {
    id: 9,
    genre: "Rock",
    title: "Dream On",
    artist: "Aerosmith",
    audio: './audios/Aerosmith - Dream On (Audio).mp3',
    image: './images/aerosmith.jpeg'
  }
];

//search box for a song
let searchSong = document.createElement('input');
searchSong.type = 'search';
searchSong.placeholder = 'Search a Song...';
searchSong.className = 'searchInput';
genreContainer.appendChild(searchSong);





let songsDiv = document.createElement('div');
songsDiv.className = "songsDiv";
songsDiv.textContent = 'All Songs';
genreContainer.appendChild(songsDiv);

// function to display songs based on the genre selection
let songsArr = [];
for(let song of songObj){
        songsArr.push(song);
      }
function songarrcleaner(){
  songsArr = [];
}
function showSongs() {
  resetSongs();
  songarrcleaner();
  songObj.forEach(input => {
    if (dropDown.value === input.genre) {
       let createDiv = document.createElement('div');
      createDiv.classList.add('songsDisplay','genreSongs');
      createDiv.textContent = `${input.title} - ${input.artist}`;
      
      songsArr.push(input);
      
      songsDiv.appendChild(createDiv);
    } else if (dropDown.value === 'All') {
       let createDiv = document.createElement('div');
      createDiv.className = 'songsDisplay';
      createDiv.textContent = `${input.title} - ${input.artist}`;
      
      if(songsArr.length<songObj.length){for(let song of songObj){
        songsArr.push(song);
      }
    }
      songsDiv.appendChild(createDiv);
    };

  })
}
songObj.forEach(input => {
  let createDiv = document.createElement('div');
  createDiv.classList.add('genreSongs','songsDisplay');
  createDiv.textContent = `${input.title} - ${input.artist}`;
  
  songsDiv.appendChild(createDiv);
})
dropDown.addEventListener('change', showSongs);

function resetSongs() {
  let allele = document.querySelectorAll('.songsDisplay')
  allele.forEach(input => input.remove());
}

let topImageContainer = document.createElement('div');
topImageContainer.className = 'topImageContainer';
let imageContainer = document.getElementsByClassName('center')[0];
imageContainer.appendChild(topImageContainer);
let newImageDiv = document.createElement('div');
newImageDiv.className = "newImageDiv";
topImageContainer.appendChild(newImageDiv);
imageContainer.appendChild(topImageContainer);
let imageElement = document.createElement('img');
imageElement.className = "imageElement";
imageElement.src = './images/lady-gaga-bruno-mars-die-with-a-smile-tgj-1.jpg';
newImageDiv.appendChild(imageElement);

let songName = document.createElement('h2');
songName.className = 'songName';
songName.textContent = 'Die With A Smile';
newImageDiv.appendChild(songName);

let artistName = document.createElement('h3');
artistName.className = 'artistName';
artistName.textContent = 'Lady Gaga & Bruno Mars';
newImageDiv.appendChild(artistName);


let audioElement = document.createElement('audio');
audioElement.className = 'audioElement';
audioElement.src = './audios/Die With A Smile-(SambalpuriStar.In).mp3';
audioElement.controls = true;
audioElement.controlsList = 'nodownload';
audioElement.autoplay = false;
imageContainer.appendChild(audioElement);

function renderCurrentSong(input){
 let arr1 = input.textContent.split('-');
     let title = arr1[0].trim();
     
     let song = songObj.find(song =>song.title ===title );

      if(!song) {
        return
      }else{
      
        songsDelete();
        imageElement.src = song.image;
        songName.textContent = song.title;
        artistName.textContent = song.artist;
        audioElement.src = song.audio;
        audioElement.play();
    }
     
    };



songsDiv.addEventListener('click',(e)=>{
  let target = e.target.closest('.songsDisplay');
  renderCurrentSong(target);
});
searchSong.autocomplete = "on";
// an event listener for the search bar
searchSong.addEventListener('input',(e)=>{
  let searchValue = e.target.value.toLowerCase();
  let allSongs = document.querySelectorAll('.genreSongs');
   
  songsArr.forEach((input,index)=>{
    let songName = input.title.toLowerCase();
    let artistName = input.artist.toLowerCase();
    let isVisible = songName.includes(searchValue) || artistName.includes(searchValue);
    allSongs[index].classList.toggle('hide',!isVisible);
  })
})






// let songClick = document.querySelectorAll('.songsDisplay');
// songClick.forEach(input =>{
//   input.addEventListener('click',()=>{
//     let arr1 = input.textContent.split('-');
//     let title = arr1[0].trim();
//     songsDelete();
//   songObj.forEach(song => {
//     if(song.title === title){
//       imageElement.src = song.image;
//       songName.textContent = song.title;
//       artistName.textContent = song.artist;
//       audioElement.src = song.audio;
//       audioElement.play();
//     }
//   });

// })
// })



// showSongs();
// songsDiv.addEventListener('click', (e) => {
//   const target = e.target.closest('.songsDisplay');
//   if (!target || !songsDiv.contains(target)) return;

//   const arr1 = target.textContent.split('-');
//   const title = arr1[0].trim();
//   songsDelete();

//   const song = songObj.find(s => s.title === title);
//   if (!song) return;

//   imageElement.src = song.image;
//   songName.textContent = song.title;
//   artistName.textContent = song.artist;
//   audioElement.src = song.audio;
//   audioElement.play();
// });

function songsDelete() {

  //topImageContainer.remove();
  audioElement.src = '';
  imageElement.src = '';
  songName.textContent = '';
  artistName.textContent = '';

}

let buttoncontainer = document.createElement('div');
buttoncontainer.className = 'button-container';
imageContainer.appendChild(buttoncontainer);

let backwardButton = document.createElement('button');
backwardButton.className = 'backward';

backwardButton.textContent = '<<<';
buttoncontainer.appendChild(backwardButton);



let forwardButton = document.createElement('button');
forwardButton.className = 'forward';

forwardButton.textContent = '>>>';
buttoncontainer.appendChild(forwardButton);

let addtoPlaylistButton = document.createElement('button');
addtoPlaylistButton.className = 'addtoPlayList';
addtoPlaylistButton.textContent = 'Add to Playlist';
imageContainer.appendChild(addtoPlaylistButton);


forwardButton.addEventListener('click',()=>{
  let currentTitle = songName.textContent;
  let currentIndex = songsArr.findIndex(input => input.title ===currentTitle);
  let nextIndex = (currentIndex+1);
  if(nextIndex >=songsArr.length){
    return;
  }else{
    let nextSong = songsArr[nextIndex];
    songName.textContent = nextSong.title;
    audioElement.src = nextSong.audio;
  imageElement.src = nextSong.image;
  artistName.textContent = nextSong.artist;
  audioElement.play();
  }
})




backwardButton.addEventListener('click',()=>{
  let currentTitle = songName.textContent;
  let currentIndex = songsArr.findIndex(input => input.title ===currentTitle);
  let nextIndex = (currentIndex-1);
  if(currentIndex ===-1){
    let nextSong = songsArr[songsArr.length -1];
    songName.textContent = nextSong.title;
    audioElement.src = nextSong.audio;
  imageElement.src = nextSong.image;
  artistName.textContent = nextSong.artist;
  audioElement.play();
  }
  if(nextIndex < 0){
    return;
  }else{
    let nextSong = songsArr[nextIndex];
    songName.textContent = nextSong.title;
    audioElement.src = nextSong.audio;
  imageElement.src = nextSong.image;
  artistName.textContent = nextSong.artist;
  audioElement.play();
  }
});

//creating playlist buttons and containers
let playlistContainer = document.createElement('div');
playlistContainer.classList.add('playlistContainer');
let addPlayList = document.createElement('input');
addPlayList.classList.add('playlistInput');
addPlayList.type = 'text';
addPlayList.autocomplete = 'on';
addPlayList.placeholder = 'Enter the name of Playlist';

playlistContainer.appendChild(addPlayList)
let playlistDiv = document.getElementsByClassName('right')[0];
playlistDiv.appendChild(playlistContainer);

let addPlay = document.createElement('button');
addPlay.textContent = 'Add';
addPlay.classList.add('addPlay');
playlistContainer.appendChild(addPlay);

//this is a input field that searches for the playlist 
let searchPlaylist = document.createElement('input');
searchPlaylist.classList.add('searchInput','playlistSearch');
searchPlaylist.placeholder = 'Search PlayList...';
playlistContainer.appendChild(searchPlaylist);



//new container to display the songs properly and render them properly
let currentPlaylistcontainer = document.createElement('div');
currentPlaylistcontainer.classList.add('currentContainer','songsDiv');
playlistDiv.appendChild(currentPlaylistcontainer);
let currentPlaylistDiv = document.createElement('div');
currentPlaylistDiv.className = 'currentPlaylist';
currentPlaylistDiv.textContent = 'Current PlayList';
playlistContainer.appendChild(currentPlaylistDiv);

let allPlaylistDiv = document.createElement('div');
allPlaylistDiv.className = 'allPlaylist';
allPlaylistDiv.textContent = 'All PlayList';
playlistDiv.appendChild(allPlaylistDiv);

let listofPlaylists =[];
//function and event listener to add a new playlist with input and a button
function createPlaylist(){
  
  let playlistname = addPlayList.value;
  let playlistExists = document.querySelectorAll('.newPlaylist');
 
  let playlistFound = false;
  for(let play of playlistExists){
   let lastWord = play.textContent.lastIndexOf('X');
   let newWord = play.textContent.slice(0,lastWord);
   
    if(newWord=== playlistname){
      playlistFound = true;
      alert('Playlist already exists! Create a new one.');
      addPlayList.value = '';
      console.log(newWord);
      return;
    }
  };

  if(playlistname ===''){
   
    return;
  }else{
  let newPlaylistdiv = document.createElement('div');
  newPlaylistdiv.className = 'newPlaylist';
  newPlaylistdiv.textContent = playlistname;
  
  addPlayList.value = '';
  listofPlaylists.push(playlistname);
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteButton');
  deleteBtn.textContent ='X';
  //event listener to delete the playlist 
  deleteBtn.addEventListener('click',(event)=>{
  newPlaylistdiv.remove();
  listofPlaylists.splice(listofPlaylists.indexOf(playlistname),1);
  let deletePlaylistObj = playListArray.find(input=>input.name===playlistname);
  playListArray.splice(playListArray.indexOf(deletePlaylistObj),1);
  clearCurrentPlaylist();
 event.stopPropagation();
  });
  newPlaylistdiv.appendChild(deleteBtn);
  playlistDiv.appendChild(newPlaylistdiv);
  }
alert(`Your New Playlist "${playlistname}" is Created.`);
}
addPlay.addEventListener('click',createPlaylist);
addPlayList.addEventListener('keydown',(event)=>{
  if(event.key==='Enter') {
    createPlaylist();
    addPlayList.blur();
  };
})

// adding songs to the playlist
let playListArray = []; // an array that will contain all the playlists and its songs

//function that will clear the current playlist section once the new playlist is selected
function clearCurrentPlaylist(){
 let deleteElements  =  document.querySelectorAll('.currentPlaysong');
 deleteElements.forEach(input=>input.remove());
}

// selected playlistname to create an array of objects
let selectedPlaylistname ;
let selectedPlaylist;
//used to display all the songs that are in the current selected playlist

// this is a function that will handle the selected playlist and display its songs
// function selectedPlaylist(){
 
//   playlistDiv.addEventListener('click',(event)=>{
   
//    selectedPlaylist = event.target.closest('.newPlaylist');
//    clearCurrentPlaylist();
//   if(!selectedPlaylist){
//     return;
//   }
//  selectedPlaylistname = selectedPlaylist.textContent;
 
  
     

//       let selectedObject = playListArray.find(input=>input.name===selectedPlaylistname);
//       console.log(selectedObject);
//       if(!selectedObject){
//         return;
//       }
//       let songIdArray = selectedObject.songId;
//       songIdArray.forEach(input=>{
//         let songDetails = songObj.find(song=> song.id ===input );
//         if(!songDetails) return;
//         let songDiv = document.createElement('div');
//         songDiv.classList.add('songsDisplay','currentPlaysong')
//         songDiv.textContent = `${songDetails.title} - ${songDetails.artist}`;
//         currentPlaylistcontainer.appendChild(songDiv);
//       });
       
//   });
  
// }

// funtion to display the current playlist songs 
function displayCurrentplaylist(){
   
 
 let selectedObject = playListArray.find(input=>input.name===selectedPlaylistname);
      
      if(!selectedObject){
        return;
      }
      let songIdArray = selectedObject.songId;
      songIdArray.forEach(input=>{
        let songDetails = songObj.find(song=> song.id ===input );
        if(!songDetails) return;
        let songDiv = document.createElement('div');
        songDiv.classList.add('songsDisplay','currentPlaysong')
        songDiv.textContent = `${songDetails.title} - ${songDetails.artist}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteButton');
        deleteBtn.textContent ='X'
        deleteBtn.addEventListener('click',(event)=>{
          songIdArray.splice(songIdArray.indexOf(songDetails.id),1);
          songDiv.remove();
          event.stopPropagation();
        })
        songDiv.appendChild(deleteBtn);
        currentPlaylistcontainer.appendChild(songDiv);
      });
       
  };


// function that adds songs to the playlist
function addToPlaylist(){
  if(!selectedPlaylistname){
    alert('Please select a PlayList to add the Song!');
    return};
let currentSong = songName.textContent;
let currentSongObject =songObj.find(input=> input.title===currentSong);
if(!currentSongObject) return;
let songId  = currentSongObject.id;
let idObj = playListArray.find(input=>input.name === selectedPlaylistname);
if(!idObj){
  idObj = {
    name:selectedPlaylistname,
    songId:[],
  }
  playListArray.push(idObj);
}
let idArr = idObj.songId;
if(idArr.includes(songId)){
  return;
}
else{
  idArr.push(songId);
}

clearCurrentPlaylist();
displayCurrentplaylist();
}

playlistDiv.addEventListener('click',(event)=>{
  selectedPlaylist = event.target.closest('.newPlaylist');
  //returns if no playlist is selected
   
  if(!selectedPlaylist){
    return;
  }
  //this is a eventlistener and logic to highlight the active playlist
  document.querySelectorAll('.newPlaylist').forEach(p => p.classList.remove('activePlaylist'));

  // add to the clicked one
  selectedPlaylist.classList.add('activePlaylist');

  //selected plalist's name
  selectedPlaylistname = selectedPlaylist.textContent;

  clearCurrentPlaylist();
  displayCurrentplaylist();
});
addtoPlaylistButton.addEventListener('click',addToPlaylist);


//this function will render the current songs in the playlist container

currentPlaylistcontainer.addEventListener('click',(e)=>{
  let input = e.target.closest('.currentPlaysong');
  if(!input) return;
  renderCurrentSong(input);
})

searchPlaylist.addEventListener('input',(e)=>{
  let searchValue = e.target.value.toLowerCase();
  let allPlaylist = document.querySelectorAll('.newPlaylist');
 listofPlaylists.forEach((input,index)=>{
 
 let isVisible = input.includes(searchValue);
 allPlaylist[index].classList.toggle('hide',!isVisible);
 })
})

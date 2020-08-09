"use strict";
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const audio = document.querySelector('.btn');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});  
 navLinks.forEach(link =>{
     link.addEventListener('click',() => {
         document.body.classList.remove('nav-open');
     })
 });



    //  const init = function(e){
    //      let btn =document.querySelector('.btn');

    //      btn.addEventListener('click', function(){
    //          localStorage.setItem('btn', btn);
    //          window.document.location = './yourPlaylist.html';
    //      });
    //  };
    //  document.addEventListener('DOMContentLoaded', function(){
    //      init();
    //  });



    //  const myAudio = document.getElementById('sound');
    //  const myButton = document.getElementById('button');
     
     
    //  myButton.addEventListener('click', () => {
    //      window.document.location = './yourPlaylist.html';
    //      alert('we are here');
    //      document.getElementById('button');
    //      playlist.push(myAudio);
    //      alert('we are here 2')
    //      document.getElementById("result").innerHTML= playlist;
    //      alert('we are here 3')
    //  })



   
   


    
    const audios = new Audio('assets/sounds/Gunna-DIRTYDIANA.mp3');

//


    const songObj = {
        artist:'Gunna',
        songName: 'Dirty Diana',
        song: new Audio('assets/sounds/Gunna-DIRTYDIANA.mp3')
    }
    
    document.getElementById("demo").innerHTML =
   "2. " + songObj.artist + " - " + songObj.songName ;
    
    
    function playSound(){
        songObj.song.play();
       
    }
    function pauseSound(){
        songObj.song.pause();
    }
   

    let playlist = [];
    let x = 0;



    function addSongToList(){
        
        playlist[x] = songObj.artist;

        alert("Element: " + playlist[x] + " Added at index " + x);
         
        
    }
 function display_array(){
        document.getElementById("result").innerHTML = "1. " + playlist;
    }
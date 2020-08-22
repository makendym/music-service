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



   
   


    
    

//

    let songObj =  {
        artist:'Gunna',
        songName: 'Dirty Diana',
        song: new Audio('assets/sounds/Gunna-DIRTYDIANA.mp3')
    }

    let songs = [
        {
            artist:'Lil Baby',
            songName: 'The Bigger Picture',
            path: 'assets/sounds/LilBaby-TheBiggerPicture .mp3',
            song: new Audio('assets/sounds/LilBaby-TheBiggerPicture .mp3')
        },
        {
            artist:'Gunna',
            songName: 'Dirty Diana',
            path: 'assets/sounds/Gunna-DIRTYDIANA.mp3',
            song: new Audio('assets/sounds/Gunna-DIRTYDIANA.mp3')
        },
        {
            artist:'Pop Smoke',
            songName: 'The Woo',
            path: 'assets/sounds/PopSmoke-TheWooft.50Cent,RoddyRicch.mp3',
            song: new Audio('assets/sounds/PopSmoke-TheWooft.50Cent,RoddyRicch.mp3')
        },
        {
            artist:'J.I The Prince of NY',
            songName: 'Love In The Club',
            path: 'assets/sounds/J.IThePrinceofNY-LoveInTheClub.mp3',
            song: new Audio('assets/sounds/J.IThePrinceofNY-LoveInTheClub.mp3')
        },
        {
            artist:'Lil Baby',
            songName: 'Sum 2 Prove',
            path: 'assets/sounds/LilBaby-Sum2Prove.mp3',
            song: new Audio('assets/sounds/LilBaby-Sum2Prove.mp3')
        },
        {
            artist:'Sheff G ft.Sleepy Hallow',
            songName: 'Weight On Me',
            path: 'assets/sounds/WeightOnMe-SheffGft.SleepyHallow.mp3',
            song: new Audio('assets/sounds/WeightOnMe-SheffGft.SleepyHallow.mp3')
        },
        {
            artist:'Polo G',
            songName: 'Martin & Gina',
            path: 'assets/sounds/PoloG-Martin&Gina.mp3',
            song: new Audio('assets/sounds/PoloG-Martin&Gina.mp3')
        },
        {
            artist:'DaBaby ft.Roddy Richh',
            songName: 'ROCKSTAR',
            path: 'assets/sounds/DaBabyROCKSTARFTRODDYRICCH.mp3',
            song: new Audio('assets/sounds/DaBabyROCKSTARFTRODDYRICCH.mp3')
        },
        {
            artist:'Drake',
            songName: 'ToosieSlide',
            path: 'assets/sounds/Drake-ToosieSlide.mp3',
            song: new Audio('assets/sounds/Drake-ToosieSlide.mp3')
        },
        {
            artist:'PARTYNEXTDOOR ft.Drake',
            songName: 'Loyal',
            path: 'assets/sounds/PARTYNEXTDOOR-Loyalfeat. Drake.mp3',
            song: new Audio('assets/sounds/PARTYNEXTDOOR-Loyalfeat. Drake.mp3')
        },
    ]
    

   
    
    // document.getElementById("demo").innerHTML =
    // "2. " + songObj.artist + " - " + songObj.songName ;
    // document.getElementById("demo2").innerHTML = 
    // "3. " + songs[2].artist + " - " + songs[2].songName;
    
    function playSound(){
        songObj.song.play();
       
    }
    function pauseSound(){
        songObj.song.pause();
    }
   
    function playSound1(){
        songs[2].song.play();
    }
    function pauseSound1(){
        songs[2].song.pause();
    }
    

    


//     function addSongToList(){
        
//         playlist[x] = songObj.artist;

//         alert("Element: " + playlist[x] + " Added at index " + x);
         
        
//     }
//  function display_array(){
//         document.getElementById("result").innerHTML = "1. " + playlist;
//     }




    var x = 0;
    var playlist = [];    

   function add_element_to_arrays(index)
    {
        const query = document.querySelector('#song'+index);
        const song = query.dataset;
        alert(index+ ". " + song.artist + " - " + song.songName);
        playlist.push({...song});
        console.log('playlist', playlist);
        
        localStorage.setItem("List", JSON.stringify(playlist));
        
    }
   
 
function localOut(){
    
    var name = JSON.parse(localStorage.getItem("List"));
    var e = "<hr/>";   
    
   for (var i = 0; i < name.length; i++)
   {
    
     e +=  
     '<div> '+
        '<h3 class = "section__tittle section__title--intro">' +
        '<strong>' + name[i].artist + ' - '+  '</strong>'  +
        '</h3>' +
         '<h3 class = "section__tittle section__title--intro">' + 
            
            name[i].songName + 
        '</h3>' + 
        '<audio class = "section_audio" controls> ' + 
            '<source src= "'+ name[i].path + '" type="audio/mpeg">'+
        '</audio>'
        '</div>' 
        "<br/>"
   }
  console.log(name);
  document.getElementById('Demo3').innerHTML = e; 
}




    // if (typeof(Storage) !== "undefined") {
    //     localStorage('store',JSON.stringify(playlist));
    //     } else {
    //         document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
    // }
    //     JSON.parse(window.localStorage.getItem('store'));


function display_songs()
{
   var e;   
    console.log('song')
   for (let i=0; i < songs.length; i++)
   {
    let song = songs[i];
     e =
    '<div> '+
        '<h3 class = "section__tittle section__title--intro">' +
        '<strong>' + song.artist + ' - '+  '</strong>'  +
        '</h3>' +
         '<h3 class = "section__tittle section__title--intro">' + 
            
            song.songName + 
        '</h3>' + 
        '<audio class = "section_audio" controls> ' + 
            '<source src= "'+ song.path + '" type="audio/mpeg">'+
        '</audio>'+
        '<input class="btn" '+
            'id="song'+i+'" '+
            'value="Add to Playlist" '+
            'data-song-name="'+song.songName+'" '+
            'data-artist="'+song.artist+'" '+
            'data-path="'+song.path+'" '+
            'onClick="add_element_to_arrays('+i+');"></input>'+
    '</div> <br />';
    console.log('customHtml', e);
    document.getElementById("Result").innerHTML += e;
   }
   
}


display_songs();

function display_arrays()
{
 
   var e = "<hr/>";   
    
   for (var i = 0; i < playlist.length; i++)
   {
     e +=  
     '<div> '+
        '<h3 class = "section__tittle section__title--intro">' +
        '<strong>' + playlist[i].artist + ' - '+  '</strong>'  +
        '</h3>' +
         '<h3 class = "section__tittle section__title--intro">' + 
            
            playlist[i].songName + 
        '</h3>' + 
        '<audio class = "section_audio" controls> ' + 
            '<source src= "'+ playlist[i].path + '" type="audio/mpeg">'+
        '</audio>'
        '</div>' 
        "<br/>"
   }
   document.getElementById("Demo").innerHTML = e;
   
}
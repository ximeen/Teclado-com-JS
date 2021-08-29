//  Logic
//--------------

// Get all keys 

const keys = document.querySelectorAll(' .key')

// Play notes
function playNote(event) {
    // Key code 
    let audioKeyCode = getKeyCode(event);
    
    // Typed or pressed key

    const key = document.querySelector(`.key[data-key ="${audioKeyCode}"]`)

    // if key exists 

    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey){
        return;
    }
    addPlayingClass(key)
    playAudio(audioKeyCode)
   
}

function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"

    if (isKeyboard){
        keyCode = event.keyCode

    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode;
}

function addPlayingClass(key){
    key.classList.add('playing')
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}


function playAudio(audioKeyCode){
 // play audio 

 const audio = document.querySelector(`audio[data-key ="${audioKeyCode}"]`)

 audio.currentTime = 0;
 audio.play();
}


function registerEvents(){
// click with mouse 

    keys.forEach(function(key){
        key.addEventListener('click', playNote)
        key.addEventListener("transitionend", removePlayingClass)
    
    })
    
    // keyboard type 
    
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)
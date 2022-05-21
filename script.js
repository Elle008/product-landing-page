// const videoPlayer = document.querySelector('.video-player')
// const video = videoPlayer.querySelector('.video')
// const playButton = videoPlayer.querySelector('.play-button')
// const pauseButton = videoPlayer.querySelector('.pause-button')

// // playButton.addEventListener('click', (event) => {
// //     if (video.pause) {
// //         video.play()
// //         event.target.textContent = '▌▌'
// //     }

// //     else {
// //         video.pause()
// //         event.target.textContent = '►'
// //     }
// // })

// playButton.addEventListener("click", function() {
//     if (video.pause) {
//         video.play()
//         playButton.style.display = 'none'
//     }
//   });

// video.addEventListener('onmouseover', function () {
//     if (video.pause) {
//         playButton.style.display = 'block'
//     }

//     else {
//         pauseButton.style.display = 'block'
//     }
// })


// popup modal
const myPopup = document.querySelector('#modal-section');
const closeMyPopup = document.querySelector('.close');

function showPopUp(){
	myPopup.style.display="block";
}
setTimeout(showPopUp, 10000);

closeMyPopup.onclick = function () {
    myPopup.style.display='none';
}

const header = document.querySelector('#header');
const sticky = document.querySelector('.sticky').classList;

$(window).scroll(function() {
    if (this.scrollTop > 20) {
        header.classList.add = ('sticky');
    }
    else {
        header.classList.remove = ('sticky');
    }
})

(() => {
  const searchParams = new URLSearchParams(window.location.search)
  const email = searchParams.get('email')
  console.log(email)
  const domName = document.querySelector('data-name')
  console.log(domName)

  if(domName) {
    domName.textContent = 'Yey! We sent an email to ' + email
  }
})()

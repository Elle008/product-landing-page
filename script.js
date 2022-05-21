
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

// thank you page
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

// sticky header
// const header = document.querySelector('#header');
// const sticky = document.querySelector('.sticky').classList;

// $(document).scroll(function() {
//     if (this.scrollTop > 100) {
//         header.classList.add = ('sticky');
//     }
//     else {
//         header.classList.remove = ('sticky');
//     }
// })
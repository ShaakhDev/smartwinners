import { cards, accordionItems } from './objects.js';
const cardBox = document.querySelector('#cardBox');
const upcoming = document.querySelector('#upcomingLotteryBox');
const playOnline = document.querySelector('#playOnlineCardBox');
const winnerBox = document.querySelector('#winnersCardBox');
const accordion = document.querySelector('#accordion');

function renderCards(cards) {
    cardBox.innerHTML = cards.map((card, index) => {
        return `
        <div class="card d-flex a-center ">
            <div class="card-img">
                <img src="./images/card-${index + 1}.svg" alt="card">
            </div>
            <div class="card-content ">
                <div class="head d-row j-between">
                    <span>${card.title}</span>
                    <a class="t-underline" href="#">${card.action}</a>
                </div>
                <div class="body">
                    <span>${card.description}</span>
                </div>
            </div>
         </div>
        
        `
    }).join(' ')
}

function renderUpcoming() {
    for (let i = 1; i < 4; i++) {
        upcoming.innerHTML += `
        <div class="upcoming-lottery-card d-column">
              <div class="head d-row j-between a-center">
                  <div class="card-img">
                      <img src="./images/mega-${i}.svg" alt="card">
                  </div>
                  <div class="card-info">
                      <img src="./images/Group.svg" alt="flag">
                      <span>Mega millions</span>
                      <p>$94 000 000</p>
                  </div>
              </div>
              <div class="body a-center">
                  <div class="play-button">
                      <button>Play now</button>
                  </div>
                  <div class="time d-row a-center">
                      <img src="./images/card-alarm.svg" alt="clock-icon">
                      <span>1:22:01</span>
                  </div>
              </div>
        </div>
        `
    }
}

function renderPlayOnline() {
    for (let i = 1; i <= 10; i++) {
        playOnline.innerHTML += `
        <div class="play-online-card">
        <span class="star">&starf;</span>
        <div class="head d-column a-center ">
            <div class="card-img">
                <img src="./images/play-online.svg" alt="card">
            </div>
            <div class="card-info">
                <img src="./images/Group.svg" alt="flag">
                <span>Mega millions</span>
                <p>$94 000 000</p>
            </div>
        </div>
        <div class="body d-column a-center">
            <div class="time">
                 <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.16577 5H10.1658V9H13.1658V11H8.16577V5Z" fill="white"/>
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.165771 9C0.165771 4.02944 4.19521 0 9.16577 0C14.1363 0 18.1658 4.02944 18.1658 9C18.1658 13.9706 14.1363 18 9.16577 18C4.19521 18 0.165771 13.9706 0.165771 9ZM2.16577 9C2.16577 5.13401 5.29978 2 9.16577 2C13.0318 2 16.1658 5.13401 16.1658 9C16.1658 12.866 13.0318 16 9.16577 16C5.29978 16 2.16577 12.866 2.16577 9Z" fill="white"/>
                 </svg>
                <span>1:22:01</span>
            </div>
            <div class="play-button">
                <button>Play now</button>
            </div>
        </div>
    </div>
        `
    }
}

function renderWinnersCard() {

    for (let i = 1; i <= 10; i++) {
        winnerBox.innerHTML += `
           <div class="card d-row">
                <img src="./images/winner.svg" alt="winner icon">
                <div class="info d-column j-center">
                <span>
                20.11.2021
                </span>
                 <p><img src="./images/card-Country.svg" alt="flag">J.J won P175</p>
                 <span>in 7 ИЗ 49 draw #13476</span>
                </div>
            </div>
        `
    }
}



function renderAccordion() {
    accordionItems.map((item, index) => {
        accordion.innerHTML += `
        <div class="accordion-item">
             <div class="accordion-header d-row a-center j-between">
                 <h3>${item.question}</h3>
                 <img class="accordion-arrow" src="./images/arrow.svg" alt="arrow">
             </div>
             <div class="accordion-body ">
                 <p>
                    ${item.answer}
                 </p>
             </div>
        </div>
        `

    })
}

renderCards(cards);
renderUpcoming();
renderPlayOnline();
renderWinnersCard();
renderAccordion();
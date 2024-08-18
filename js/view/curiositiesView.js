import { navigate } from "../router.js";

function render() {document.body.innerHTML = ""
// Create a container div
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'center';
  container.style.minHeight = '100vh';
  container.style.padding = '20px';



// Create the header
const header = document.createElement('h1');
header.innerText = 'HIGHLIGHTS FOR 1992';
container.appendChild(header);

// Set the body style

container.setAttribute("id", "olympicContainer")
container.style.backgroundImage = 'url("../js/resources/back.png")';


// Create the cards content
const cardsContent = [
  {
    title: 'With who did Monserrat Caballé perform the opening song of 1992 Barcelona Olympiad Games?',
    imgSrc: '../js/resources/montserrat.jpg',
    imgAlt: 'question1',
    subtitle: 'Correct Answer - Freddie Mercury',
    text: 'Montserrat Caballé performed the 1992 Barcelona Olympic Games opening song, "Barcelona," with Freddie Mercury, making it an iconic anthem for the event.'
  },
  {
    title: 'What country won the most number of medals in 1992 Barcelona Olympiad games?',
    imgSrc: '../js/resources/unifiedTeam.jpg',
    imgAlt: 'question2',
    subtitle: 'Correct Answer - Unified Team (Soviet Union)',
    text: 'The Unified Team (ex-USSR countries that competed together because the Soviet Union broke up several months before the start of the Games) won the most medals overall, 112, as well as the most gold medals, 45.'
  },
  {
    title: 'What sport would Freddy play if he was an olympic athlete?',
    imgSrc: '../js/resources/FreddieMercury.jpg',
    imgAlt: 'question3',
    subtitle: 'Correct Answer - Boxing',
    text: 'Freddie was sent to a boarding school where he gained interest in music and some sports, especially boxing. He was brilliant in boxing but his mother didn\'t like the sport because it was too violent, which led him to stop boxing.'
  },
  {
    title: 'What was the 1992 Olympiad games mascot?',
    imgSrc: '../js/resources/cobi1992.jpg',
    imgAlt: 'question4',
    subtitle: 'Correct Answer - Cobi',
    text: 'Cobi is a humanized Pyrenean mountain dog in a cubist style. While his expression and three spiky hairs are the same, he has an impressively large wardrobe.'
  },
  {
    title: 'How many extra teeth grew in Freddy’s mouth as he grew up?',
    imgSrc: '../js/resources/dentesfreddy.jpeg',
    imgAlt: 'question5',
    subtitle: 'Correct Answer - Four',
    text: 'Freddie Mercury had four extra teeth that grew in his mouth as he grew up, which contributed to his distinctive overbite.'
  },
  {
    title: 'What’s Freddy\'s favorite pet animal?',
    imgSrc: '../js/resources/catfreddy.jpeg',
    imgAlt: 'question6',
    subtitle: 'Correct Answer - Cat',
    text: 'Cats were known to be Freddie Mercury\'s family. He adopted a lot of cats from shelters and hospitals in order to save their lives.'
  }
];

// Function to create a card
function createCard(cardContent) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.width = '50rem';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.innerText = cardContent.title;

  const cardImg = document.createElement('img');
  cardImg.src = cardContent.imgSrc;
  cardImg.className = 'card-img-top';
  cardImg.alt = cardContent.imgAlt;

  const cardSubtitle = document.createElement('h4');
  cardSubtitle.className = 'card-subtitle mb-2 text-muted';
  cardSubtitle.innerText = cardContent.subtitle;

  const cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.innerText = cardContent.text;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardImg);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  return card;
}

// Append cards to the container
cardsContent.forEach(cardContent => {
  container.appendChild(createCard(cardContent));
});

const cabinetButton = document.createElement("button");
    cabinetButton.setAttribute("id","button");
    cabinetButton.textContent = "RETURN TO THE TIME MACHINE";
    container.appendChild(cabinetButton);
    cabinetButton.style.fontSize = "48px";
    cabinetButton.style.textAlign = "center";
    cabinetButton.style.position = "absolute";
    cabinetButton.style.top = "95%";
    cabinetButton.style.left = "28%";

    cabinetButton.addEventListener("click",() => {
        navigate("/")
    })

// Create the footer
const footer = document.createElement('footer');
footer.style.margin = "120px";
footer.innerHTML = '&copy; Dream Team, 2024 HACKATON @ codeforall_';
container.appendChild(footer);


};
export default { render };
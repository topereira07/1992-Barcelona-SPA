
function render() {
  document.body.innerHTML = ""
// Create a container div
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
 

  // Create and style elements
  const header = document.createElement('h2');

  container.setAttribute("id", "olympicContainer")

  container.style.backgroundImage = 'url("../js/resources/back.png")';

  const img = document.createElement('img');
  img.src = '../js/resources/2008_TMWeb.jpg';
  img.alt = 'The Time Machine';
  img.style.width = "1000px";
  img.style.heigth = "16 00px";

  const welcomeText = document.createElement('h2');
  welcomeText.textContent = 'YOU WERE BROUGHT BACK IN TIME TO THE YEAR 1992';

  header.appendChild(img);
  header.appendChild(welcomeText);

  const timeline = document.createElement('div');
  timeline.className = 'timeline';

  const events = [
      { date: 'January, 1992', title: 'AT&T Video Phone', description: 'In 1992 AT&T introduced the VideoPhone 2500, the world\'s first colour videophone, that cost 1499$.' },
      { date: 'February, 1992', title: 'Maastricht Treaty', description: 'The Maastricht Treaty is signed, founding the European Union.' },
      { date: 'March, 1992', title: 'MichelAngelo Virus', description: 'We witnessed the Michelangelo virus(or March6) outbreak and the media hype in advance.' },
      { date: 'April, 1992', title: 'DisneyLand Paris', description: 'The opening of Disneyland Paris in Marne-la-Vallee, France.' },
      { date: 'May, 1992', title: 'Astronauts walk in Space', description: '3 astronauts walk in space at the same time, for the first time.' },
      { date: 'June, 1992', title: 'UEFA Euro 1992', description: 'Sweden hosts the UEFA Euro 1992 football tournament, which is won by Denmark.' },
      { date: 'July 25, 1992', title: 'Opening Ceremony', description: 'The OLYMPIADS start NOW:' },
  ];

  events.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'timeline-event';

      const eventTitle = document.createElement('h2');
      eventTitle.textContent = `${event.date}: ${event.title}`;

      const eventDescription = document.createElement('p');
      eventDescription.textContent = event.description;

      eventDiv.appendChild(eventTitle);
      eventDiv.appendChild(eventDescription);
      timeline.appendChild(eventDiv);
  });

  const redirectButton = document.createElement('button');
  redirectButton.className = 'redirect-button';
  redirectButton.textContent = 'YOU HAVE BEEN SUMMONED';
  redirectButton.style.width = "1000px"

  const audioControls = document.createElement('div');
  audioControls.className = 'audio-controls';

  const playButton = document.createElement('button');
  playButton.className = 'play-button';
  playButton.textContent = 'Play Audio';

  const pauseButton = document.createElement('button');
  pauseButton.className = 'pause-button';
  pauseButton.textContent = 'Pause Audio';

  audioControls.appendChild(playButton);
  audioControls.appendChild(pauseButton);

  const footer = document.createElement('footer');
  footer.innerHTML = '&copy; Dream Team, 2024 HACKATON @ codeforall_';

  // Append all elements to the container
  container.appendChild(header);
  container.appendChild(timeline);
  container.appendChild(redirectButton);
  container.appendChild(audioControls);
  container.appendChild(footer);

  // Apply CSS styles using JavaScript
  // Container styles
container.style.fontFamily = 'Arial, sans-serif';
  container.style.color = '#333';
  container.style.padding = '20px';

  // Header styles
  header.style.textAlign = 'center';

  header.style.marginBottom = '20px';

  header.style.textTransform = "uppercase";
header.style.fontFamily = "verdana";
header.style.fontWeight = "700";
header.style.color = "white";
header.style.textShadow = "1px 1px 1px black, 1px 2px 1px black, 1px 3px 1px black, 1px 4px 1px black, 1px 5px 1px black, 1px 6px 1px black, 1px 7px 1px black, 1px 8px 1px black, 1px 9px 1px black, 1px 10px 1px black, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)";   


  // Timeline styles
  timeline.style.margin = '20px 0';

  // Timeline event styles
  const timelineEvents = document.querySelectorAll('.timeline-event');
  timelineEvents.forEach(event => {
      event.style.marginBottom = '15px';
  });

  const timelineHeadings = document.querySelectorAll('.timeline-event h2');
  timelineHeadings.forEach(h2 => {
      h2.style.fontSize = '20px';
      h2.style.marginBottom = '5px';
  });

  const timelineParagraphs = document.querySelectorAll('.timeline-event p');
  timelineParagraphs.forEach(p => {
      p.style.margin = '0';
  });

  // Button styles
  redirectButton.style.display = 'block'; 
  redirectButton.style.padding = '10px';
  redirectButton.style.fontSize = '18px';
  redirectButton.style.backgroundColor = '#4CAF50';
  redirectButton.style.color = 'white';
  redirectButton.style.border = 'none';
  redirectButton.style.cursor = 'pointer';
  redirectButton.style.marginTop = '20px';

  redirectButton.addEventListener('mouseover', () => {
      redirectButton.style.backgroundColor = '#45a049';
  });

  redirectButton.addEventListener('mouseout', () => {
      redirectButton.style.backgroundColor = '#4CAF50';
  });

  // Audio controls styles
  audioControls.style.marginTop = '20px';
  audioControls.style.textAlign = 'center';

  const audioControlButtons = audioControls.querySelectorAll('button');
  audioControlButtons.forEach(button => {
      button.style.margin = '5px';
      button.style.padding = '10px';
      button.style.fontSize = '16px';
      button.style.cursor = 'pointer';
  });

  // Footer styles
  footer.style.marginTop = '30px';
  footer.style.textAlign = 'center';
  footer.style.fontSize = '14px';
  footer.style.color = '#777';

  // Add event listeners
  redirectButton.addEventListener('click', redirect);
  playButton.addEventListener('click', playAudio);
  pauseButton.addEventListener('click', pauseAudio);
}

// Placeholder functions
function redirect() {
    window.location.href = "/countries";
}

function playAudio() {
  const audio = document.getElementById('background-audio');
  if (!audio) {
    console.log("audio not found");
    return;
  }    
    audio.play();
}

function pauseAudio() {
  const audio = document.getElementById('background-audio');
  if (audio) {
      audio.pause();
  }
}

export default { render };

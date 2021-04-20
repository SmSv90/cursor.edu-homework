let currentPlanetPage = 1;

const filmButton = document.getElementById('getFilm');
const planetButton = document.getElementById('getPlanets');
const characters = document.querySelector('.characters');
const planets = document.querySelector('.planets');
const nextButton = document.getElementById('next');


// button which adds characters
filmButton.addEventListener('click', (e) => {
  const number = document.getElementById('film-id').value;

  if (planets) {
    planets.classList.add('hidden');
  }
  characters.classList.remove('hidden');

  if (document.querySelector('.character')) {
    document.querySelector('.characters').innerHTML = '';
    getPersonsInfo(number);
  } else {
    getPersonsInfo(number);
  }
});

// button which adds planets
planetButton.addEventListener('click', (e) => {
  if (characters) {
    characters.classList.add('hidden');
  }
  planets.classList.remove('hidden');

  if (document.querySelector('.planets__name')) {
    document.querySelector('.planets').innerHTML = '';
    getPlanets(currentPlanetPage);
  } else {
    getPlanets(currentPlanetPage);
  }
});

// button which toggles planets
nextButton.addEventListener('click', (e) => {
  if (planets) {
    document.querySelector('.planets').innerHTML = '';
    currentPlanetPage++;
  }
  getPlanets(currentPlanetPage);
});


function getPersonsInfo(number) {
  fetch(`https://swapi.dev/api/films/${number}/`)
    .then((response) => response.json())
    .then((data) => {
      data.characters.forEach(person => {
        if (person.slice(0, 5) === 'http:') {
          person = person.replace('http', 'https')
        }
        fetch(person)
          .then((response) => response.json())
          .then((person) => createCharacterCard(person))
      });
    })
}

async function getPlanets(currentPlanetPage) {
  fetch(`https://swapi.dev/api/planets/?page=${currentPlanetPage}`)
    .then((response) => response.json())
    .then((data) => {
      for (const planet of data.results) {
        createPlanetsList(planet);
      }
    })
}

function createCharacterCard(person) {
  const character = document.createElement('div');
  const characterName = document.createElement('div');
  const characterBirth = document.createElement('div');
  const characterGender = document.createElement('div');

  const male = document.createElement('img');
  const female = document.createElement('img');
  const robot = document.createElement('img');

  male.src = "assets/icons/male.png";
  female.src = "assets/icons/female.png";
  robot.src = "assets/icons/robot.png";

  character.classList.add('character');
  characterGender.classList.add('character__gender');

  characterName.innerHTML = '<b>Name: </b>' + person.name;
  characterBirth.innerHTML = '<b>Year of birth: </b>' + person.birth_year;
  characterGender.innerHTML = '<b>Gender: </b>';

  switch (person.gender) {
    case 'male':
      characterGender.append(male);
      break;
    case 'female':
      characterGender.append(female);
      break;
    default:
      characterGender.append(robot);
      break;
  }

  characters.append(character);
  character.append(characterName);
  character.append(characterBirth);
  character.append(characterGender);
}

function createPlanetsList(planet) {
  const planetName = document.createElement('li');
  planetName.classList.add('planets__name');
  planetName.innerHTML = planet.name;
  planets.append(planetName);
}
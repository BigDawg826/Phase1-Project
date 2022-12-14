const heroes = document.querySelectorAll('ul li')
heroes.forEach(element => {
  //console.log(element.dataset.id)
  element.addEventListener('click', () => getHero(element.dataset.id))
});

function getHero(id) {
  fetch(`http://localhost:3000/marvel-heroes/${id}`)
  .then(resp => resp.json())
  .then(hero => createCard(hero))
}

function createCard(hero){
  const superHeroInfo = document.querySelector('#superhero-image')
  let child = superHeroInfo.lastElementChild; 
        console.log('children outside of loop', child)
        while (child) { 
          console.log('children', child)
            superHeroInfo.removeChild(child);
            child = superHeroInfo.lastElementChild;
        }
  const picture = document.createElement('img')
  picture.src = hero.image.url
  picture.id = 'heroPhoto'
  const name = document.createElement('p')
  name.textContent = hero.name
  superHeroInfo.append(picture, name)
}









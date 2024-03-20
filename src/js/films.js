
const filmData = document.querySelector('#starWarsList');

const filmImages = {
    "A New Hope": "assets/A-new-hope.jpg",
    "The Empire Strikes Back": "assets/The-empire-strikes-back.jpg",
    "Return of the Jedi": "assets/Return-of-the-jedi.jpg",
    "The Phantom Menace": "assets/The-phantom-menache.png",
    "Attack of the Clones": "assets/Attack-of-the-clones.webp",
    "Revenge of the Sith": "assets/Revenge-of-the-sith.png",
    "The Force Awakens": "assets/The-force-awakens.png",
    "The Last Jedi": "assets/The-last-jedi.webp",
    "The Rise of Skywalker": "assets/The-rise-of-skywalker.png"
};

const fetchStarWars = async()=> {
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json();
    console.log(data.results);
    renderUsers(data.results)
}

fetchStarWars()

const renderUsers = (films)=> {
    films.forEach((film) =>{
        
        // Creating Element
        const li = document.createElement('li');
        const title = document.createElement('h2');
        const episode = document.createElement("span");
        const director = document.createElement("span");
        const releaseDate = document.createElement("span");
        const openingCrawl = document.createElement("p");
        const image = document.createElement("img");

        //Appending Elements
        filmData.append(li);
        li.append(title, episode, director, releaseDate, openingCrawl, image);

        //Adding Classes to the created Elements
        li.classList.add('createdList');
        title.classList.add('filmTitle');
        episode.classList.add('filmEpisode');
        director.classList.add("filmDirector");
        releaseDate.classList.add("filmReleaseDate");
        image.classList.add("filmImage");

        //Setting the content of the created elements
        title.textContent = `Name: ${film.title}`;
        episode.textContent = `Episode: ${film.episode_id}`;
        director.textContent = `Director: ${film.director}`;
        releaseDate.textContent = `Release Date: ${film.release_date}`;
        openingCrawl.textContent = `Opening Crawl: ${film.opening_crawl}`;

         // Set image source based on film title
         const imageUrl = filmImages[film.title];
         if (imageUrl) {
             image.src = imageUrl;
             image.alt = `${film.title} Image`;
         }

        //image.src = `assets/A-new-hope.jpg`;
        //image.alt = `${film.name} Image`;
    });
}

const filmData = document.querySelector('#starWarsList');

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

        //Appending Elements
        filmData.append(li);
        li.append(title, episode, director, releaseDate, openingCrawl);

        //Adding Classes to the created Elements
        li.classList.add('createdList');
        title.classList.add('filmTitle');
        episode.classList.add('filmEpisode');
        director.classList.add("filmDirector");
        releaseDate.classList.add("filmReleaseDate");

        //Setting the content of the created elements
        title.textContent = `Name: ${film.title}`;
        episode.textContent = `Episode: ${film.episode_id}`;
        director.textContent = `Director: ${film.director}`;
        releaseDate.textContent = `Release Date: ${film.release_date}`;
        openingCrawl.textContent = `Opening Crawl: ${film.opening_crawl}`;
    });
}
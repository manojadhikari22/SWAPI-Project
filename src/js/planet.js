const planetsData = document.querySelector('#starWarsList');

const fetchStarWars = async()=> {
    try {
        const response = await fetch('https://swapi.dev/api/planets')
        const data = await response.json();
        console.log(data.results);
        renderUsers(data.results)
    } catch (error) {
        
    }
    
}

fetchStarWars()

const renderUsers = (planets)=> {
    planets.forEach((planet) =>{
        
        // Creating Element
        const li = document.createElement('li');
        const name = document.createElement('h2');
        const population = document.createElement("span");
        const climate = document.createElement("span");
        const created = document.createElement("span");
        const gravity = document.createElement("span");
        const image = document.createElement("img")

        //Appending Elements
        planetsData.append(li);
        li.append(name, population, climate, created, gravity, image);

        //Adding Classes to the created Elements
        li.classList.add('createdList');
        name.classList.add('planetName');
        population.classList.add('planetPopulation');
        climate.classList.add("planetClimate");
        created.classList.add("planetCreated");
        gravity.classList.add("planetGravity");
        image.classList.add("planetImage");

        //Setting the content of the created elements
        name.textContent = `Name: ${planet.name}`;
        population.textContent = `Population: ${planet.population}`;
        climate.textContent = `Climate: ${planet.climate}`;
        created.textContent = `Created: ${planet.created}`;
        gravity.textContent = `Gravity: ${planet.gravity}`;

        image.src = `assets/Planet.jpg`;
        image.alt = `${planet.name} Image`;
    });
}
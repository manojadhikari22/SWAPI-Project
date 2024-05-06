const peopleData = document.querySelector('#starWarsList');

const peopleImages = {
    "Luke Skywalker": "assets/A-new-hope.jpg",
    "C-3PO": "assets/c-3po.jpeg",
    "R2-D2": "assets/R2D2.avif",
    "Darth Vader": "assets/Darth-vader.jpeg",
    "Leia Organa": "assets/Leia-organ.avif",
    "Owen Lars": "assets/owen-lars.jpeg",
    "Beru Whitesun lars": "assets/beru.jpg",
    "R5-D4": "assets/R5-D4.webp",
    "Biggs Darklighter": "assets/biggs-and-luke.avif",
    "Obi-Wan Kenobi": "assets/Obi-wan.jpg"
};

const fetchStarWars = async()=> {
    const response = await fetch('https://swapi.dev/api/people')
    const data = await response.json();
    console.log(data.results);
    renderUsers(data.results)
}

fetchStarWars()

const renderUsers = (peoples)=> {
    peoples.forEach((people) =>{
        
        // Creating Element
        const li = document.createElement('li');
        const name = document.createElement('h2');
        const birthYear = document.createElement("span");
        const gender = document.createElement("span");
        const height = document.createElement("span");
        const hairColor = document.createElement("span");
        const image = document.createElement("img")

        //Appending Elements
        peopleData.append(li);
        li.append(name, birthYear,gender, height, hairColor, image);

        //Adding Classes to the created Elements
        li.classList.add('createdList');
        name.classList.add('peopleName');
        birthYear.classList.add('peopleBirthYear');
        gender.classList.add("peopleGender");
        height.classList.add("peopleHeight");
        hairColor.classList.add("peopleHairColor");
        image.classList.add("peopleImage");

        //Setting the content of the created elements
        name.textContent = `Name: ${people.name}`;
        birthYear.textContent = `D.O.B: ${people.birth_year}`;
        gender.textContent = `Gender: ${people.gender}`;
        height.textContent = `Height: ${people.height}`;
        hairColor.textContent = `Hair Color: ${people.hair_color}`;
        
         // Set image source based on film title
         const imageUrl = peopleImages[people.name];
         if (imageUrl) {
             image.src = imageUrl;
             image.alt = `${people.name} Image`;
         }

        //image.src = `assets/Luke.webp`;
        //image.alt = `${people.name} Image`;
    });
}
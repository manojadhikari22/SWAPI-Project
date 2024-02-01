const peopleData = document.querySelector('#starWarsList');

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

        //Appending Elements
        peopleData.append(li);
        li.append(name, birthYear,gender, height, hairColor);

        //Adding Classes to the created Elements
        li.classList.add('createdList');
        name.classList.add('peopleName');
        birthYear.classList.add('peopleBirthYear');
        gender.classList.add("peopleGender");
        height.classList.add("peopleHeight");
        hairColor.classList.add("peopleHairColor");

        //Setting the content of the created elements
        name.textContent = `Name: ${people.name}`;
        birthYear.textContent = `D.O.B: ${people.birth_year}`;
        gender.textContent = `Gender: ${people.gender}`;
        height.textContent = `Height: ${people.height}`;
        hairColor.textContent = `HairColor: ${people.hair_color}`;
    });
}
const vechilesData = document.querySelector('#starWarsList');

const fetchStarWars = async()=> {
    const response = await fetch('https://swapi.dev/api/vehicles')
    const data = await response.json();
    console.log(data.results);
    renderUsers(data.results)
}

fetchStarWars()

const renderUsers = (vehicles)=> {
    vehicles.forEach((vehicle) =>{
        
        // Creating Element
        const li = document.createElement('li');
        const name = document.createElement('h2');
        const model = document.createElement("span");
        const manufacturer = document.createElement("span");
        const passengers = document.createElement("span");
        const vehicleClass = document.createElement("span");
        const image = document.createElement("img");

        //Appending Elements
        vechilesData.append(li);
        li.append(name, model, manufacturer, passengers, vehicleClass, image);

        //Adding Classes to the created Elements
        li.classList.add('createdList');
        name.classList.add('vehicleName');
        model.classList.add('vehicleModel');
        manufacturer.classList.add("vehicleManufacturer");
        passengers.classList.add("vehiclePassenger");
        vehicleClass.classList.add("vehicleClass");
        image.classList.add("vehicleImage");

        //Setting the content of the created elements
        name.textContent = `Name: ${vehicle.name}`;
        model.textContent = `Model: ${vehicle.model}`;
        manufacturer.textContent = `Manufacturer: ${vehicle.manufacturer}`;
        passengers.textContent = `Passengers: ${vehicle.passengers}`;
        vehicleClass.textContent = `Class: ${vehicle.vehicle_class}`;

        image.src = `assets/Vehicles.webp`;
        image.alt = `${vehicle.name} Image`;
    });
}
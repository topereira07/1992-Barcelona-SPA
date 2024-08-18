import { getCountryImg } from "../service/chooseCountryService.js";
import { navigate } from "../router.js";

let selectedCountry = "us-sc";

function render(countries) {

    
    // Create a container div
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    
    container.setAttribute("id","olympicContainer")
    container.style.backgroundImage = 'url("../js/resources/back.png")';
    
    const countriesContainer = document.createElement("div");
    countriesContainer.setAttribute("id", "countriesContainer");
    countriesContainer.style.display = 'flex';
    countriesContainer.style.flexWrap = 'wrap';
    countriesContainer.style.justifyContent = 'center';
    countriesContainer.style.marginBottom = '20px';

    populateCountries(countries, countriesContainer);

    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nameDiv");
    nameDiv.style.textAlign = 'center';
    nameDiv.style.marginTop = '20px';

    const nameText = document.createElement("p");
    nameText.textContent = "Choose Player Name";
    nameText.style.marginBottom = '10px';

    const nameInput = document.createElement("input");
    nameInput.setAttribute("id", "nameInput");
    nameInput.style.fontSize = '16px';
    nameInput.style.padding = '8px';
    nameInput.style.marginRight = '10px';
    nameInput.style.borderRadius = '4px';
    nameInput.style.border = '1px solid #ddd';

    const nameButton = document.createElement("button");
    nameButton.setAttribute("id","button")
    nameButton.textContent = "Start";
    nameButton.addEventListener("click", startQuizz);

    nameButton.addEventListener("mouseover", () => {
        nameButton.style.backgroundColor = '#0056b3';
    });

    nameButton.addEventListener("mouseout", () => {
        nameButton.style.backgroundColor = '#007bff';
    });

    nameDiv.appendChild(nameText);
    nameDiv.appendChild(nameInput);
    nameDiv.appendChild(nameButton);

    container.appendChild(countriesContainer);
    container.appendChild(nameDiv);
}

function populateCountries(countries, countriesContainer) {
    Object.keys(countries).forEach((countryKey) => {
        const countryDiv = document.createElement("div");
        countryDiv.setAttribute("class", "countryDiv");
        countryDiv.setAttribute("id", countryKey);
        countryDiv.style.border = '1px solid #ddd';
        countryDiv.style.borderRadius = '8px';
        countryDiv.style.padding = '10px';
        countryDiv.style.margin = '10px';
        countryDiv.style.textAlign = 'center';
        countryDiv.style.cursor = 'pointer';
        countryDiv.style.transition = 'background-color 0.3s ease';
        countryDiv.addEventListener("click", selectCountry);

        const countryImg = document.createElement("img");
        countryImg.src = getCountryImg(countryKey);
        countryImg.style.width = '100px';
        countryImg.style.height = '100px';
        countryImg.style.objectFit = 'cover';
        countryImg.style.borderRadius = '50%';

        const countryName = document.createElement("h4");
        countryName.textContent = countries[countryKey];

        countryDiv.appendChild(countryImg);
        countryDiv.appendChild(countryName);

        countriesContainer.appendChild(countryDiv);
    });
}

function selectCountry(event) {
    event.stopPropagation();

    if (selectedCountry) {
        const previousSelection = document.getElementById(selectedCountry);
        if (previousSelection) {
            previousSelection.style.backgroundColor = "grey";
        }
    }

    selectedCountry = event.currentTarget.id;
    const selectedDiv = document.getElementById(selectedCountry);
    if (selectedDiv) {
        selectedDiv.style.backgroundColor = "blue";
    }
}

function startQuizz() {
    const nameInput = document.getElementById("nameInput").value;  

    if (nameInput === null || nameInput === undefined || nameInput === "") {
        window.alert("Choose a name");
        return;
    }

    sessionStorage.setItem("country", selectedCountry);
    sessionStorage.setItem("playerName", nameInput);

    // Ensure navigate function is correctly used
    navigate("/olympics");
}

export default { render };

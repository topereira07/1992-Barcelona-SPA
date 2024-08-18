import { navigate } from "../router.js";
import gameView from "./gameView.js";
function render() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const hallOfFameContainer = document.createElement("div");
    container.appendChild(hallOfFameContainer)

    container.setAttribute("id", "hallOfFameContainer") 
    const title = document.createElement("h3");
    
    container.appendChild(title);

    const cabinetButton = document.createElement("button");
    cabinetButton.setAttribute("id","button");
    cabinetButton.textContent = "VISIT THE CABINET OF CURIOSITIES";
    hallOfFameContainer.appendChild(cabinetButton);
    cabinetButton.style.fontSize = "48px";
    cabinetButton.style.textAlign = "center";
    cabinetButton.style.position = "absolute";
    cabinetButton.style.top = "10%";
    cabinetButton.style.left = "25%";

    cabinetButton.addEventListener("click",() => {
        navigate("/cabinetofcuriosities")
    })
  

    if (sessionStorage.getItem("result") === "1") {
        title.textContent = "YOU ARE THE CHAMPION";
        const gold = document.createElement("img")
        gold.setAttribute("src", "../js/resources/gold.png")
        hallOfFameContainer.appendChild(gold)
        gameView.setFirstPlace(false)
    } else if (sessionStorage.getItem("result") === "2") {
        title.textContent = "ALMOST THERE, KEEP TRYING";
        const silver = document.createElement("img")
        silver.setAttribute("src", "../js/resources/silver.png")
        hallOfFameContainer.appendChild(silver)
        gameView.getSecondPlace(false)
    } else if (sessionStorage.getItem("result") === "3") {
        title.textContent = "THAT WAS VERY BAD";
        const bronze = document.createElement("img")
        bronze.setAttribute("src", "../js/resources/bronze.png")
        hallOfFameContainer.appendChild(bronze)
        gameView.getThirdPlace(false)
    } else if(sessionStorage.getItem("result") === "4") {
        title.textContent = "LOL";
        const trash = document.createElement("img")
        trash.setAttribute("src", "../js/resources/trash.png")
        hallOfFameContainer.appendChild(trash)
        gameView.setTrash(false)
    }

};

export default { render };
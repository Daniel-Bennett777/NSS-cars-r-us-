import { setTechChoice } from "./transient.js"




const handleTechChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "techPackage") {
        setTechChoice(parseInt(event.target.value))
    }
}








export const techPackage = async () => {

    

    const response = await fetch("http://localhost:8088/techPackages")  //The fetch() function returns a Promise that resolves to the Response object containing information about the response.
    const techPackages = await response.json() // Reads and parses the response body as JSON. The await keyword is used to pause execution until the Promise returned by response.json() is resolved. The parsed JSON data is assigned to the metals variable.

    let optionsHTML = '<select name="techPackage"><option value="0">Technology Options</option>';

    techPackages.forEach((techPackage) => {
        optionsHTML += `<option value="${techPackage.id}">${techPackage.name}</option>`;
    });

    optionsHTML += '</select>';

    return optionsHTML;
    
//forEach method is a built-in JavaScript array method that allows you to iterate over the elements of an array and perform an action for each element
    
}
document.addEventListener("change", handleTechChoice);
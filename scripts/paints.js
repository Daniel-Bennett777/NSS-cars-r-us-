import { setPaintChoice } from "./transient.js"


const handlePaintChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "paintColor") {
        setPaintChoice(parseInt(event.target.value))
    }
}








export const paintOptions = async () => {

    

    const response = await fetch("http://localhost:8088/paintColors")  //The fetch() function returns a Promise that resolves to the Response object containing information about the response.
    const paintColors = await response.json() // Reads and parses the response body as JSON. The await keyword is used to pause execution until the Promise returned by response.json() is resolved. The parsed JSON data is assigned to the metals variable.

    let optionsHTML = '<select name="paintColor"><option value="0">Select Paint Color</option>';

    paintColors.forEach((paintColor) => {//(paintColor) => { ... } is not a function itself; it's an arrow function expression that defines the behavior to execute for each paint color object in the array. 
        optionsHTML += `<option value="${paintColor.id}">${paintColor.name}</option>`;
    });

    optionsHTML += '</select>';

    return optionsHTML;
    
//forEach method is a built-in JavaScript array method that allows you to iterate over the elements of an array and perform an action for each element
    
}
document.addEventListener("change", handlePaintChoice);

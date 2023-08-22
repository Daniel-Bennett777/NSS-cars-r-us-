import { setCarTypeChoice } from "./transient.js";

const handleCarTypeChoice = (event) => {
    if (event.target.name === "carType") {
        setCarTypeChoice(event.target.value);
    }
};

document.addEventListener("change", handleCarTypeChoice);

export const CarTypeOptions = () => {

    return `
        <section class="choices__types options">
            <h2>Vehicle Type</h2>
            <div>
                <input type="radio" name="carType" value="car" /> Car
                <input type="radio" name="carType" value="suv" /> SUV
                <input type="radio" name="carType" value="truck" /> Truck
            </div>
        </section>
    `;
};
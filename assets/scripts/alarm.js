/*document.addEventListener("DOMContentLoaded", function () {
    const hoursInput = document.getElementById("hours");
    const calculateButton = document.getElementById("calculate");
    const futureDateTime = document.getElementById("futureDateTime");

    calculateButton.addEventListener("click", function () {
        const hours = parseInt(hoursInput.value);
        if (!isNaN(hours)) {
            const currentTime = new Date();
            const futureTime = new Date(currentTime.getTime() + hours * 60 * 60 * 1000);

            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
            const formattedFutureTime = futureTime.toLocaleDateString('en-US', options);

            futureDateTime.textContent = `Future Date and Time: ${formattedFutureTime}`;
        } else {
            futureDateTime.textContent = "Please enter a valid number of hours.";
        }
    });
});

<label for="hours">Enter hours:</label>
    <input type="number" id="hours">
    <button id="calculate">Calculate</button>

    <div id="futureDateTime"></div>
    */

    
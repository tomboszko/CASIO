function getCurrentDate() {
    const today = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    const day = String(today.getUTCDate()).padStart(2, '0');
    const month = String(today.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1.
    const year = String(today.getUTCFullYear()).slice(-2); // Get the last 2 digits of the year.
    
    return `${day}/${month}/${year}`;
}

document.addEventListener('DOMContentLoaded', function() {
    
    function displayDate(date) {
        const dateElement = document.getElementById('date');
        dateElement.textContent = date;
    }

    const formattedDateToDisplay = getCurrentDate();
    displayDate(formattedDateToDisplay);
});





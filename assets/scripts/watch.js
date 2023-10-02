
// TIME NOW
function timeNow() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const currentTimeElement = document.getElementById('currentTime');

    if (currentTimeElement) {
        currentTimeElement.innerText = formattedTime;
    }   
}
setInterval(timeNow, 1000);



















document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const utcTime = currentDate.toUTCString();

    document.getElementById("dayOfWeek").textContent = dayOfWeek;
    document.getElementById("utcTime").textContent = utcTime;
});

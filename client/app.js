const functionApiUrl = "https://cloud-resume-function.azurewebsites.net/api/HttpTrigger-cloudResume?code=E9wNT6rBtqjejdDrdBAIlpNbPY0HQ9JD5THt75FHdVkkAzFuDdX7SQ==";
const counterSpan = document.getElementById("counter");

window.addEventListener("DOMContentLoaded", (e) => {
    getCount();
});

function getCount() {
    let visitorCount;

    fetch(functionApiUrl)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            visitorCount = data.visitorCount;
            counterSpan.classList.remove("lds-dual-ring");
            counterSpan.textContent = visitorCount;
        })
        .catch((error) => console.error("somethings wrong I can feel it :", error));

    return visitorCount;
}

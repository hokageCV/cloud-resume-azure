const functionApiUrl = "";

window.addEventListener("DOMContentLoaded", (e) => {
    getCount();
});

function getCount() {
    let count = 0;

    fetch(functionApiUrl)
        .then((response) => response.json())
        .then((data) => {
            count = data.count;
            document.getElementById("counter").textContent = count;
        })
        .catch((error) => console.error("somethings wrong I can feel it :", error));

    return count;
}

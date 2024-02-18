const startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", function () {
    const container = document.querySelector(".homepage-container");
    container.innerHTML = "";
});

fetch('data.json')
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        return response.json();
    })
    .then(data => {
        // Use the parsed JSON data
        console.log(data);
        // Access specific properties
        console.log('Name:', data.name);
        console.log('Age:', data.age);
        console.log('Email:', data.email);
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
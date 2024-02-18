
fetch('../extraction/questions.json')
    .then(response => response.json())
    .then(data => questions = data);

fetch('../extraction/club_code.json')
    .then(response => response.json())
    .then(data => club_id = data);
let selectedKey = 'categories';
const startBtn = document.getElementById("start-btn");
const container = document.querySelector(".homepage-container");


startBtn.addEventListener("click", function () {
    container.innerHTML = "";
    writeFormToDom(selectedKey);
});


function writeFormToDom(nextKey) {
    //Create form container
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');
    //Create question 
    const formQuestion = document.createElement('h2');
    formQuestion.textContent = "What category are you interested in exploring?";
    formQuestion.classList.add('form-question');
    formContainer.appendChild(formQuestion);

    //Create form input
    const answers = document.createElement('div');
    answers.classList.add('form-answers');

    //Display chosen club and exit out of recursive function
    let keys;
    try {
        keys = Object.keys(questions[nextKey]);
    } catch (error) {
        displayChosenClub(selectedKey)
        return;
    }

    //Logic for when reaching end of nested object
    questions = questions[nextKey];
    if (keys[0] === '0') {
        keys = Object.values(questions)
    }

    // Loop through keys 
    for (let category in keys) {
        const labelAndInput = document.createElement('div')
        labelAndInput.classList.add('form-input')
        //Create radio input
        const radioInput = document.createElement('input');
        radioInput.classList.add('radio-btn')
        radioInput.setAttribute('id', keys[category]);
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', 'category');
        radioInput.setAttribute('value', keys[category]);

        //Create label
        const radioInputLabel = document.createElement('label');
        radioInputLabel.setAttribute('for', keys[category]);
        radioInputLabel.textContent = keys[category];

        //Add event listeners to radio buttons
        radioInput.addEventListener('click', () => {
            selectedKey = radioInput.value
        })


        labelAndInput.appendChild(radioInput);
        labelAndInput.appendChild(radioInputLabel);
        answers.appendChild(labelAndInput)
        formContainer.appendChild(answers);
    }

    //Handling form submission
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-btn');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click', () => {
        const allRadioButtons = document.querySelectorAll('input')
        allRadioButtons.forEach(button => {
            if (button.checked) {
                container.innerHTML = "";
                writeFormToDom(selectedKey)
            } else {
                return;
            }
        });
    })





    container.appendChild(formContainer);
    formContainer.appendChild(submitBtn);
}

function displayChosenClub(selectedClub) {

    //Get selected link from json file
    const selectedLink = club_id[selectedClub]
    //Create title for chosen club
    const chosenClub = document.createElement('h1')
    chosenClub.classList.add('chosen-club')
    chosenClub.textContent = selectedClub
    //Create Link container to append selected link
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('club-link-container')
    //Create link url
    const clubLink = document.createElement('a')
    clubLink.classList.add('club-link')
    clubLink.setAttribute('href', `https://bengaged.binghamton.edu/feeds?type=club&type_id=${selectedLink}`)
    clubLink.textContent = 'Click here to go to official Binghamton club website'
    linkContainer.append(clubLink)

    container.append(chosenClub)
    container.append(linkContainer)
    container.classList.add('borderize')
}


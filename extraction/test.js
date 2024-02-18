// Read from questions.json
// get the keys from "categories"

/*

{
  "categories": {
    "Art": {
      "Fine Art and Crafts": [
        "Art Co-Op",
        "Origami Club",
        "Imagination Craft Works",
        "KnitWits"
      ],
      "Dance": [
        "International Flag Dancers",
        "Ballroom Dance Association",
        "Bhangra",
        "Evolution Dance Company"
      ],
      "Music": [
        "The Binghamton Crosbys (Accapella)",
        "Kaskeset (Accapella)",
        "The Rhythm Method (Accapella)",
        "The Vibes (Accapella)",
        "The Harpur Harpeggios (Accapella)",
        "Note to Self (Accapella)",
        "The Binghamtonics (Accapella)",
        "The Binghamton Treblemakers (Accapella)",
        "No Strings Attached (Accapella)",
        "Change of Tone (Accapella)",
        "Binghamton Swifties",
        "Pep Band"
      ],
      "Digital": [
        "Film and Production Society",
        "WHRW 90.5 FM Radio Station"
      ],
      "Theater": [
        "The Pappy Parker Players"
      ],
      "Art History": [],
      "Creative Writing": [
        "Storytelling Workshop Club",
        "Slam Poetry Club"
      ]
    },


*/

const fs = require('fs');
const path = require('path');

const questions = require('./questions.json');

const categories = Object.keys(questions.categories);

// Pull the subcategories from the first category

const subcategories = questions.categories[categories[0]];

console.log(subcategories);



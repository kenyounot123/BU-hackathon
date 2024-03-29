const questions = {
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
      "Art History": [
	"Art History"
      ],
      "Creative Writing": [
        "Storytelling Workshop Club",
        "Slam Poetry Club"
      ]
    },
    "Cultural": {
      "Asian": [
        "Bangali Student Association",
        "Fujianese Union",
        "Chinese American Union",
        "Hong Kong Exchange Square",
        "Indian International Union",
        "Korean American Student Association",
        "Korean American Christian Fellowship",
        "Korean International Students Association",
        "Pakistani Students Association",
        "Philippine-American League",
        "Sikh & Punjabi Student Association",
        "Taiwanese American Student Coalition",
        "Vietnamese Student Association",
        "Binghamton University Japanese Association"
      ],
      "Latin American": [
        "Latin American Union"
      ],
      "North American": [
        "Caribbean Student Association",
        "Dominican Student Association",
        "Haitian Student Association",
        "Philippine-American League",
        "Taiwanese American Student Coalition",
        "Chinese American Union",
        "Korean American Student Association",
        "Korean American Christian Fellowship",
        "Latin American Union"
      ],
      "European": [
        "Turkish Culture Association",
        "Albanian Student Association",
        "Hellenic Cultural Society"
      ],
      "African": [
        "African Student Organization"
      ]
    },
    "Games": {
      "Video Games": [
        "Video Game Association",
        "Minecraft Club",
        "Campus Survival Games"
      ],
      "Board Games": [
        "Mafia Club",
        "Board Game Club",
        "Chess Club"
      ]
    },
    "Government": {
      "Health": [
        "American Red Cross Club"
      ],
      "Council": [
        "Dickinson Town Council",
        "Mountainview College Council"
      ],
      "New York State": [
        "New York Public Interest Research Group",
        "Summit on Student Political Engagement"
      ],
      "Pre-Professional": [
        "Pre-Law Education Organization",
        "Thurgood Marshall Pre-law Society",
        "Pre-Law Education Organization",
        "Model United Nations"
      ]
    },
    "Health": {
      "Disease": [
        "Alzheimer's Foundation of America On Campus",
        "American Cancer Society on Campus"
      ],
      "Sexuality": [
        "Planned Parenthood Generation Binghamton",
        "SHADES"
      ],
      "Medicine/Medical": [
        "Medical Roots Project",
        "Medical Research Interest Club",
        "Medicine In Sports",
        "One Health Medical Association"
      ],
      "Pre-Professional": [
        "American Medical Women's Association",
        "Association for Applied Behavioral Sciences",
        "Health and Wellness Studies Association",
        "MEDLIFE",
        "Pre Pharmacy Association",
        "Nursing Student Association",
        "Student Psychological Association",
        "Pre- Genetic Counseling",
        "Pre-Dental Association",
        "Pre-Medical Association",
        "Pre-Occupational & Physical Therapy Association",
        "Pre-Optometry Association",
        "Pre-Physician Assistant Society",
        "Pre-SOMA",
        "Pre-Veterinary Society"
      ],
      "Philanthropy/Community Service": [
        "Habitat for Humanity",
        "Wishmakers on Campus",
        "Binghamton Aiding Hearts",
        "Binghamton Buddies",
        "Paws and Effect",
        "Partners In Health",
        "Friends of MSF at Binghamton University"
      ],
      "Advocacy and Awareness": [
        "Binghamton University Chapter of Pretty Girls Sweat",
        "Active Minds",
        "One Special World",
        "Partners In Health",
        "Friends of MSF at Binghamton University"
      ],
      "Animals": [
        "Pre-Veterinary Society",
        "Paws and Effect"
      ]
    },
    "Mathematics": {
      "Mathematics": [
        "Actuarial Association",
	"Association For Women in Mathematics",
	"Math Club",
	"Teachers in Mathematics Association"
      ]
    },
    "Nature": {
      "Athletics": [
        "Binghamton Bicycle Co-Op",
        "Binghamton Outdoors Club"
      ],
      "Recreational": [
        "Audubon Society",
        "Binghamton University Bees"
      ],
      "Plants": [
        "Gardening Club"
      ],
      "Advocacy and Awareness": [
        "Environmental CHANGE",
        "Food Co-Op",
        "Food Recovery Network",
        "Plant-Based Bing",
        "Water for Life"
      ]
    },
    "Political": {
      "Health": [
        "American Red Cross Club"
      ],
      "Advocacy": [
        "Binghamton Policy Project",
        "American Parliamentary Debate Association",
        "Summit on Student Political Engagement",
        "Dickinson Town Council",
        "New York Public Interest Research Group",
        "Juvenile Urban Multicultural Program"
      ],
      "Parties": [
        "College Democrats",
        "College Libertarians",
        "College Republicans",
        "Young Democratic Socialists of America at Binghamton University"
      ]
    },
    "Religion": {
      "Judaism": [
        "Chabad",
        "Hillel",
        "Keshet",
        "Zionist Organization",
        "Kaskeset"
      ],
      "Chrisitanity": [
        "Bible Fellowship",
        "Catholic Students / Newman Association",
        "Chinese Christian Fellowship",
        "InterVarsity Christian Fellowship",
        "Korean American Christian Fellowship"
      ],
      "Islam": [
        "Muslim Student Association"
      ],
      "Hindu": [
        "Hindu Student Council"
      ]
    },
    "Science": {
      "Chemistry": [
        "Undergraduate Chemical Society",
        "Biochemistry Club"
      ],
      "Biology": [
        "Biochemistry Club",
        "Biological Sciences Club",
        "Microbiology Club"
      ],
      "Other": [
        "Philosophy of Science Club"
      ]
    },
    "Sports": {
      "Recreational": [
        "Binghamton Bowling",
        "Pep Band"
      ],
      "Athletics": [
        "Binghamton Skate Club",
        "Cheerleaders",
        "Martial Arts Club",
        "SnoCats Ski & Snowboard Club"
      ],
      "Cultural": [
        "Ballroom Dance Association",
        "Bhangra",
        "International Flag Dancers"
      ]
    },
    "Technology": {
      "Engineering": [
        "American Society of Mechanical Engineers",
        "Institute of Electrical and Electronics Engineers",
        "Society of Asian Scientists and Engineers",
        "Society of Automotive and Aerospace Engineers",
        "Society of Hispanic Professional Engineers",
        "Binghamton Automotive Enthusiasts Club",
        "Mechanical Contractors Association of America",
        "Society of Women Engineers"
      ],
      "Computer Science / IT": [
        "Data Science and Analytics",
        "Information Systems Club",
        "Video Game Association",
        "Product Management Development Program"
      ]
    }
  }
}

const categories = Object.keys(questions.categories);

// Pull the subcategories from the first category

const subcategories = questions.categories[categories[0]];

// Get the keys from the first subcategory

const subcategoryKeys = Object.keys(subcategories);

// Get the values from the first subcategory "fine art and crafts"

const subcategoryValues = subcategories[subcategoryKeys[0]];

console.log(categories);
console.log(subcategoryKeys);
console.log(subcategoryValues);
